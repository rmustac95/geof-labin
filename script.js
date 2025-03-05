(function ($) {
  "use strict";

  // Slider
  const slider = function () {
    const slides = document.querySelectorAll(".slide");
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    const dotContainer = document.querySelector(".dots");

    let curSlide = 0;
    const maxSlide = slides.length;

    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = function (slide) {
      document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
    };

    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const init = function () {
      goToSlide(0);
      createDots();

      activateDot(0);
    };
    init();

    // Event handlers
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") prevSlide();
      e.key === "ArrowRight" && nextSlide();
    });

    dotContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const modalClass = document.querySelector(".modal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close");
    const overlay = document.querySelector(".overlay_modal");

    // Open the modal when the button is clicked
    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      // modalClass.classList.remove("hidden");
      // overlay.classList.remove("hidden");
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    // Close the modal when the Escape key is pressed
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modalClass.classList.contains("hidden")) {
        modal.style.display = "none";
      }
    });
  });

  // navbarDropdown
  if ($(window).width() < 992) {
    $(".navigation .dropdown-toggle").on("click", function () {
      $(this).siblings(".dropdown-menu").animate(
        {
          height: "toggle",
        },
        300
      );
    });
  }

  // scroll to top button
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 70) {
      $(".backtop").addClass("reveal");
    } else {
      $(".backtop").removeClass("reveal");
    }
  });
  // scroll-to-top
  $(".scroll-top-to").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  $(".portfolio-single-slider").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".clients-logo").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".testimonial-wrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".testimonial-wrap-2").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // counter
  function counter() {
    var oTop;
    if ($(".counter").length !== 0) {
      oTop = $(".counter").offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 500,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
    }
  }
  $(window).on("scroll", function () {
    counter();
  });

  // Shuffle js filter and masonry
  if ($(".shuffle-wrapper").length !== 0) {
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector(".shuffle-wrapper"), {
      itemSelector: ".shuffle-item",
      buffer: 1,
    });
    jQuery('input[name="shuffle-filter"]').on("change", function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }
})(jQuery);
