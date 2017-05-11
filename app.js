$('.MyInput').change(function () {
    alert("This is from an Input Named  " + $(this).attr('id'));
    $(this).addClass('Highlight');
});
