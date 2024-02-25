const DEFAULT_UPDATE_INTERVAL = 60;

function injectCustomStyle() {
  const style = document.createElement("style");
  style.textContent = `<style>
/*! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com*/
*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}

*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }

#moodify-root{filter:drop-shadow(0 0 0.4rem var(--fds-black-alpha-80));position:absolute;right:16px;top:0;max-height:calc(100vh - var(--header-height));width:365px;border-radius:8px;background-color:var(--card-background);--tw-text-opacity:1;color:rgb(226 232 240/var(--tw-text-opacity))}#moodify-root ::-webkit-scrollbar{height:7px;width:7px;background-color:initial}#moodify-root ::-webkit-scrollbar-thumb{border-radius:4px;--tw-bg-opacity:1;background-color:rgb(148 163 184/var(--tw-bg-opacity))}

#moodify-root #moodify-header p{margin:20px 16px 12px;text-align:center;font-size:1.2rem;font-weight:700}

#moodify-root #moodify-content{margin-left:16px;margin-right:16px;height:max-content;max-height:calc(100vh - 145px - var(--header-height));overflow:hidden;padding-bottom:12px;padding-top:20px}#moodify-root #moodify-content #moodify-event-list{display:flex;height:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start}#moodify-root #moodify-content #moodify-event-list>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(20px*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(20px*var(--tw-space-y-reverse))}#moodify-root #moodify-content #moodify-event-list{overflow-y:auto;overflow-x:hidden}#moodify-root #moodify-content #moodify-event-list .moodify-event-item-header .moodify-event-item-title{font-size:1rem;font-weight:700}#moodify-root #moodify-content #moodify-event-list .moodify-event-item-header .time-wrapper{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}#moodify-root #moodify-content #moodify-event-list .moodify-event-item-header .time-wrapper .moodify-event-item-date,#moodify-root #moodify-content #moodify-event-list .moodify-event-item-header .time-wrapper .moodify-event-item-timeremain{font-size:.8125rem}#moodify-root #moodify-content #moodify-event-list .moodify-event-item{position:relative;width:100%}#moodify-root #moodify-content #moodify-event-list .moodify-event-item .moodify-event-item-func{position:absolute;top:50%;transform:translateY(-50%);right:0;display:flex;gap:12px;align-items:center;justify-content:flex-end}#moodify-root #moodify-content #moodify-event-list .moodify-event-item a{display:inline-block}#moodify-root #moodify-content #moodify-event-list .moodify-event-item-body .moodify-event-item-description{font-size:.85rem;font-weight:600}

.-ml-1{margin-left:-.25rem}.mr-3{margin-right:.75rem}.inline-flex{display:inline-flex}.h-5{height:1.25rem}.w-5{width:1.25rem}@keyframes ping{75%,to{transform:scale(2);opacity:0}}.animate-ping{animation:ping 1s cubic-bezier(0,0,.2,1) infinite}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{animation:spin 1s linear infinite}.cursor-not-allowed{cursor:not-allowed}.items-center{align-items:center}.rounded-md{border-radius:.375rem}.bg-indigo-500{--tw-bg-opacity:1;background-color:rgb(99 102 241/var(--tw-bg-opacity))}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-semibold{font-weight:600}.leading-6{line-height:1.5rem}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.opacity-25{opacity:.25}.opacity-75{opacity:.75}.shadow{--tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px -1px #0000001a;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150,.transition{transition-duration:.15s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\:bg-indigo-400:hover{--tw-bg-opacity:1;background-color:rgb(129 140 248/var(--tw-bg-opacity))}
</style>`;

  document.head.appendChild(style);
}

const loadingSpinSVG = `
<svg
  class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
>
  <circle
    class="opacity-25"
    cx="12"
    cy="12"
    r="10"
    stroke="currentColor"
    stroke-width="4"
  ></circle>
  <path
    class="opacity-75"
    fill="currentColor"
    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  ></path>
</svg>`;

// https://icones.js.org/collection/bx?s=plane
const submitSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M2.6 13.083l3.452 1.511L16 9.167l-6 7l8.6 3.916a1 1 0 0 0 1.399-.85l1-15a1.002 1.002 0 0 0-1.424-.972l-17 8a1.002 1.002 0 0 0 .025 1.822zM8 22.167l4.776-2.316L8 17.623z" fill="currentColor"/></svg>`;

const editSubmissionSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M16 2.012l3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287l-3-3zm0 6h16v2H4z" fill="currentColor"/></svg>`;

