$(function(){
  // 商品优惠
  $.ajax({
    type:'get',
    url:"http://127.0.0.1:9090/api/getmoneyctrl",
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('proTpl',info);
      $('.list .content').html(htmlStr);
    }
  })
})