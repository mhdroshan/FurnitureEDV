$(document).ready(function () {
    var scroll2 = $(window).scrollTop();
    if (scroll2 > 20) {
      // document.getElementById("navbarNav").style.margin = "0px auto";
      $("#navbar").css("background", "white");
      // $(".navbar .show").css("background", "white");
      $("#navbar").css("box-shadow", "rgba(0, 0, 0, 0.64) 0px 4px 6px 0px");

    }

    // if ($("#navbarNav").hasClass("show")) {
    //   $("#navbar").css("background", "#ffffffbd");
    //   $("#navbar").css("backdrop-filter", "blur(4px)");

    // }

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        // document.getElementById("navbarNav").style.margin = "0px auto";
        $("#navbar").css("background", "white");
        // $(".navbar .show").css("background", "white");
        $("#navbar").css("box-shadow", "rgba(0, 0, 0, 0.64) 0px 4px 6px 0px");

      }

      else {
        if ($("#navbarNav").hasClass("show")) {
          $("#navbar").css("background", "#ffffffbd");
          $("#navbar").css("backdrop-filter", "blur(4px)");

        }
        else {
          // document.getElementById("navbarNav").style.margin = "8px auto";
          $("#navbar").css("background", "transparent");
          $("#navbar").css("box-shadow", "none");
          $("#navbar").css("backdrop-filter", "none");

          // $(".navbar .show").css("background", "#e8cb00c7");
        }
      }
    })
  })

  function myFunction() {
    var scl = $(window).scrollTop();

    if ($("#navbarNav").hasClass("show")) {
      if (scl < 100) {
        $("#navbar").css("background", "transparent");
        $("#navbar").css("backdrop-filter", "none");
        $("#navbar").css("box-shadow", "none");
      }

    }
    else {
      if (scl < 100) {
        $("#navbar").css("background", "#ffffffbd");
        $("#navbar").css("backdrop-filter", "blur(4px)");
        $("#navbar").css("box-shadow", "rgba(0, 0, 0, 0.64) 0px 4px 6px 0px");
      }
    }
  }


  //home sloder
 $(document).ready(function () {
  $('#homeslider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    margin: 2,
    navClass: ['jislider__left-arrow', 'jislider__right-arrow'],
    dotsClass: 'owl-dotsCustom owl-dots',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true,

      }
    }
  })
})


// owl carousel testimonial
$(document).ready(function () {
  $('#testimonial').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    navClass: ['jislider__left-arrow', 'jislider__right-arrow'],
    dotsClass: 'owl-testimon owl-dots',
    margin: 50,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 2,
        nav: true,

      }
    }
  })
})
