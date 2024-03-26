import '../css/style.css'

var multipleCardCarousel = document.querySelector(
  "#carouselControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner-card")[0].scrollWidth;
  var cardWidth = $(".carousel-item-card").width();
  var scrollPosition = 0;
  $("#carouselControls > .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselControls > .carousel-inner-card").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselControls > .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselControls > .carousel-inner-card").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}

// male carousel
var multipleCardCarousel2 = document.querySelector(
  "#carouselControls2"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel2, {
    interval: false,
  });
  var carouselWidth2 = $(".carousel-inner-card")[0].scrollWidth;
  var cardWidth2 = $(".carousel-item-card").width();
  var scrollPosition2 = 0;
  $("#carouselControls2 > .carousel-control-next").on("click", function () {
    if (scrollPosition2 < carouselWidth2 - cardWidth2 * 4) {
      scrollPosition2 += cardWidth2;
      $("#carouselControls2>.carousel-inner-card").animate(
        { scrollLeft: scrollPosition2 },
        600
      );
    }
  });
  $("#carouselControls2 > .carousel-control-prev").on("click", function () {
    if (scrollPosition2 > 0) {
      scrollPosition2 -= cardWidth2;
      $("#carouselControls2 > .carousel-inner-card").animate(
        { scrollLeft: scrollPosition2 },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel2).addClass("slide");
}
