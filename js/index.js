
let aboutOffset =$("#about").offset().top;

$(window).scroll(function(){
    let wScroll =$(window).scrollTop();
    if(wScroll>aboutOffset)
    {
        $("nav").addClass("bg-black");
        $("nav").addClass("px-5");
    }
    else{
        $("nav").removeClass("bg-black");
        $("nav").removeClass("px-5");
    }
})

$("#btnUp").click(function(){
    $("body ,html").animate({scrollTop:'0'},2000)
})

$("a").click(function(){

    let aHref=$(this).attr("href");
    $("body ,html").animate({scrollTop:$(aHref).offset().top} ,1000);
})


