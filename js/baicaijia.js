$(function(){
  $.ajax({
    type:'get',
    url:"http://192.168.11.66:9090/api/getbaicaijiatitle",
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('tpl',info);
      $('.title ul').html(htmlStr);
      new IScroll('.title',{
        scrollX:true,
        scrollY:false
      })
      $('.title ul').on('click','li',function(){
        $(this).addClass('current').siblings().removeClass('current');
        var titleid=$(this).children().data('id');
        console.log(titleid);
        $.ajax({
          type:'get',
          dataType:'json',
          data:{
            titleid:titleid
          },
          url:"http://192.168.11.66:9090/api/getbaicaijiaproduct",
          success:function(info){
            console.log(info);
            var htmlStr=template('secondTpl',info);
            $('.item').html(htmlStr);
          }
        })
      })
      $('.title ul li').eq(0).trigger('click');
    }
  })
})
