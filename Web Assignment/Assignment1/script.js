// jQuery ready function
$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

    // Add animation to cards on page load
    $('.feature-card, .resume-section, .bio-section').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(20px)'
        }).delay(index * 100).animate({
            'opacity': '1',
            'transform': 'translateY(0)'
        }, 600);
    });

    // Add hover effect to buttons
    $('.btn').hover(
        function() {
            $(this).addClass('animated');
        },
        function() {
            $(this).removeClass('animated');
        }
    );

    // Add click animation to skill tags
    $('.skill-tag, .hobby-item').on('click', function() {
        $(this).css('transform', 'scale(0.95)');
        setTimeout(() => {
            $(this).css('transform', 'scale(1)');
        }, 200);
    });

    // Console log for debugging
    console.log('Portfolio website loaded successfully!');
});

