$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay:true,
    autoplayTimeout:1800,
    loop:true,
    autoplayHoverPause:true,
    center: false,
    dots: false,
    responsive: {
        0:{
            items: 2,
        },
        750:{
            items: 3,
        },
        1150:{
            items: 4,
        },
        1500:{
            items: 5,
        }
    }
});