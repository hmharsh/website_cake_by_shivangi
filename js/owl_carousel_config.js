$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay:true,
    autoplayTimeout:1500,
    loop:true,
    // autoplayHoverPause:true,
    center: false,
    dots: false,
    responsive: {
        0:{
            items: 1,
        },
        750:{
            items: 2,
        },
        1150:{
            items: 3,
        },
        1500:{
            items: 4,
        }
    }
});