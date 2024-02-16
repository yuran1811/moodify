const setDrawerToggleRound = (placement) => {
  $(`.drawer-${placement} > .drawerheader > button[data-action=closedrawer]`).css(
    {
      width: "28px",
      height: "28px",
      "border-radius": "100%",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    },
  );
};

const getSesskey = () => {
  $("head script").each(function () {
    const sesskey = $(this)[0].innerHTML.match(/"sesskey":[\w\s]*"(\w+)"/);
    if (sesskey && sesskey.length > 1) {
      chrome.storage.sync.set({ sesskey: sesskey[1] });
    }
  });
};

function injectCustomStyle() {
  $("head").append(
    `<style>
      *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      *::-webkit-scrollbar-thumb {
        background-color: darkgrey;
      }
    </style>`,
  );
}

$(function () {
  console.log("[Moodify]: each page script loaded");

  injectCustomStyle();

  getSesskey();

  $("#user-menu-toggle").on("click", function () {
    const headerHeight = $("body #page-wrapper nav#header").height();
    $("#user-action-menu.show")
      .css({
        top: `${headerHeight - 15 - 5}px`,
      })
      .find("a[role=menuitem]")
      .css({
        padding: "5px 10px",
      });
  });

  $("#usernavigation").css({
    display: "flex",
    "align-items": "center",
    "justify-content": "end",
    gap: "1rem",
  });

  $("#usernavigation .popover-region").each(function () {
    $(this).css({
      width: "32px",
      height: "32px",
    });

    $(this).find(".icon-no-margin").css({
      "align-items": "center",
      "justify-content": "center",
      "border-radius": "100%",
    });
  });

  setDrawerToggleRound("right");
  $(".drawer-right-toggle [data-action=toggle]").on("click", function () {
    setDrawerToggleRound("right");

    $(".myprofileitem.fullname").css({ "font-size": "1.2rem" });
  });

  setDrawerToggleRound("left");
  $(".drawer-left-toggle [data-action=toggle]").on("click", function () {
    setDrawerToggleRound("left");
  });

  $("#page-content .calendarmonth[id*=month-detail] tbody td > div")
    .css({
      height: "100px",
      overflow: "hidden auto",
    })
    .find("a[data-action=view-day-link]")
    .css({
      position: "sticky",
      top: 0,
      left: 0,
      width: "100%",
      padding: "4px",
      background: "var(--light)",
    });
});
