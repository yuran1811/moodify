const moodifyTimetableScript = `javascript:%28%28t%2Ce%29%3D%3E%7B%22portal.ctdb.hcmus.edu.vn%22%3D%3D%3De.host%26%26%22%2Fsinh-vien%2Fket-qua-dkhp%22%3D%3D%3De.pathname%26%26%28t.body.appendChild%28t.createElement%28%22script%22%29%29.src%3D%22https%3A%2F%2Fbeerpiss.github.io%2Fhcmus-ctda-calendar%2Fscript.min.js%3Ft%3D%22%2BMath.floor%28Date.now%28%29%2F6e4%29%29%7D%29%28document%2Clocation%29%3B`;

const injectStyles = () => {
  const style = document.createElement("style");
  style.innerHTML = `
    * {
      font-family: Montserrat,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"!important;
    }

    /* button style */
    .btn-17,
    .btn-17 *,
    .btn-17 :after,
    .btn-17 :before,
    .btn-17:after,
    .btn-17:before {
      border: 0 solid;
      box-sizing: border-box;
    }

    .btn-17 {
      -webkit-mask-image: -webkit-radial-gradient(#1d1d1d, #fff);
      -webkit-tap-highlight-color: transparent;
      -webkit-appearance: button;
      background-color: #1d1d1d;
      background-image: none;
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      text-transform: capitalize;
      margin: 12px 0 0 0;
      padding: 0;
    }

    .btn-17:disabled {
      cursor: default;
    }

    .btn-17:-moz-focusring {
      outline: auto;
    }

    .btn-17 svg {
      display: block;
      vertical-align: middle;
    }

    .btn-17 [hidden] {
      display: none;
    }

    .btn-17 {
      border-width: 2px;
      padding: 8px 12px;
      z-index: 0;
    }

    .btn-17,
    .btn-17 .text-container {
      overflow: hidden;
      position: relative;
    }

    .btn-17 .text-container {
      display: block;
      mix-blend-mode: difference;
    }

    .btn-17 .text {
      display: block;
      position: relative;
    }

    .btn-17:hover .text {
      -webkit-animation: move-up-alternate 0.3s forwards;
      animation: move-up-alternate 0.3s forwards;
    }

    @-webkit-keyframes move-up-alternate {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(80%);
      }

      51% {
        transform: translateY(-80%);
      }

      to {
        transform: translateY(0);
      }
    }

    @keyframes move-up-alternate {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(80%);
      }

      51% {
        transform: translateY(-80%);
      }

      to {
        transform: translateY(0);
      }
    }

    .btn-17:after,
    .btn-17:before {
      --skew: 0.2;
      background: #fff;
      content: "";
      display: block;
      height: 102%;
      left: calc(-50% - 50% * var(--skew));
      pointer-events: none;
      position: absolute;
      top: -104%;
      transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
      transition: transform 0.2s ease;
      width: 100%;
    }

    .btn-17:after {
      --progress: 0%;
      left: calc(50% + 50% * var(--skew));
      top: 102%;
      z-index: -1;
    }

    .btn-17:hover:before {
      --progress: 100%;
    }

    .btn-17:hover:after {
      --progress: -102%;
    }

    /* notify style */
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

    /* card style */
    .e-card {
      margin: 0;
      background: transparent;
      box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
      position: fixed;
      width: 240px;
      height: 330px;
      border-radius: 16px;
      overflow: hidden;
      z-index: 1000;
    }

    .wave {
      position: absolute;
      width: 540px;
      height: 700px;
      opacity: 0.6;
      left: 0;
      top: 0;
      margin-left: -50%;
      margin-top: -70%;
      background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
    }

    .icon {
      width: 3em;
      margin-top: -1em;
      padding-bottom: 1em;
    }

    .infotop {
      text-align: center;
      font-size: 20px;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      color: rgb(255, 255, 255);
      font-weight: 600;
    }

    .name {
      font-size: 14px;
      font-weight: 100;
      position: relative;
      text-transform: lowercase;
    }
    .name a {
      display: inline-block;
      font-weight: 300;
      padding: 2px 5px;
      border-radius: 4px;
      color: white;
      background-color: #028bff;
    }

    .wave:nth-child(2),
    .wave:nth-child(3) {
      top: 210px;
    }

    .playing .wave {
      border-radius: 40%;
      animation: wave 3000ms infinite linear;
    }

    .wave {
      border-radius: 40%;
      animation: wave 55s infinite linear;
    }

    .playing .wave:nth-child(2) {
      animation-duration: 4000ms;
    }

    .wave:nth-child(2) {
      animation-duration: 50s;
    }

    .playing .wave:nth-child(3) {
      animation-duration: 5000ms;
    }

    .wave:nth-child(3) {
      animation-duration: 45s;
    }

    @keyframes wave {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
};

const notifyTemplate = () => `
  <div class="e-card playing" role="draggable" style="top:52px;left:52px">
    <div class="drag-header" style="width:100%;height:36px;position:absolute;top:0;left:0;right:0;z-index:1000;display:flex;align-items:center;justify-content:center">
      <svg style="cursor:move" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"/></svg>
    </div>
    <div class="image"></div>

    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>

    <div class="infotop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="icon"
        style="scale:1.4"
      >
        <path
          fill="white" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
          fill="white"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          fill="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>

      <br />
      Moodify Timetable

      <br />
      <div class="name" style="margin-top:5px">Powered by <a target="_blank" href="https://github.com/beerpiss/hcmus-ctda-calendar">beerpiss</a></div>

      <br />
      <div class="name" style="padding:0 32px">Drag and drop the button below to the bookmark bar</div>
      <a href="${moodifyTimetableScript}">
      <button role="Timetable" class="btn-17">
        <span class="text-container">
        <span class="text">Export Timetable</span>
        </span>
      </button>
      </a>

      </div>
  </div>
`;

function notify() {
  $("body").append(notifyTemplate());
}

function dragElement(el) {
  let pos1 = 52,
    pos2 = 52,
    pos3 = 52,
    pos4 = 52;

  if (el.querySelector(".drag-header")) {
    el.querySelector(".drag-header").onmousedown = dragMouseDown;
  } else {
    el.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    el.style.top = el.offsetTop - pos2 + "px";
    el.style.left = el.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

chrome.storage.sync.get(["portalTimetableExport"], (data) => {
  if (!data?.portalTimetableExport) return;

  injectStyles();

  notify();
  dragElement(document.querySelector('[role="draggable"]'));

  $('button[role="Timetable"').on("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  $('button[role="Timetable"').on("mousemove", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
});
