const coursesLayout = () => {
  if (window.matchMedia("(max-width: 800px)").matches) {
    $(".courses").css({
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
    });
  } else {
    $(".courses").css({
      display: "grid",
      "column-gap": "20px",
      gridTemplateColumns: "repeat(2, 1fr)",
    });

    $(".coursebox").css({ margin: "10px 0" });
  }
};

const loadEventData = () => {
  const getDayInfo = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return { day, month, year };
  };

  chrome.storage.sync.get(["sesskey"], function ({ sesskey }) {
    if (sesskey == null) return;

    const { day, month, year } = getDayInfo();

    $.ajax({
      url: `https://courses.ctda.hcmus.edu.vn/lib/ajax/service.php?sesskey=${sesskey}&info=core_calendar_get_calendar_monthly_view`,
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
          methodname: "core_calendar_get_calendar_monthly_view",
          args: {
            view: "month",
            day,
            month,
            year,
          },
        },
      ]),
    }).done(function (res) {
      const [{ data }, ...rest] = res;
      const {
        daynames, // { dayno, shortname, fullname }[]
        previousperiodlink,
        previousperiodname,

        nextperiodlink,
        nextperiodname,

        periodname,
        url,

        weeks /* 
        {
          days: {
            daytitle,
            events: {
              formattedtime,
              url,
              viewurl,
              activityname,
              course: {
                viewurl,
                fullname,
              }
            }[]
          }[]
        }[]
        */,
      } = data;

      const moodleEvents = [];

      data.weeks.map((_) => {
        return _.days.map((_) => {
          const timestamp = _.timestamp * 1000;
          const eventTime = new Date(timestamp).toLocaleString();

          return _.events.map((event) => {
            moodleEvents.push({
              eventTime,
              timestamp,
              formattedtime: event.formattedtime,
              url: event.url,
              viewurl: event.viewurl,
              activityname: event.activityname,
              course: {
                viewurl: event.course.viewurl,
                fullname: event.course.fullname,
              },
            });

            return {
              eventTime,
              timestamp,
              formattedtime: event.formattedtime,
              url: event.url,
              viewurl: event.viewurl,
              activityname: event.activityname,
              course: {
                viewurl: event.course.viewurl,
                fullname: event.course.fullname,
              },
            };
          });
        });
      });

      chrome.storage.sync.set({ moodleEvents });
    });
  });
};

$(function () {
  console.log("[Moodify]: home page script loaded");

  $(".homepage-carousel").remove();
  $(".course-content").remove();

  $("#frontpage-course-list").css({ "padding-top": 0 });
  $("#frontpage-course-list > h2").css({ "padding-left": 0 });

  coursesLayout();
  window.addEventListener("resize", coursesLayout);

  const moreCourses = $(".paging-morelink");
  moreCourses
    .css({
      "max-width": "1140px",
      margin: "0 auto",
    })
    .clone()
    .insertAfter("#frontpage-course-list > h2");
  moreCourses.remove();

  loadEventData();
});
