import '../css/style.css';

function carouselControls(elementId) {
  const multipleCardCarousel = document.querySelector(elementId);
  if (window.matchMedia('(min-width: 768px)').matches) {
    const carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    const carouselWidth = $('.carousel-inner-card')[0].scrollWidth;
    const cardWidth = $('.carousel-item-card').width();
    let scrollPosition = 0;
    $(`${elementId} > .carousel-control-next`).on('click', function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $(`${elementId} > .carousel-inner-card`).animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $(`${elementId} > .carousel-control-prev`).on('click', function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $(`${elementId} > .carousel-inner-card`).animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass('slide');
  }
}

carouselControls('#carouselControls');
carouselControls('#carouselControls2');
