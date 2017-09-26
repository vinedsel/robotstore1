// Contact page focus group

$(document).ready(function() {
  $("#fullname, #email, #question").mouseover(function() {
    $(this).addClass("focused");
  });
  $("#fullname, #email, #question").mouseout(function() {
    $(this).removeClass("focused");
  });
});



// Picture and info highlights

$(document).ready(function() {
  $("#imgrobo1, #imgrobo2, #imgrobo3").mouseover(function() {
    $(this).addClass("focused");
  });
  $("#imgrobo1, #imgrobo2, #imgrobo3").mouseout(function() {
    $(this).removeClass("focused");
  });
});
