// TODO: snapchat unique img for desktop
// TODO: reposition images on mobile devices

function main() {

  (function() {
    'use strict';

    /* ==============================================
  	 WOW animations
  	=============================================== */
    new WOW().init();


    /* ==============================================
  	Testimonial Slider
  	=============================================== */

    $('a.page-scroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
    });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
      var navHeight = $(window).height() - 100;
      if ($(window).scrollTop() > navHeight) {
        $('.navbar-default').addClass('on');
      } else {
        $('.navbar-default').removeClass('on');
      }
    });

    $('body').scrollspy({
      target: '.navbar-default',
      offset: 80
    })

    $(document).ready(function() {

      $("#critics").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        // stagePadding: 0,
        smartSpeed: 450,
        autoplayTimeout: 4500,
        autoplayHoverPause: false,
        dots: false
      });

      $("#clients").owlCarousel({
        items: 5,
        loop: true,
        margin: 0,
        autoplay: true,
        // animateOut: 'fadeOutLeft',
        // animateIn: 'fadeInRight',
        stagePadding: 0,
        smartSpeed: 300,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: false,
        responsive: {
          0: {
            items: 1,
            autoplayTimeout: 3000
          },
          450: {
            items: 2,
            autoplaytimeout: 3000
          },
          700: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      });

      // twitter owl carousel is setup in handler for twitter data - refer to: twitterSetup.js

    });

    /*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
      var $container = $('#lightbox');
      var initSelector = $('.cat .active').attr('data-filter');
      $container.isotope({
        filter: initSelector,
        sortBy: 'random',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });

      $('.cat a').click(function() {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });

    });





    /*====================================
    Instagram Feed
    ======================================*/
    var userFeed = new Instafeed({
      get: 'user',
      userId: '13112419',
      clientId: 'e17ecfb5931e495c9eb8491d2b11f7e6',
      // accessToken: '13112419.1677ed0.a2bed6f8a94e4e33923b2d2d899991ba',
      // http://instagramwordpress.rafsegat.com/docs/get-access-token/
/*
userId: 13112419
accessToken: 13112419.e17ecfb.0fc0d9dc0cd843e694171a86121b33a4
*/
     // accessToken: '13112419.ba4c844.ff5b3b45b5524409badeb5bcaf6d3537',
      //accessToken: '13112419.e17ecfb.0fc0d9dc0cd843e694171a86121b33a4',
      // https://instagram.pixelunion.net -> to get new access token
      accessToken: '13112419.1677ed0.2746ff898bdc45a98d227b15e04ed19a',
      sortBy: 'most-recent',
      limit: 30,
      resolution: 'standard_resolution', // 'thumbnail', 'low_resolution', 'standard_resolution'
      // width: 200,
      // height: 200,
      template: '<a class="item instagram_img_holder" href="{{link}}"><img src="{{image}}" /></a>',
      after: function() {
        $("#instafeed").owlCarousel({
          // items: 10,
          loop: true,
          margin: 0,
          autoplay: true,
          animateOut: 'fadeOutLeft',
          animateIn: 'fadeInRight',
          // stagePadding: 0,
          smartSpeed: 250,
          autoplayTimeout: 4500,
          autoplayHoverPause: false,
          dots: false,
          responsive: {
            0: {
              items: 2,
              autoplayTimeout: 3000
            },
            450: {
              // items: 5,
              items: 3,
              autoplaytimeout: 3000
            },
            700: {
              // items: 8
              items: 4
            },
            1000: {
              // items: 10
              items: 6
            }
          }
        });
      }
    });
    userFeed.run();

  }());
}
main();
