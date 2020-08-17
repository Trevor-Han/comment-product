$(function () {
    let $nth = $(".product-details-list>ul>li:nth-of-type(4n)");
    mainNavHover();
    dropDownHover();
    productHover();
    headerScroll();

    //导航栏列表hover效果
    function mainNavHover() {
        let $mainLi = $(".mainNav-right>ul>li");
        let $downMenuMove = $(".dropdown");
        $mainLi.hover(function () {
            let mainIndex = $(this).index();
            let $downMenuCount = $(".dropdown>div").eq(mainIndex);
            $(".dropdown").css("display","block");
            $downMenuCount.addClass("dropdown-status").siblings().removeClass("dropdown-status");
        });
        $downMenuMove.on("mouseleave",function () {
            $(".dropdown-menu").removeClass("dropdown-status");
            $(".dropdown").css("display","none");
        });

    }
    //导航栏子菜单产品列表hover效果
    function dropDownHover() {
        let $downMenu = $(".dropdown-menu");
        $downMenu.on("mouseenter",".dropdown-product",function () {
            let downIndex = $(this).index();
            let $downList = $(this).parent(".dropdown-left").next(".dropdown-right").children(".dropdown-list").eq(downIndex);
            $downList.addClass("list-block").siblings().removeClass("list-block");
            $(this).addClass("scroll-bar").siblings().removeClass("scroll-bar");
        })
    }
    //导航栏的吸顶效果
    function headerScroll() {
        let headHeight = $(".header").height();
        $(window).scroll(function () {
            let offsetY = $("body").scrollTop()+$("html").scrollTop();
            // $(".dropdown").css("display","none");
            if (offsetY >= headHeight) {
                $(".mainNav").css({
                    position:"fixed",
                    top:0,
                    zIndex:"9999"
                });
                $(".banner").css("margin-top","100px");
                $(".banner-other").css("margin-top","100px");
                $(".dropdown").css("margin-top","60px");

            }else {
                $(".mainNav").css({
                    position:"relative",
                    top:"auto"
                });
                $(".banner").css("margin-top","0px");
                $(".banner-other").css("margin-top","0px");
                $(".dropdown").css("margin-top","0px");
            }
        });
    }
    //产品列表hover效果
    function productHover() {
        $nth.hover(function () {
            $(this).addClass("m2");
            $(this).css("z-index","499");
        },function () {
            $(this).css("z-index","299");
        });
    }

    let recommendTitle = [

    ];
    $(".recommend-left-other>ul>li").click(function () {
       let recommendIndex = $(this).index();
       let $recommendRight = $(".recommend-fade .recommend-right").eq(recommendIndex);
        $recommendRight.addClass("recommend-block").siblings().removeClass("recommend-block");
    });
});