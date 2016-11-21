$(document).ready(function() {

  function win() {
    if ($(".PuzzlelightOn").length > 4) {
      $(".Puzzlebutton").prop('disabled', true);
      setTimeout(function() {
        document.getElementById("Text").innerHTML = "You Win!";
      }, 1);
    }
  }

  $("#Puzzlebutton3").click(function() {
    $("#Puzzlelight1").addClass("PuzzlelightOn");
    $("#Puzzlelight2").removeClass("PuzzlelightOn");
    $("#Puzzlelight4").removeClass("PuzzlelightOn");
    $("#Puzzlelight5").removeClass("PuzzlelightOn");
    win();
  });

  $("#Puzzlebutton2").click(function() {
    $("#Puzzlelight2").addClass("PuzzlelightOn");
    $("#Puzzlelight3").addClass("PuzzlelightOn");
    $("#Puzzlelight5").removeClass("PuzzlelightOn");
    win();
  });

  $("#Puzzlebutton4").click(function() {
    $("#Puzzlelight3").addClass("PuzzlelightOn");
    $("#Puzzlelight4").removeClass("PuzzlelightOn");
    $("#Puzzlelight5").addClass("PuzzlelightOn");
    win();
  });

  $("#Puzzlebutton1").click(function() {
    $("#Puzzlelight2").addClass("PuzzlelightOn");
    $("#Puzzlelight3").removeClass("PuzzlelightOn");
    win();
  });

  $("#Puzzlebutton5").click(function() {
    $("#Puzzlelight3").addClass("PuzzlelightOn");
    $("#Puzzlelight4").addClass("PuzzlelightOn");
    win();
  });

  $("#Resetbutton").click(function() {
    $("#Puzzlelight1").removeClass("PuzzlelightOn");
    $("#Puzzlelight2").removeClass("PuzzlelightOn");
    $("#Puzzlelight3").removeClass("PuzzlelightOn");
    $("#Puzzlelight4").removeClass("PuzzlelightOn");
    $("#Puzzlelight5").removeClass("PuzzlelightOn");
    document.getElementById("Text").innerHTML = "Light it Up";
    $(".Puzzlebutton").prop('disabled', false);
  });

});