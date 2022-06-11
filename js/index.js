
$(document).ready(function () {
    $('.problem').click(function(){
        $(this).parent().toggleClass('active')
    })
    $('.question-btn').click(function(){
        $(this).parent().toggleClass('active')
    })
 });

 $(function() {
    /* 按下GoTop按鈕時的事件 */
    $('.top').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
    
    /* 偵測卷軸滑動時，往下滑超過???px就讓Top按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
});


