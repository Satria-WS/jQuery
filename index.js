$(document).ready(function () {
    // console.log($("h1").css("font-size"));
    // $("h1").css("font-size", "3rem");

})


//adding class with jQuery
$("h1").addClass("big-title");

//remove class with jQuery
// $("h1").removeClass("big-title")

//check class true or false
// console.log($("h1").hasClass("margin-50"));


//manipulating text with jQuery
$("button").text("Hello world");
// $(".MyClass").text("Hello Mars");
$(".MyClass").html("<em>Hello Mars</em>")


//manipulating image attribute with jQuery
// console.log($("img").attr("src","www.kaskus.co.id"));

//manipulating anchor tag attribute with jQuery
$("a").attr("href", "https://www.kaskus.co.id");

//change with click function with jQuery
$("h1").click(function() {
    $("h1").css("color","purple");
})

//non jQuery vs jQuery
//non jQuery -----------------
let Button = document.querySelectorAll("button")

for(let i = 0 ; i < Button.length ; i++) {
  Button[i].addEventListener("click", function() {
      document.querySelector("h1").style.color = "orange"
  });
}



//jQuery -----------------
$("button").click(function () {
    $("h1").css("color", "#FAD9E6");
})


//manipulating input tag  with jQuery
//syntax $(document).keypress();
$(document).keypress(function (event) {
    // console.log(event.key);

    // $("input").text(event.key);
    $("h1").text(event.key);
    // $("#log").text(event.key);

});


//without jQuery
// const log = document.getElementById("log");
// document.addEventListener("keypress", function logKey(event) {
//     log.textContent += ` ${event.key}`;
    
// });

//manipulating mouseover and mouseout with "on"  method
$("#log").text("Hello world")
$("#log").on("mouseover",function () {
  $("#log").css("background-color", "yellow");
  $("#log").css("display", "inline-block");
});
$("#log").mouseout(function () {
  $("#log").css("background-color", "white");
  $("#log").css("display", "inline-block");
});


//after,before,prepend,append , remove.  method with jQuery
// $("h1").before("<button>Test button</button>");
// $("button").remove();

//Animation jQuery ---------------------------------------------------
//hide method and toggle
// $("button").on("click",function () {
//     $("h1").toggle();
// })
$("button").click( function () {
  $("h1").toggle();
});

//show method
// $("h1").show();

//--------------------------------------------------------------------

//toggler fade
//button hello world index 0
$("button").eq(0).on("click",function () {
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});

//--------------------------------------------------------------------


//slideup-down


//animation
$("button").eq(1).on("click",function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})