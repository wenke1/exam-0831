$(".list>li").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active");
    console.log($(".tap").children().eq($(this).index()).siblings())
    $(".tap").children().eq($(this).index()).addClass("active").siblings().removeClass("active");
})