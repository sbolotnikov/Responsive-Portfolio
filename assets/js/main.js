var fieldText = "";
var char = 0;
var textArray = [];
var timer, field;
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
  // console.log($(".head1.link").length);
  // for(let j=0; j<$(".head1.link").length;j++) {
  //   field = $(".head1.link:eq("+j+")");
  //   console.log(field.html());
  
  //   fieldText = field.html();
  //   console.log(fieldText);
  //   textArray = fieldText.split("")
  //   let htmlholder = "";
  //   for (let i = 0; i < textArray.length; i++) {
  //     htmlholder += "<span class='anime'>" + textArray[i] + "</span>";
  //   }
  //   field.html(htmlholder);
  // };
  // $("figure.description")
  // .mouseenter(function() {
  //   timer = setInterval(onTick(this), 50);
  // })
  // .mouseleave(function() {
  //   $( this ).find( "span" ).text( "mouse leave" );
  // });
});
function animateIndex() {
  gsap.from("#cardGreeting", { duration: 1, backgroundPosition: '-200px,0px', scale: 1.5, opacity: 0, ease: "power2.out" });
  gsap.from("#cardImage1", { duration: 2, x: 300, delay: 1, opacity: 0, ease: "power2.out" });
  gsap.from("#cloud", { duration: 2, x: 200, y: 200, opacity: 0, delay: 3, ease: "elastic" });
  gsap.from("#aside1", { duration: 1, opacity: 0, delay: 4, ease: "elastic" });
}

