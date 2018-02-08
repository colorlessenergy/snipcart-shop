$('#my-size').change(function () {
    alert("runned")
    $('#my-button').data('item-custom2-value', $(this).val());
});

$('#my-quantity').change(function () {
    $('#my-button').data('item-quantity', $(this).val());
});

$('img').on('click', function (event) {
    var buttons = $('button');
    var img = this;
    buttons.map(function (ele) {
        
        if ($(this).data('item-name') === img.alt) {
           $(this).attr('id', 'my-button');
           $(this).addClass('active');
           console.log(img.src);
           
            $('#my-button').data('item-custom2-value', $("#my-size").val());
            $('#my-button').data('item-quantity', $("#my-quantity").val());


           $('#big-img').attr('src', img.src)
        } else {
            $(this).attr('id', '')
            $(this).removeClass('active');
        }
    });
})