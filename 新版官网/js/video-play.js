$(function () {
    let oControl = $(".control-video");
    let oVideo = $("video");
    let oCurrentTime = $(".current-time");
    let oFigure = $(".the-video");
    let oChange = $(".the-details-top");
    let oLine = $(".line");
    let currentMoveIndex = 0;
    window._stayStatus = {
        moveData: [],
    };
    let moveData = window._stayStatus.moveData;

    oChange.mouseenter(function (e) {
        let videoIndex = $(this).parents("li").index();
        let theControl = $(oControl).eq(videoIndex);
        theControl.stop().animate({
            top:0,
            opacity:1,
        });
        oVideo[0].play();
   /*     let dis = e.pageY;
        moveData.push({
            sliderDis: dis,
        });
        moveData[currentMoveIndex].sliderDis += dis;
        console.log(dis);
        /!* if(Math.abs(dis) > 200){
             theControl.stop().animate({
                 top:"-100%",
                 opacity:0
             },500);
             oVideo[0].pause();
         }*!/*/

    });
    oFigure.mouseleave(function () {
        let videoIndex = $(this).parents("li").index();
        let theControl = $(oControl).eq(videoIndex);
        theControl.stop().animate({
            top:"-100%",
            opacity:0
        },500);
        oVideo[0].pause();
    });

    oVideo.on("timeupdate",function () {
        let currentTime = oVideo[0].currentTime;
        let duration = oVideo[0].duration;
        let percent = 100 * currentTime / duration;
        let obj2 = parseInt(duration - currentTime);
        oLine.css("width", percent +  "%");
        oCurrentTime.html(s_to_hs(obj2));

    });

    /**
     * 将秒转换为 分:秒
     * s int 秒数
     */
    function s_to_hs(s){
        let h;
        h = Math.floor(s/60);
        s = s %60;
        h += '';
        s += '';
        h = (h.length==1)?'0'+h:h;
        s = (s.length==1)?'0'+s:s;
        return h+':'+s;
    }
})