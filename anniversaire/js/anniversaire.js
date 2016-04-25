$(function () {
    var i = 1;
    $('#special').on('click', function () {
        $('li').eq(1).css('visibility', 'visible');
        $('span').css('visibility', 'hidden');
    });

    $('ul#messages li').on('click', function () {
        i++;
        $('li').eq(i).css('visibility', 'visible');
        if (i === 4) {
            $('ul#messages li').text('HAPPY BIRTHDAY');
            $('body').css('background-image', 'url(./media/nyan.jpg)');
            $('#sound')[0].play();
        }
    });
});
