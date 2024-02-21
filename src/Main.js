const DEFAULT_AUTO_LOGIN_TIME = 2000;
const DEFAULT_TOAST_TIME = 5000;

const notifyTemplate = ({ title, message, timeoutMessage, timeout }) => `
  <div id="moodify-notify">
    ${title ? `<p class="moodify-notify__title">${title}</p>` : ""}
    ${message ? `<p class="moodify-notify__message">${message}</p>` : ""}
    ${timeout ? `<p class="moodify-notify__timeout">${timeoutMessage || ""} ${timeout / 1000}s</p>` : ""}
  </div>
`;

function notify({
  title = "Moodify Notification",
  message,
  timeoutMessage,
  timeout = DEFAULT_TOAST_TIME,
}) {
  $("body").append(
    notifyTemplate({
      title,
      message,
      timeoutMessage,
      timeout,
    }),
  );

  let intervalId = setInterval(() => {
    timeout -= 1000;
    if (timeout <= 0) {
      $("#moodify-notify").remove();
      clearInterval(intervalId);
      return;
    }

    $("#moodify-notify > p + p").html(
      notifyTemplate({
        title,
        message,
        timeoutMessage,
        timeout,
      }),
    );
  }, 1000);
}

function removeLoginData() {
  chrome.storage.sync.remove(["username", "password", "sesskey"], () => {});
}

function injectCustomStyle() {
  $("head").append(
    `<style>
      #moodify-notify {
        position: fixed;
        right: 70px;
        top: 70px;
        max-width: 320px;
        padding: 0.5rem 1.2rem;
        z-index: 50;
        color: #656565;
        background-color: #fff;
        font-weight: bold;
        border: 4px solid #656565;
        border-radius: 12px;
        display: flex;
        gap: 8px;
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }

      .moodify-notify__title {
        margin: 0;
        color: #028bff;
        font-size: 1.5rem;
      }
      .moodify-notify__message {
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
      }
      .moodify-notify__timeout {
        margin: 0;
        font-size: 0.8rem;
        font-weight: 400;
      }
    </style>`,
  );
}

const checkAutoLoginValidLink = (moodleLink) => {
  if (!window.location.href.includes("portal")) return true;

  const moodleLinkIsArray = Array.isArray(moodleLink);

  if (!moodleLinkIsArray && !moodleLink.includes("portal")) return false;
  if (moodleLinkIsArray && moodleLink.every((x) => !x.includes("portal")))
    return false;

  return true;
};

chrome.storage.sync.get(["autoLogin"], (data) => {
  injectCustomStyle();

  if (!data.autoLogin) {
    notify({
      message: `Tính năng auto login đang tắt, vui lòng click vào extension icon để thiết lập`,
    });
    return;
  }

  chrome.storage.sync.get(["username", "password", "moodleLink"], (data) => {
    const content = $(".alert.alert-danger").text();

    if (
      ($(".alert.alert-danger").length > 0 && content.includes("Invalid")) ||
      content.includes("Không")
    ) {
      notify({
        message:
          "Thông tin hiện tại không đúng, click vào extension icon để set thông tin đăng nhập của bạn!",
      });
      console.log($(".alert.alert-danger").text());
      removeLoginData();
      return;
    }

    checkAutoLoginValidLink(data?.moodleLink || []) &&
      notify({
        message: "Tính năng tự động đăng nhập đang bật",
        timeoutMessage: `Tự động đăng nhập sau `,
        timeout: DEFAULT_AUTO_LOGIN_TIME,
      });

    $("#loginbtn").hide();

    setTimeout(() => {
      if (data.username && data.password) {
        if (window.location.href.includes("portal")) {
          if (!checkAutoLoginValidLink(data.moodleLink)) return;

          $("input[id*=Username]")[0].value = data.username;
          $("input[id*=Password]")[0].value = data.password;

          $("input[type=submit]")[0].click();
        } else {
          $("#username")[0].value = data.username;
          $("#password")[0].value = data.password;

          $("#login")[0].submit();
        }
      }
    }, DEFAULT_AUTO_LOGIN_TIME);
  });
});
