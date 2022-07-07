const scriptURL =
  "https://script.google.com/macros/s/AKfycbxWuk_UqliDRo9fWqp_z7hP1FJB6STpAuU7UolmlluOZwaUnic8Vdm8h1pi3k2o48HT/exec ";
const form = document.forms["rsvpform"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      $("#form_alert").html(
        "<div class='alert alert-success'> RSVP sent successfully.</div>"
      )
    )
    .catch((error) =>
      $("#form_alert").html(
        "<div class='alert alert-success'> RSVP dont sent successfully.</div>"
      )
    );
});

$("#kedatangan").change(function () {
  if ($(this).val() == 1) {
    $("#jumlahkedatanganform").show();
    $("#namaform").show();
    $("#showcalendar").show();
    $("#waktuform").show();
  } else if ($(this).val() == 2) {
    $("#namaform").hide();
    $("#jumlahkedatanganform").hide();
    $("#showcalendar").hide();
    $("#waktuform").hide();
  } else {
    $("#namaform").hide();
    $("#jumlahkedatanganform").hide();
    $("#showcalendar").hide();

    $("#waktuform").hide();
  }
});

function updateTimer() {
  future = Date.parse("aug 06, 2022 11:30:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer").innerHTML =
    "<div>" +
    d +
    "<span>Days</span></div>" +
    "<div>" +
    h +
    "<span>Hours</span></div>" +
    "<div>" +
    m +
    "<span>Minutes</span></div>" +
    "<div>" +
    s +
    "<span>Seconds</span></div>";
}
setInterval("updateTimer()", 1000);

var aud = document.getElementById("myAudio");
aud.volume = 0.1;
