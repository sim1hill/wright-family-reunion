$(document).ready(function() {
    $(".jumbotron").hover(function(){
      $(".jumbotron-text").toggleClass("dont-display");
      $(".jumbotron-text2").toggleClass("dont-display");
    });

   $("#myCarousel").carousel('cycle');




});