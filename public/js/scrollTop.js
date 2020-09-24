$(function () {

    //caching The Scroll Top Element
    var scrollButton = $ ("#scroll-top");
    
    $(window).scroll(function()
    {
        $(this).scrollTop() >= 500 ?
         scrollButton.show() : scrollButton.hide();
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.click(function(){
        $("html,body").animate({ scrollTop:0 },300);
    })
    
    });