$(document).ready(function() {
    $('#btn-add').on('click', function () {
        const task = $('#input-task').val();
        const newItem = $('<li style="display: none"></li>');
        newItem.text(task);
        $('ul').append(newItem); 
        newItem.fadeIn(1000);

        newItem.on('click', function () {
        $(this).toggleClass('concluida');
    });
        $('#input-task').val('');
    })
})