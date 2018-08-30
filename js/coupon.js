$(function(){
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcoupon',
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('tpl',info);
      $('.content ul').html(htmlStr);
    }
  });

  $('.box').on('click','a',function(){
    var id=$(this).data('id');
    console.log(id);
 
$.ajax({
  type:'get',
  dataType:'json',
  url:'http://127.0.0.1:9090/api/getcouponproduct',
  data:{
    couponid:id
  },
  dataType:'json',
  success:function(info){
    console.log(info);
  }
})
})

    
})