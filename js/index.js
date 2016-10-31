$(document).ready(function() {

  $("#gallery2").hide();
  $("#gallery3").hide();
  $("#gallery4").hide();
  $("#text2").hide();
  $("#text3").hide();
  $("#text4").hide();
  
  $(".slider1 img").click(function() {
    $("#main-img1").attr("src", $(this).attr("src"));
  });

  $(".slider2 img").click(function() {
    $("#main-img2").attr("src", $(this).attr("src"));
  });
  
  $(".slider3 img").click(function() {
    $("#main-img3").attr("src", $(this).attr("src"));
  });
  
  $(".slider4 img").click(function() {
    $("#main-img4").attr("src", $(this).attr("src"));
  });

  $("#Malaysia").click(function() {
    $("#gallery1").fadeIn();
    $("#gallery2").hide();
    $("#gallery3").hide();
    $("#gallery4").hide();
    $("#text1").show();
    $("#text2").hide();
    $("#text3").hide();
    $("#text4").hide();
  });
  
  $("#HongKong").click(function() {
    $("#gallery2").fadeIn();
    $("#gallery1").hide();
    $("#gallery3").hide();
    $("#gallery4").hide();
    $("#text2").show();
    $("#text1").hide();
    $("#text3").hide();
    $("#text4").hide();
  });
  
  $("#Taiwan").click(function() {
    $("#gallery3").fadeIn();
    $("#gallery1").hide();
    $("#gallery2").hide();
    $("#gallery4").hide();
    $("#text3").show();
    $("#text1").hide();
    $("#text2").hide();
    $("#text4").hide();
  });
  
   $("#Korea").click(function() {
    $("#gallery4").fadeIn();
    $("#gallery1").hide();
    $("#gallery2").hide();
    $("#gallery3").hide();
    $("#text4").show();
    $("#text1").hide();
    $("#text2").hide();
    $("#text3").hide();
  });
  
});