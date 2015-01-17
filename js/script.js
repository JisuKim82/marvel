$(document).ready(function(){
  console.log("test");
  //highlight the tab and show products
  $(".nav-top").children().on("mouseenter", function(){
    $(this).addClass("hovered");
    $(this).children().removeClass("hide");
  });
  //remove highlight and hide products
  $(".nav-top").children().on("mouseleave", function(){
    $(this).removeClass("hovered");
    $(this).children().addClass("hide");
  });
});