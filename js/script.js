$(document).ready(function(){

    // initialize slick carousel
    $('.carousel').slick({
        dots: true
    });

    // prev/next arrow keys
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
                $('.carousel').slick('slickPrev');
            break;

            case 39: // right
                $('.carousel').slick('slickNext');
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault();
    });

});
