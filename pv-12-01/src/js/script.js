var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.25,
    spaceBetween: 10, // Adjust spacing between slides as needed
    centeredSlides: true, // Center the active slide
    loop: true, // Enable continuous loop
    autoplay: {
      delay: 5000, // Autoplay delay in milliseconds (adjust as needed)
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });