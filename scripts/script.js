$(document).ready(function () {
  //unwind menu
  $(".btn").click(function () {
    $("nav ul").slideToggle(1000);
  });
//toggle button
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("change");
  });
  $(".btn-inner").click(function () {
    $(".btn-inner").toggleClass("change");
  });
//toggle button 2
  $(".navbar-toggler2").click(function () {
    $(".navbar-toggler2").toggleClass("changed");
  });
//photo slide
  // $(".navbar-toggler2").click(function () {
  //   $(".photo-container").toggleClass("move-down");
  // });
  $(".btn2").click(function () {
    $("article .photo-container").slideToggle(1000);
  });

});
