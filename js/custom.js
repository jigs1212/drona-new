// Custom Script
// Developed by: Samson.Onna
// CopyRights : http://webthemez.com
var customScripts = {
    profile: function() {
        var portfolio = $('#portfolio');
        var items = $('.items', portfolio);
        var filters = $('.filters li a', portfolio);

        items.imagesLoaded(function() {
            items.isotope({
                itemSelector: '.item',
                layoutMode: 'fitRows',
                transitionDuration: '0.7s'
            });
        });

        filters.click(function() {
            var el = $(this);
            filters.removeClass('active');
            el.addClass('active');
            var selector = el.attr('data-filter');
            items.isotope({
                filter: selector
            });
            return false;
        });
    },
    fancybox: function() {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function() {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function() {
                //I get fired when the animation is starting
            },
            end: function() {
                //I get fired when the animation is ending
                if (!$('#main-nav ul li:first-child').hasClass('active')) {
                    // $('.header').addClass('addBg');
                    // $('.header-logo').css('height', 50);
                } else {
                    // $('.header').removeClass('addBg');
                    // $('.header-logo').css('height', 100);
                }

            },
            scrollChange: function($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
                if (!$('#main-nav ul li:first-child').hasClass('active')) {
                    // $('.header').addClass('addBg');
                    // $('.header-logo').css('height', 50);
                } else {
                    // $('.header').removeClass('addBg');
                    // $('.header-logo').css('height', 100);
                }
            }
        });

        $("a[href='#top']").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
        $("a[href='#basics']").click(function() {
            $("html, body").animate({
                scrollTop: $('#events').offset().top - 75
            }, "slow");
            return false;
        });
    },
    owlSlider: function() {
        var owl = $("#owl-demo");
        owl.owlCarousel();
        // Custom Navigation Events
        $(".next").click(function() {
            owl.trigger('owl.next');
        })
        $(".prev").click(function() {
            owl.trigger('owl.prev');
        })
    },
    bannerHeight: function() {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function() {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
    waySlide: function() {
        /* Waypoints Animations
		   ------------------------------------------------------ */


    },
    fitText: function() {
        setTimeout(function() {
            $('h1.responsive-headline').fitText(1.2, {
                minFontSize: '16px',
                maxFontSize: '30px'
            });
        }, 100);
    },
    init: function() {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox();
        customScripts.owlSlider();
        customScripts.waySlide();
        customScripts.fitText();
        customScripts.bannerHeight();
    }
}
$('document').ready(function() {
    customScripts.init();
    navBar();

    function navBar() {
        var homeSectionHeight = $('#home').height();
        var heroTextHeight = $('#home .hero-text2').height();
        var actionHeight = homeSectionHeight - heroTextHeight - 200;
        $(document).scroll(function() {
            if ($(document).scrollTop() >= actionHeight) {
                $('.header').addClass('addBg');
                $('.header-logo').css('height', 50);
                $('.header-logo').css('margin-top', '-20px');
            } else {
                $('.header').removeClass('addBg');
                $('.header-logo').css('height', 75);
            }
        });
    }
    $('.event-description-tandra').hide();
    $('.event-description-hexa').hide();
    $('.event-description-asthra').hide();
    $('.event-description-oera').hide();

    // $('#tandra').hover(
    //     function() {
    //         $('.event-description-asthra').hide();
    //         $('.event-description-oera').hide();
    //         $('.event-description-hexa').hide();
    //         $('.event-description-tandra').show();
    //     },
    //     function() {
    //         setTimeout(function () {
    //             $('.event-description-tandra').hide();
    //         }, 2000);
    //     }
    // );
    //
    //
    // $('.event-description-tandra').hover(
    //     function() {
    //         $(this).show();
    //     },
    //     function() {
    //         setTimeout(function () {
    //             $(this).hide();
    //         }, 2000);
    //     }
    // );

    // tandra hover
      $("#tandra").mouseenter(function(event) {
        $(".event-description-tandra").addClass('display-block-anim');
        $('.colord').css('background-color','#9C27B0');
      });
      $(".event-description-tandra").mouseenter(function(event) {
          $('.colord').css('background-color','#9C27B0');
        $(".event-description-tandra").addClass('display-block');
      });
      $(".event-description-tandra").mouseleave(function(event) {
          // $('.colord').css('background-color','#A43E89');
        $(".event-description-tandra").removeClass('display-block-anim display-block').addClass('display-n');
      });
      $("#tandra").mouseleave(function(event) {
          // $('.colord').css('background-color','#A43E89');
        $(".event-description-tandra").removeClass('display-block-anim display-block').addClass('display-n');
      });


      // hexa hover
        $("#hexa").mouseenter(function(event) {
            $('.colord').css('background-color','#00BCD4');
          $(".event-description-hexa").addClass('display-block-anim');
        });
        $(".event-description-hexa").mouseenter(function(event) {
            $('.colord').css('background-color','#00BCD4');
          $(".event-description-hexa").addClass('display-block');
        });
        $(".event-description-hexa").mouseleave(function(event) {
            // $('.colord').css('background-color','#A43E89');
          $(".event-description-hexa").removeClass('display-block-anim display-block').addClass('display-n');
        });
        $("#hexa").mouseleave(function(event) {
            // $('.colord').css('background-color','#A43E89');
          $(".event-description-hexa").removeClass('display-block-anim display-block').addClass('display-n');
        });

        // asthra hover
          $("#asthra").mouseenter(function(event) {
              $('.colord').css('background-color','#009688');
            $(".event-description-asthra").addClass('display-block-anim');
          });
          $(".event-description-asthra").mouseenter(function(event) {
              $('.colord').css('background-color','#009688');
            $(".event-description-asthra").addClass('display-block');
          });
          $(".event-description-asthra").mouseleave(function(event) {
              // $('.colord').css('background-color','#A43E89');
            $(".event-description-asthra").removeClass('display-block-anim display-block').addClass('display-n');
          });
          $("#asthra").mouseleave(function(event) {
              // $('.colord').css('background-color','#A43E89');
            $(".event-description-asthra").removeClass('display-block-anim display-block').addClass('display-n');
          });

          // oera hover
            $("#oera").mouseenter(function(event) {
                $('.colord').css('background-color','#8C9EFF');
              $(".event-description-oera").addClass('display-block-anim');
            });
            $(".event-description-oera").mouseenter(function(event) {
                $('.colord').css('background-color','#8C9EFF');
              $(".event-description-oera").addClass('display-block');
            });
            $(".event-description-oera").mouseleave(function(event) {
                // $('.colord').css('background-color','#A43E89');
              $(".event-description-oera").removeClass('display-block-anim display-block').addClass('display-n');
            });
            $("#oera").mouseleave(function(event) {
                // $('.colord').css('background-color','#A43E89');
              $(".event-description-oera").removeClass('display-block-anim display-block').addClass('display-n');
            });


});
