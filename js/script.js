// Tools FAQ
$(document).ready(function () {
  $(".tools-faq_question").eq(0).click();
  $(".tools-faq_question").eq(0).toggleClass("is-01");

  $(".tools-faq_question")
    .eq(0)
    .on("click", function () {
      $(".tools-faq_question").eq(0).toggleClass("is-01");
    });

  $(".tools-faq_question")
    .eq(1)
    .on("click", function () {
      $(".tools-faq_question").eq(1).toggleClass("is-02");
    });

  $(".tools-faq_question")
    .eq(2)
    .on("click", function () {
      $(".tools-faq_question").eq(2).toggleClass("is-03");
    });

  $(".tools-faq_question")
    .eq(3)
    .on("click", function () {
      $(".tools-faq_question").eq(3).toggleClass("is-04");
    });

  $(".tools-faq_question")
    .eq(4)
    .on("click", function () {
      $(".tools-faq_question").eq(4).toggleClass("is-05");
    });

  $(".tools-faq_question")
    .eq(5)
    .on("click", function () {
      $(".tools-faq_question").eq(5).toggleClass("is-06");
    });
});

// Sliders
if (window.innerWidth <= 480) {
  $(".section-cases").each(function (index) {
    let loopMode = false;
    if ($(this).attr("loop-mode") === "true") {
      loopMode = true;
    }
    let sliderDuration = 300;
    if ($(this).attr("slider-duration") !== undefined) {
      sliderDuration = +$(this).attr("slider-duration");
    }
    const swiper = new Swiper($(this).find(".swiper")[0], {
      speed: sliderDuration,
      followFinger: true,
      autoHeight: true,
      slidesPerView: 1.2,
      spaceBetween: "4%",
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        // tablet
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        // desktop
        992: {
          slidesPerView: 4,
          spaceBetween: 42,
        },
      },
      pagination: {
        el: $(this).find(".swiper-bullet-wrapper")[0],
        bulletActiveClass: "is-active",
        bulletClass: "swiper-bullet",
        bulletElement: "button",
        clickable: true,
      },
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0],
        disabledClass: "is-disabled",
      },
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
    });

    const swiper2 = new Swiper($(this).find(".swiper2")[0], {
      speed: sliderDuration,
      followFinger: true,
      autoHeight: true,
      slidesPerView: 1.2,
      spaceBetween: "4%",
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        // tablet
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        // desktop
        992: {
          slidesPerView: 4,
          spaceBetween: 42,
        },
      },
      pagination: {
        el: $(this).find(".swiper-bullet-wrapper")[0],
        bulletActiveClass: "is-active",
        bulletClass: "swiper-bullet",
        bulletElement: "button",
        clickable: true,
      },
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0],
        disabledClass: "is-disabled",
      },
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
    });

    const swiper3 = new Swiper($(this).find(".swiper3")[0], {
      speed: sliderDuration,
      followFinger: true,
      autoHeight: true,
      slidesPerView: 1.2,
      spaceBetween: "4%",
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        // tablet
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        // desktop
        992: {
          slidesPerView: 4,
          spaceBetween: 42,
        },
      },
      pagination: {
        el: $(this).find(".swiper-bullet-wrapper")[0],
        bulletActiveClass: "is-active",
        bulletClass: "swiper-bullet",
        bulletElement: "button",
        clickable: true,
      },
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0],
        disabledClass: "is-disabled",
      },
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
    });

    const swiper4 = new Swiper($(this).find(".swiper4")[0], {
      speed: sliderDuration,
      followFinger: true,
      autoHeight: true,
      slidesPerView: 1.2,
      spaceBetween: "4%",
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        // tablet
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        // desktop
        992: {
          slidesPerView: 4,
          spaceBetween: 42,
        },
      },
      pagination: {
        el: $(this).find(".swiper-bullet-wrapper")[0],
        bulletActiveClass: "is-active",
        bulletClass: "swiper-bullet",
        bulletElement: "button",
        clickable: true,
      },
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0],
        disabledClass: "is-disabled",
      },
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
    });

    const swiper5 = new Swiper($(this).find(".swiper5")[0], {
      speed: sliderDuration,
      followFinger: true,
      autoHeight: true,
      slidesPerView: 1.2,
      spaceBetween: "4%",
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        // tablet
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        // desktop
        992: {
          slidesPerView: 4,
          spaceBetween: 42,
        },
      },
      pagination: {
        el: $(this).find(".swiper-bullet-wrapper")[0],
        bulletActiveClass: "is-active",
        bulletClass: "swiper-bullet",
        bulletElement: "button",
        clickable: true,
      },
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0],
        disabledClass: "is-disabled",
      },
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
    });
  });
}

$(".reviews-slider_component").each(function (index) {
  let loopMode = false;
  if ($(this).attr("loop-mode") === "true") {
    loopMode = true;
  }
  let sliderDuration = 300;
  if ($(this).attr("slider-duration") !== undefined) {
    sliderDuration = +$(this).attr("slider-duration");
  }
  const swiper = new Swiper($(this).find(".swiper")[0], {
    speed: sliderDuration,
    followFinger: true,
    slidesPerView: 1.2,
    spaceBetween: 14,
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      // tablet
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      // desktop
      992: {
        slidesPerView: 4,
        spaceBetween: 42,
      },
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true,
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled",
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",
  });
});
