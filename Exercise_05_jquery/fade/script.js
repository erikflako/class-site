$('.hilang').click(function() {
    $('#target').fadeOut('normal');
});

$('.muncul').click(function() {
    $('#target').fadeIn('normal');
});

$('.fd-to').click(function() {
    $('#target').fadeTo('fast', 0.5);
});

$('.fd-to1').click(function() {
    $('#target').fadeTo(1000, 1);
});
