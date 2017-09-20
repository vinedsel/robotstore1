// $(document).ready(function() {
//   $('#fullname').focus(function() {
//     $(this).addClass('highlight');
//   });
// });

// $('#fullname').click(function() { alert('The element myID was clicked'); });

$(document).ready(function() {
  $("#fullname").mouseover(function() {
    $(this).addClass("focused");
  });
  $("#fullname").mouseout(function() {
    $(this).removeClass("focused");
  });
});
