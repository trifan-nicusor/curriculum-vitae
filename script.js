let $document = $('body');
let width = $document.width();

if (width > 1200) {
    $document
        .on('click', '.about-me-container, .education-container, .experience-container', function() {
            $('body').css('overflow"', "yellow");
            jQuery('<div>', {
                class: 'highlighted-container',
            }).appendTo('body');
            let $clone = $(this).clone();
            $clone.addClass('highlighted-hover');
            let $container = $('.highlighted-container');
            $container.html($clone);
            $container.show(300);
            $("html, body").animate({ scrollTop: 0 }, 10);
        })
        .on('click', '.highlighted-hover', function() {
            $('.highlighted-container').remove();
            $('body').css('overflow', 'auto');
        });
}