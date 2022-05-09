document.addEventListener("DOMContentLoaded", function () {
  let carouselItem = 335;
  let visibleCards = 1;
  let carouselList = document.querySelector(".carousel-list");
  let carouselElement = document.querySelectorAll(".carousel-item");
  let carouselPosition = 0;
  let prevCarouselItem = document.querySelector(".carousel-btn-right");
  let nextCarouselItem = document.querySelector(".carousel-btn-left");
  let space = 200;

  prevCarouselItem.addEventListener("click", function (e) {
    e.preventDefault();
    carouselPosition += carouselItem * 1;
    carouselList.style.transform = `translate(${carouselPosition}px, 0)`;
    if (carouselPosition > 0) {
      carouselPosition = -(
        carouselItem * carouselElement.length -
        carouselItem * visibleCards
      );
      carouselList.style.transform = `translate(${carouselPosition}px, 0)`;
    }
  });


  nextCarouselItem.addEventListener("click", function (e) {
    e.preventDefault();
    carouselPosition -= carouselItem * 1;
    carouselList.style.transform = `translate(${carouselPosition}px, 0)`;
    if  (
      Math.abs(carouselPosition) >= 
      carouselItem * carouselElement.length 
    ) 
    { 
      carouselPosition = 0;
      carouselList.style.transform = `translate(${carouselPosition}px, 0)`;
    } 

  });
});


