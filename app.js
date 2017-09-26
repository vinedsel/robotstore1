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
  $("#i3, #i4, #i7, #8, #16, #vrh, #3ds, #ss").mouseover(function() {
    $(this).addClass("hovering");
  });
  $("#i3, #i4, #i7, #8, #16, #vrh, #3ds, #ss").mouseout(function() {
    $(this).removeClass("hovering");
  });
});
