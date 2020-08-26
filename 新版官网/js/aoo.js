$(function () {
    mainNavHover();
    dropDownHover();
    productHover();
    headerScroll();
    fontClick();
    recommendClick();
    sideBerFixed(".articles-list",".news-details-con");
    sideBerFixed(".article-left",".news-details-con");


    //导航栏列表hover效果
    function mainNavHover() {
        let $mainLi = $(".mainNav-right>ul>li");
        let $downMenuMove = $(".dropdown");
        $mainLi.hover(function () {
            let mainIndex = $(this).index();
            let $downMenuCount = $(".dropdown>div").eq(mainIndex);
            $(".dropdown").css("display", "block");
            $downMenuCount.addClass("dropdown-status").siblings().removeClass("dropdown-status");
        });
        $downMenuMove.on("mouseleave", function () {
            $(".dropdown-menu").removeClass("dropdown-status");
            $(".dropdown").css("display", "none");
        });

    }

    //导航栏子菜单产品列表hover效果
    function dropDownHover() {
        let $downMenu = $(".dropdown-menu");
        $downMenu.on("mouseenter", ".dropdown-product", function () {
            let downIndex = $(this).index();
            let $downList = $(this).parent(".dropdown-left").next(".dropdown-right").children(".dropdown-list").eq(downIndex);
            $downList.addClass("list-block").siblings().removeClass("list-block");
            $(this).addClass("scroll-bar").siblings().removeClass("scroll-bar");
        })
    }

    //导航栏的吸顶效果
    function headerScroll() {
        let headHeight = $(".header").height();
        let oMainNav = $(".mainNav");
        let navBig = $(".mainNav .big");
        let navSmall = $(".mainNav .small");
        $(window).scroll(function () {
            let offsetY = $("body").scrollTop() + $("html").scrollTop();
            // $(".dropdown").css("display","none");
            if (offsetY >= headHeight) {
                oMainNav.css({
                    position: "fixed",
                    top: 0,
                    zIndex: "9999"
                });
                oMainNav.addClass("small-nav");
                navBig.addClass("none-p");
                navSmall.removeClass("none-p");
                $(".banner").css("margin-top", "80px");
                $(".banner-other").css("margin-top", "80px");
                $(".dropdown").css("margin-top", "40px");


            } else {
                oMainNav.css({
                    position: "relative",
                    top: "auto"
                });
                oMainNav.removeClass("small-nav");
                navBig.removeClass("none-p");
                navSmall.addClass("none-p");
                $(".banner").css("margin-top", "0px");
                $(".banner-other").css("margin-top", "0px");
                $(".dropdown").css("margin-top", "0px");

            }
        });
    }

    //产品列表hover效果
    function productHover() {
        let $nth = $(".product-details-list>ul>li:nth-of-type(4n)");
        $nth.hover(function () {
            $(this).addClass("m2");
            $(this).css("z-index", "499");
        }, function () {
            $(this).css("z-index", "299");
        });
    }

    //字体调整
    function fontClick(){
        $(".font_down").click(function () {
            $(".article-content-word p").css({
                fontSize: "14px",
                lineHeight: "24px",
            });
        });
        $(".font_default").click(function () {
            $(".article-content-word p").css({
                fontSize: "16px",
                lineHeight: "26px",
            });
        });
        $(".font_up").click(function () {
            $(".article-content-word p").css({
                fontSize: "18px",
                lineHeight: "32px",
            });
        });
    }

   //其他产品列表点击
    function recommendClick() {
        $(".recommend-left-other>ul>li").click(function () {
            let recommendIndex = $(this).index();
            let $recommendRight = $(".recommend-fade .recommend-right").eq(recommendIndex);
            $recommendRight.addClass("recommend-block").siblings().removeClass("recommend-block");
        });
    }

   //侧边栏固定
   function sideBerFixed(obj,all) {
       let articlesList = $(obj);
       let sideOffset = articlesList.offset().top;
       let allHeight = $(all).height();
       let sideHeight = articlesList.height(); //450 , 908
       let fixedHeight = allHeight - sideHeight;//1999,1541
       $(window).scroll(function () {
           let scroll = $("html,body").scrollTop();
           let h = scroll - fixedHeight- (sideOffset-122) ;
           if (scroll > sideOffset-122 && h < 0){
               articlesList.css({
                   top:90,
                   position:"fixed",
               });
           }
           else if (h >= 0) {
               articlesList.css({
                   top: fixedHeight,
                   position:"relative",
               });
           }
           else if (scroll < sideOffset-122) {
               articlesList.css({
                   top: 0,
                   position:"relative",
               });
           }
       })
   }
});