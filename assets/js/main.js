
$(document).ready(function () {
  animateIndex();
  // gsap.to(".profile", {duration:2, x=-300, borderRadius:"20%", ease:"elastic"})
  i = 0;
  timerInterval = setInterval(function () {
    $(".card-img-overlay").find($("span.n")[0]).removeClass("n").addClass("glow");
    // gsap.from(".glow", {duration:.1, x: 50,y:50,opacity:0, ease:"power2.out" });
    if (i > 0) {
      $(".card-img-overlay").find($("span.glow")[0]).removeClass("glow");
    }
    i++
    if (i === 435) {
      clearInterval(timerInterval);
    }
  }, 60);
});
function animateIndex() {
  gsap.from("#cardGreeting", { duration: 1, backgroundPosition: '-200px,0px', scale: 1.5, opacity: 0, ease: "power2.out" });
  gsap.from("#cardImage1", { duration: 2, x: 300, delay: 1, opacity: 0, ease: "power2.out" });
  gsap.from("#cloud", { duration: 2, x: 200, y: 200, opacity: 0, delay: 3, ease: "elastic" });
  gsap.from("#aside1", { duration: 1, opacity: 0, delay: 4, ease: "elastic" });
}
$('form1').submit(function (event) {
  event.preventDefault();
  // validate input before 
  var nameInput = $("#exampleInputName").val();
  var eMailInput = $("#exampleInputEmail1").val();
  var textInput = $("#exampleTextMessage").val();
  alert("haha")
  alertCall("haha");
  // if (textinput != "") {
  //   $('#inputModal').foundation('close');
  //   apiKey = textinput;
  // }
});
function alertCall(textAlert) {
  $("#alertText").text(textAlert);
  $('#alertModal').modal('show');
}
$('#alertModal').modal('show');
