$(document).ready(function () {
  var event = [];
  $("#buttonAdd").click(function () {
    let title = $("#Title").val();
    let location = $("#Location").val();
    let description = $("#Description").val();

    let startDate = $("#Start-date").val();
    let startTime = $("#Start-time").val();

    let endDate = $("#End-date").val();
    let endTime = $("#End-time").val();

    let misssingValue = false;
    if (title.length == 0) {
      $("#Title").css("background-color", "RED");
      misssingValue = true;
    } else {
      $("#Title").css("background-color", "#FFF");
    }

    if (!startDate) {
      $("#Start-date").css("background-color", "RED");
      misssingValue = true;
    } else {
      $("#Start-date").css("background-color", "#FFF");
    }

    if (misssingValue) {
      return;
    }

    event.push({
      title: title,
      location: location,
      description: description,
      startDate: startDate,
      startTime: startTime,
      endDate: endDate,
      endTime: endTime,
    });

    let regexDate = /(\d{4})-(\d{2})-(\d{2})/.exec(startDate);
    let allday = startTime ? startTime : "All-Day";

    $("#listevent").append(`<div class="col-lg-6 mb-3">
                                <div class="date">
                                    <span class="day">${regexDate[3]} / </span>
                                    <span class="mon">${regexDate[2]} / </span>
                                    <span class="yea">${regexDate[1]}</span>
                                </div>
                                <div class="desc">
                                    <p>
                                        <strong class="hed">${title}</strong>
                                        <span class="des">Location: ${location}<br />When: ${allday}</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div title="Add to Calendar" class="addeventatc btn-block block" data-styling="none">
                                    Add to Calendar
                                    <span class="addeventatc_icon"></span>
                                    <span class="start">${startDate} ${startTime}</span>
                                    <span class="end">${endDate} ${endTime}</span>
                                    <span class="all_day_event">${!startTime}</span>
                                    <span class="timezone">${
                                      Intl.DateTimeFormat().resolvedOptions()
                                        .timeZone
                                    }</span>
                                    <span class="title">${title}</span>
                                    <span class="description">${description}</span>
                                    <span class="location">${location}</span>
                                </div>
                            </div>
                            <script type="text/javascript" src="https://addevent.com/libs/atc/1.6.1/atc.min.js"></script>`);

    $("#Title").val("");
    $("#Location").val("");
    $("#Description").val("");

    $("#Start-date").val("");
    $("#Start-time").val("");

    $("#End-date").val("");
    $("#End-time").val("");
  });

  $("#buttonExport").click(function () {
    copyToClipboard(btoa(JSON.stringify(event)));
  });

  $("#buttonImport").click(function () {
    paste();
  });
});

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

async function paste() {
  const text = await navigator.clipboard.readText();
  let eventList = {};
  try {
    eventList = JSON.parse(atob(text));
  } catch (e) {
      alert("please check your input");
  }

  console.log(eventList);
}
