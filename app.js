// Contact page focus group and Picture and info highlights

$(document).ready(function() {
  $("#fullname, #email, #question, #imgrobo1, #imgrobo2, #imgrobo3").mouseover(function() {
    $(this).addClass("focused");
  });
  $("#fullname, #email, #question, #imgrobo1, #imgrobo2, #imgrobo3").mouseout(function() {
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



// Filter engine


  function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("article")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
