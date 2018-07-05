// Contact page focus group and Picture and info highlights

$(document).ready(function() {
  $("#fullname, #email, #question, #imgrobo1, #imgrobo2, #imgrobo3, #i3text, #i4text, #i7text, #8g, #16g, #vrh, #3ds, #ss").mouseover(function() {
    $(this).addClass("focused", {color: '#E70909'}, 3000);
  });
  $("#fullname, #email, #question, #imgrobo1, #imgrobo2, #imgrobo3, #i3text, #i4text, #i7text, #8g, #16g, #vrh, #3ds, #ss").mouseout(function() {
    $(this).removeClass("focused", {color: '#E70909'}, 3000);
  });
});



// Hardware highlights

// $(document).ready(function() {
//   $("#i3text, #i4text, #i7text, #8g, #16g, #vrh, #3ds, #ss").mouseover(function() {
//     $(this).addClass("highlight", {color: '#E70909'});
//   });
//   $("#i3text, #i4text, #i7text, #8g, #16g, #vrh, #3ds, #ss").mouseout(function() {
//     $(this).removeClass("highlight", {color: '#E70909'});
//   });
// });



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
      a = li[i].getElementsByTagName("h4")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


    /* TODO: Move To js file */
    /*********************************************************
     *
     *   Test Checkboxes/Radio Buttons Script
     *
     *********************************************************/
    // loop through each form and handle submit event
    for (var i = 0; i < document.forms.length; i++) {
      var form = document.forms[i];
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var results = '';
        // loop through all checkboxes to see if checked
        var checkboxes = form.querySelectorAll("input[type='checkbox']");
        for (var k = 0; k < checkboxes.length; k++) {
          results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
        }
        // loop through all radio butotns to display value
        var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
        for (var m = 0; m < radiobuttons.length; m++) {
          results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
        }
        // alert results
        alert(results);
      });
    }
