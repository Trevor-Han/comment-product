let clipboard = new ClipboardJS(".btn");
clipboard.on('success', function(e) {
    // console.log(e);
    layer.tips('复制成功', e.trigger ,{
        tips:[4,"#30233"],
        time:2000
    });
    $(".layui-layer").css({
        overflow:"inherit"
    });
});
clipboard.on('error', function(e) {
    layer.tips('错误', e.trigger ,{
        tips:[4,"red"],
        time:2000
    });
    $(".layui-layer").css({
        overflow:"inherit"
    });
});