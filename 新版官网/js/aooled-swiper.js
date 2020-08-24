$(function () {
    //banner
    let bannerIn = new Swiper(".banner .swiper-container",{
        autoplay:false,
        loop:true,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
            bulletClass : 'my-bullet2',
            bulletActiveClass: 'my-bullet-active2',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //合作企业
    let cooperate = new Swiper(".cooperate-con .swiper-container",{
        autoplay:{
            disableOnInteraction: false,
        },
        loop:true,
        spaceBetween: 0,
        speed: 1000,
        slidesPerView : 6,

    });
    //企业新闻
    let newsRotation =  new Swiper(".news-rotation .swiper-container", {
        autoplay:false,
        loop:false,
        spaceBetween: 0,
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //专题新闻
    let thematicList= new Swiper(".thematic-list .swiper-container", {
        autoplay:false,
        loop:false,
        spaceBetween: 0,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
            bulletClass : 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //产品详情
    let galleryThumbs = new Swiper("#gallery-thumbs", {
        slidesPerView: 4,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    let productSwiper = new Swiper ("#gallery-top", {
        slidesPerView : 1,
        centeredSlides : true,
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
            bulletClass : 'my-bullet2',
            bulletActiveClass: 'my-bullet-active2',
        },

        observer:true,
        observeParents:true,
        thumbs: {
            swiper: galleryThumbs
        },
    });
    // 产品推荐
    let productRecommendation = new Swiper(".recommendation-list .swiper-container",{
        autoplay:true,
        loop:true,
        spaceBetween: 0,
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer:true,
        observeParents:true,
    });
    //灯具使用
    let dengRec = new Swiper(".deng-rec .swiper-container",{
        autoplay:false,
        loop:true,
        spaceBetween: 10,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
            bulletClass : 'my-bullet',
            bulletActiveClass: 'my-bullet-active',
        },
        observer:true,
        observeParents:true,
    });
    //合作企业
    let cooperate1 = new Swiper(".cooperate-con1 .swiper-container",{
        autoplay:{
            delay:2000,
            disableOnInteraction: false,
        },
        loop:true,
        spaceBetween: 10,
        speed: 1000,
        slidesPerView : 2,
    });
});