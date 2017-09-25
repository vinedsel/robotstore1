// Contact page focus group

$(document).ready(function() {
  $("#fullname, #email, #question").mouseover(function() {
    $(this).addClass("focused");
  });
  $("#fullname, #email, #question").mouseout(function() {
    $(this).removeClass("focused");
  });
});


// ----------------------------------------