const moodleIconPath = `
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path
    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
  />
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
  />`;

chrome.storage.sync.get(["facebookIntegrate"], function ({ facebookIntegrate }) {
  if (typeof facebookIntegrate !== "boolean" || facebookIntegrate === false)
    return;

  injectCustomStyle();

  function createPopup(relativeElement) {
    const popup = document.createElement("div");
    [
      ["role", "moodle-popup"],
      ["aria-label", "Moodle Popup"],
      ["aria-modal", "true"],
    ].forEach(([key, value]) => popup.setAttribute(key, value));

    Object.assign(popup.style, {
      position: "absolute",
      top: "3.25rem",
      left: "-5rem",
      right: "0",
    });

    popup.innerHTML = `
    <div id="moodify-root" role="moodle-popup">
      <div id="moodify-header">
        <p>Moodify Events</p>
        <p style="font-size: 0.8rem;font-weight:600;margin:6px 0 0">
          Made by <a href="https://fb.com/YuranLegends" title="yuran1811">yuran1811</a>
        </p>

        <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: center;">
          <span id="now-time-display" style="font-size: 0.8rem">${new Date().toLocaleString()}</span>
        </div>
      </div>
      <div id="moodify-content">
        <ul id="moodify-event-list">
        <button
            disabled
            type="button"
            class="inline-flex cursor-not-allowed items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-indigo-400"
            style="align-self:center"
          >
            ${loadingSpinSVG} Processing...
          </button>
        </ul>
      </div>
    </div>`;

    relativeElement.appendChild(popup);

    updatePopup();
  }

  function updatePopup(data) {
    const popup = document.querySelector(`[role="moodle-popup"]`);

    if (!popup || !data || !data?.length) return;

    const headerHeight = document.querySelector("#moodify-header").clientHeight;
    document.querySelector("#moodify-content").style["max-height"] =
      `calc(100vh - ${headerHeight}px - var(--header-height))`;

    data.sort((a, b) => {
      const dateA = new Date(a.eventTime);
      const dateB = new Date(b.eventTime);
      return dateB - dateA;
    });

    const items = [...data].map((item) => {
      return `
      <li class="moodify-event-item">
        <div class="moodify-event-item-func">
          <a class="submit-link" target="_blank" href="${item.url}&action=editsubmission">${submitSVG}</a>
        </div>
        <div class="moodify-event-item-header">
          <a target="_blank" href="${item.url}">
            <p class="moodify-event-item-title">${item.activityname}</p>
          </a>

          <div class="time-wrapper">
            <p class="moodify-event-item-date">Due: ${item.eventTime}</p>
            <p class="moodify-event-item-timeremain">
              Last update: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <div class="moodify-event-item-body">
          <p class="moodify-event-item-description">${item.course.fullname}</p>
        </div>
      </li>`;
    });

    Array.from(document.querySelectorAll("#moodify-event-list")).forEach(
      (el) =>
        (el.innerHTML =
          data.length > 0
            ? items.join("")
            : `<li class="moodify-event-item" style="align-self:center">
                <div class="moodify-event-item-header">
                  <p class="moodify-event-item-title" style="text-align:center">
                    No deadlines - No pain
                  </p>
                </div>

                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 301.65 349.35"
                  style="scale:0.6"
                >
                  <defs>
                    <style>
                      .cls-1 {
                        fill: #fdf381;
                      }
                      .cls-2 {
                        fill: #fff;
                      }
                    </style>
                  </defs>
                  <path
                    class="cls-1"
                    d="M400.89,254.29h0c-75.93,0-143.41,91.21-143.41,167.14h0c0-75.93-67.48-167.14-143.41-167.14h0c75.93,0,143.41-91.2,143.41-167.13h0C257.48,163.09,325,254.29,400.89,254.29Z"
                    transform="translate(-105.17 -81.33)"
                  />
                  <rect
                    class="cls-2"
                    x="237.96"
                    y="44.03"
                    width="57.76"
                    height="67.31"
                    rx="28.88"
                  />
                  <path
                    class="cls-2"
                    d="M171.83,357.48h0c-15.29,0-28.88,18.37-28.88,33.66h0c0-15.29-13.59-33.66-28.88-33.66h0c15.29,0,28.88-18.36,28.88-33.66h0C143,339.12,156.54,357.48,171.83,357.48Z"
                    transform="translate(-105.17 -81.33)"
                  />
                  <path
                    class="cls-1"
                    d="M406.83,386.65h0c-20,0-37.78,24-37.78,44h0c0-20-17.78-44-37.78-44h0c20,0,37.78-24,37.78-44h0C369.05,362.62,386.83,386.65,406.83,386.65Z"
                    transform="translate(-105.17 -81.33)"
                  />
                  <path
                    class="cls-1"
                    d="M180.73,125.35h0c-20,0-37.78,24-37.78,44h0c0-20-17.78-44-37.78-44h0c20,0,37.78-24,37.78-44h0C143,101.33,160.73,125.35,180.73,125.35Z"
                    transform="translate(-105.17 -81.33)"
                  />
                </svg>
              </li>`),
    );
  }

  const updateData = () => {
    chrome.storage.sync.get(["moodleEvents"], function ({ moodleEvents }) {
      if (!moodleEvents) moodleEvents = [];

      updatePopup(moodleEvents);
    });
  };

  // Add Moodle Icon to Facebook navigation bar
  setTimeout(async function () {
    setTimeout(() => {
      updateData();
    }, 200);

    setInterval(updateData, 1000 * DEFAULT_UPDATE_INTERVAL);

    const nowTimeUpdate = () => {
      const popup = document.querySelector(`[role="moodle-popup"`);

      let nowTimeDisplayId = null;
      if (popup.style.display !== "none") {
        nowTimeDisplayId = setInterval(() => {
          document.querySelector("#now-time-display").innerHTML =
            `${new Date().toLocaleString()}`;
        }, 1000);
      } else {
        clearInterval(nowTimeDisplayId);
        nowTimeDisplayId = null;
      }
    };

    const updateIconState = (cloneElement) => {
      const popup = document.querySelector(`[role="moodle-popup"`);
      popup.style.display = ["none", "block"].at(popup.style.display === "none");

      cloneElement
        .querySelector("svg")
        .setAttribute(
          "style",
          popup.style.display === "block"
            ? "--color: var(--accent)"
            : "--color: var(--primary-icon)",
        );

      Object.assign(cloneElement.querySelector("div[role=button]").style, {
        "background-color":
          popup.style.display === "block"
            ? "var(--primary-deemphasized-button-background)"
            : "var(--secondary-button-background)",
        "border-radius": "100%",
      });
    };

    // Clone Facebook Icon Element
    const target = document.querySelectorAll(`[role="navigation"]`)[1];
    const element = target.children[1];
    const cloneElement = element.cloneNode(true);

    target.appendChild(cloneElement);

    // Icon Div
    cloneElement.querySelector("div").setAttribute("role", "button");
    cloneElement.querySelector("div").style.position = "relative";

    // Notif badge
    const notifBadge = document.createElement("div");
    notifBadge.setAttribute("role", "status-badge");
    notifBadge.setAttribute("aria-label", "Moodle Notification Badge");
    Object.assign(notifBadge.style, {
      position: "absolute",
      top: "0",
      right: "0",
      width: "12px",
      height: "12px",
      "z-index": "999",
      backgroundColor: "var(--accent)",
      "border-radius": "100%",
    });

    const notifBadgeClone = notifBadge.cloneNode(true);

    notifBadge.setAttribute("class", "absolute animate-ping");
    cloneElement.querySelector("div").appendChild(notifBadge);

    notifBadgeClone.setAttribute("class", "absolute");
    cloneElement.querySelector("div").appendChild(notifBadgeClone);

    // Moodle SVG
    const svg = cloneElement.querySelector("svg");
    const newSvg = svg.cloneNode(true);
    newSvg.setAttribute("viewBox", "1 8 20 10");
    newSvg.innerHTML = moodleIconPath;
    newSvg.style.scale = "1.3";

    svg.parentNode.replaceChild(newSvg, svg);

    // Moodle Icon Handler
    const link = cloneElement.querySelector(`[role="link"]`);
    link.setAttribute("href", "#");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      updateData();
      updatePopup();

      updateIconState(cloneElement);

      nowTimeUpdate();
    });

    createPopup(cloneElement);
    updateIconState(cloneElement);

    nowTimeUpdate();

    // Close popup on outside click
    document.addEventListener("click", (e) => {
      if (e.target.closest(`[role="moodle-popup"]`)) return;

      if (
        document.querySelector(`[role="moodle-popup"]`).style.display === "block"
      )
        link.click();
    });
  }, 2000);
});
