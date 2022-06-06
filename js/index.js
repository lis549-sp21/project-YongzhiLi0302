$('button').css('z-index', '999');
$('button').css('cursor', 'pointer');


$('button').on('click', function(){
    $(this).text($(this).attr('class') + ": thank you!");
})