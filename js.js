$("#fade-out-button").click(function () {
  $("#fade-out-p").fadeOut();
});

$("#fade-in-button").click(function () {
  $("#fade-out-p").fadeIn();
});

$("#add-class-button").click(function () {
  $("#fade-out-p").toggleClass("flower");
});

$("#append-button").click(function () {
  $("#append-p").append("<p> Whaddap? </p>");
});

$("#change-color-button").click(function () {
  $("#change-color-p").css("color", "darkblue");
});

$("#slide-up-button").click(function () {
  $("#slide-p").slideUp(4000, function () {
    $("#slide-p");
  });
});

$("#slide-down-button").click(function () {
  $("#slide-p").slideDown(4000, function () {
    $("#slide-p");
  });
});

$("#search").keyup(function (e) {
  let code = e.which;
  if (code == 13) {
    $("#myList").append("<li>" + e.target.value + "</li>");
  }
});

$("#hide").click(function () {
  $("#footer-heading").hide();
});

$("#show").click(function () {
  $("#footer-heading").show();
});

$("#footer-input").keyup(function (e) {
  $("#footer-heading");
});
