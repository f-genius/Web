var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 60,
    centeredSlides: true,
    loop: true,

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    pagination:{
        el:'.swiper-pagination',
        clickable:true,
        type: 'fraction',
    },

    keyboard: {
        enabled: true,
    }
});