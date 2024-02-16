function setScroll(selector) {
  const getSelectorWidth = () => $(selector).width();

  const setLayout = (width) => {
    $(selector).css({ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" });

    if (width >= 680) {
      $(selector).css({ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" });
    }

    if (width >= 820) {
      $(selector).css({ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" });
    }
  };

  setLayout(getSelectorWidth());
  window.addEventListener("resize", () => {
    setLayout(getSelectorWidth());
  });
}

$(function () {
  console.log("[Moodify]: course page script loaded");

  $("div[id^=coursecontentcollapse]")
    .css({
      "overflow-y": "scroll",
      height: "320px",
    })
    .each(function () {
      $(this).find(".activity-wrapper").css({ padding: "4px" });
      $(this).find(".activity-item").css({ padding: "4px" });
    });

  $("#page-content #region-main").css({ padding: "0 36px" });

  $(".has-blocks.mb-3").removeClass("has-blocks").css("width", "100%");

  $("#page").css({ "margin-top": "0" });
  $("#region-main").css({ margin: "0" });

  $("a.coursename").css({ "font-size": "1rem" });
  $("a.coursename + div > .categoryname").css({ "font-size": ".75rem" });

  $(".secondary-navigation  ul[id*=moremenu] > li").each(function () {
    $(this).css({ "max-width": "135px" });
    $(this).find("a").css({ padding: "8px 16px" });
  });

  chrome.storage.sync.get(
    ["quickBrowse", "sesskey", "courseSplitView"],
    (data) => {
      if (data?.courseSplitView) {
        setScroll(".topics");
        setScroll(".weeks");
      }

      if (data?.quickBrowse && data?.sesskey)
        $.ajax({
          url: `https://courses.ctda.hcmus.edu.vn/lib/ajax/service.php?sesskey=${data.sesskey}&info=core_course_get_enrolled_courses_by_timeline_classification`,
          method: "POST",
          dataType: "json",
          contentType: "application/json",
          accepts: "application/json, text/javascript, */*; q=0.01",
          mode: "cors",
          crossDomain: true,
          credentials: "same-origin",
          xhrFields: { withCredentials: true },
          data: JSON.stringify([
            {
              index: 0,
              methodname:
                "core_course_get_enrolled_courses_by_timeline_classification",
              args: {
                classification: "all",
                sort: "id",
                offset: 0,
                limit: 100,
              },
            },
          ]),
        }).done(function (res) {
          const [{ data }, ...rest] = res;
          const rawCourses = data.courses;
          const courses = rawCourses.map((course) => ({
            name: course.fullname,
            link: `https://courses.ctda.hcmus.edu.vn/course/view.php?id=${course.id}`,
          }));

          $("#page > #topofscroll")[0].insertAdjacentHTML(
            "beforebegin",
            `<div id="moodify-courses" style="max-width:1100px;display:flex;align-items:center;width:100%;margin:0 auto;overflow:auto hidden;"></div>`,
          );
          courses.reverse().forEach(({ link, name }) => {
            const card = `<a
        href="${link}"
        style="display:inline-block;padding:0.4rem 0;margin:0 0.2rem;width:220px;min-width:220px"
      >
        <p style="padding:1rem">${name}</p>
      </a>`;
            $("#moodify-courses").append(card);
          });

          let loadCoursesInterval = setInterval(() => {
            if (
              document.querySelector(".overlay-icon-containter") ||
              document.querySelectorAll(".card[role=listitem]").length !==
                courses.length
            )
              return;

            clearInterval(loadCoursesInterval);

            $(".card[role=listitem]").each(function (i, card) {
              card.querySelector("a").style.display = "none";

              $(this).css({
                position: "relative",
                "min-height": "80px",
                height: "max-content",
              });

              const menuBtn = $(this).find(".dropdown");
              menuBtn
                .clone()
                .appendTo($(this).find(".card-body"))
                .css({ position: "absolute", top: "0", right: "0" })
                .find("button")
                .css({ rotate: "90deg" });
              menuBtn.remove();

              $(this).find(".card-body + div").remove();
            });
          }, 200);
        });
    },
  );
});
