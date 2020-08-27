
sideBerFixed(".articles-list",".news-details-con");
sideBerFixed(".article-left",".news-details-con");
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