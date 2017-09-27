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



// Hardware highlights

$(document).ready(function() {
  $("#i3text, #i4text, #i7text, #8g, #16g, #vrh, #3ds, #ss").mouseover(function() {
    $(this).addClass("highlight");
  });
  $("#i3text, #i4text, #i7text, #8g, #16g, #vrh, #3ds, #ss").mouseout(function() {
    $(this).removeClass("highlight");
  });
});
