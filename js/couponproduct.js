$(function(){
    var couponId=getSearch().couponId;
    var src;
  console.log(couponId);
  $.ajax({
    type:'get',
    url:"http://127.0.0.1:9090/api/getcouponproduct",
    data:{
      couponid:couponId
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('tpl',info);

      $('.content ul').html(htmlStr);
    }
  })
  $('.content ul').on('click','li',function(){
    var src=$(this).children('.pic').children().attr('src');
    console.log(src);
    $('.mask .img img').attr('src',src);
    $('.mask').show();
  })



function getSearch(){
  var history=location.search.slice(1);
   history=history.split('&');
   var obj={};
    history.forEach(function(v,i){
    var key=v.split('=')[0];
    var value=v.split('=')[1];
    obj[key]=value;
     })
 return obj;
   }

  })
