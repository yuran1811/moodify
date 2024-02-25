const username = $("#username");
const password = $("#password");

const token = $("#token");

const waitingButton = $(`[role="waitingButton"]`);
const loginButton = $(`[role="loginButton"]`);
const editableLog = $(`[role="editableLog"]`);

const ELEMENT_STORAGE_PROP = "data-collect";
const STORAGE_SELECTOR = `[${ELEMENT_STORAGE_PROP}]`;

const DEBOUNCE_TIME_DURATION = 150;

let debounceTimerId;

const attributeToDataset = (string) =>
  string
    .toLowerCase()
    .split("-")
    .slice(1)
    .reduce((res, cur, idx) => {
      if (!idx) return res + cur;
      return res + cur.toUpperCase();
    }, "");

const removeInputHandler = (e) => {
  if (!e?.target?.parentElement) return;

  e.target.parentElement.remove();
  saveAction();
};

const generateMoodleLinkInput = (value) =>
  `<div class="input-with-remove">
    <input
      ${ELEMENT_STORAGE_PROP}
      id="moodleLink"
      type="text"
      placeholder="Type a link"
      value="${value || ""}"
    />
    <button class="input-remove-btn">❌</button>
  </div>`;

function loadFromStorage() {
  chrome.storage.sync.get((data) => {
    if (data.autoSave) data = data.autoSave;

    const container = $(".input-container");

    const initValue = (id, value, isMain = false) => {
      const el = document.getElementById(id);
      if (el) {
        el[el.type === "checkbox" ? "checked" : "value"] = value;

        isMain && (el.dataset.mainLink = true);
      }
    };

    for (const [id, value] of Object.entries(data)) {
      if (id === "moodleLink" && Array.isArray(value)) {
        initValue(id, value[0], true);

        value.forEach(
          (v, idx) => idx && container.append(generateMoodleLinkInput(v)),
        );
      } else initValue(id, value);
    }

    $(".input-remove-btn").on("click", removeInputHandler);
  });
}

function collectData() {
  const data = {};

  for (const el of document.querySelectorAll(STORAGE_SELECTOR)) {
    const value = el.type === "checkbox" ? el.checked : el.value;

    if (!data.hasOwnProperty(el.id)) data[el.id] = value;
    else {
      if (!Array.isArray(data[el.id])) data[el.id] = [data[el.id]];

      data[el.id].push(value);
    }
  }

  return data;
}

function saveOnChange(e) {
  if (
    [undefined].includes(
      typeof e.target.dataset[attributeToDataset(ELEMENT_STORAGE_PROP)],
    )
  )
    return;

  clearTimeout(debounceTimerId);
  debounceTimerId = setTimeout(saveAction, DEBOUNCE_TIME_DURATION);
}

const saveAction = () => {
  const collectedData = collectData();
  chrome.storage.sync.set({ autoSave: collectedData, ...collectedData });
};

function appendToEditableLog(...texts) {
  editableLog.prepend(
    `<p>
    ${texts
      .map(
        (text) =>
          `<span class="log-time">
            <strong>${new Date().toLocaleString()}</strong>
          </span>
          <br />
          <span class="log-content">${text}</span>`,
      )
      .join("")}
    </p>`,
  );
}

async function onLoginButtonClick() {
  waitingButton.css({ display: "inline-flex" });
  loginButton.css({ display: "none" });

  const res = await fetch(
    `${$("#moodleLink")[0].value}/login/token.php?username=${username.val()}&password=${password.val()}&service=moodle_mobile_app`,
  );
  const data = await res.json();

  if (!data?.token) {
    appendToEditableLog(`Login failed`, `${data}`);
    return;
  }

  loginButton.css({ display: "inline-flex" });
  waitingButton.css({ display: "none" });

  token.val(data.token);
  appendToEditableLog(
    `Token(<strong>${data.token}</strong>)`,
    `Tính năng lấy event ở <i>facebook.com</i> đã hoạt động`,
  );

  saveAction();
}

(() => {
  $(document).on("change", saveOnChange).on("input", saveOnChange);
  $("input[data-signin-info]").on("keypress", function (e) {
    if (e.key === "Enter") onLoginButtonClick();
  });

  loadFromStorage();
  loginButton.on("click", onLoginButtonClick);

  // Add new Moodle link input
  $(".add-new").on("click", function () {
    const container = $(".input-container");
    const lastInputValue = Array.from(
      container[0].querySelectorAll("input"),
    ).slice(-1)[0].value;

    // Not append if the last input is empty
    if (lastInputValue.trim().length === 0) return;

    container.append(generateMoodleLinkInput());
    $(".input-remove-btn").on("click", removeInputHandler);
  });
})();
