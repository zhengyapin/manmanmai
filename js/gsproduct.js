$(function(){

  var $shopid;
  var $areaid;
  $.ajax({
    type:"get",
    url:"http://192.168.11.66:9090/api/getgsshop",
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr=template('tpl1',info);
      $('.select1').html(htmlStr);
    }
  })


  $.ajax({
    type:'get',
    url:"http://127.0.0.1:9090/api/getgsshoparea",
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('tpl2',info);
      $('.select2').html(htmlStr);
    }
  })
  $('.item ul').on('click','li',function(){
    var $index=$(this).index();
    console.log($index);
    $('.select ul').eq($index).toggle();
   if($('.select ul').eq($index).css('display')==="block"){
     $('.select ul').eq($index).siblings().hide();
   }
   
  })
  $('.select1 ').on('click',"li",function(){
    var $shopid=$(this).data('shopid');
    console.log(shopid);
    $('.select1').hide();
    $('.item ul li').eq(0).children().text($(this).text());
    render($shopid,$areaid);
  })
  $('.select2').on('click','li',function(){
    var $areaid=$(this).data('areaid');
    $('.select2').hide();
    console.log($(this).text());
    $('.item ul li').eq(1).children().text($(this).text().slice(0,2));
    render($shopid,$areaid);
  })
  $('.select3').on('click',"li",function(){
    $('.select3').hide();
    render(0,0);
  })


  function render($shopid,$areaid){
    shopid=$shopid||0;
    areaid=$areaid||0;
    $.ajax({
      type:'get',
      url:"http://127.0.0.1:9090/api/getgsproduct",
      data:{
        shopid:shopid,
        areaid:areaid
      },
      dataType:'json',
      success:function(info){
        console.log(info);
        var htmlStr=template('tpl3',info);
        $('.content ul').html(htmlStr);
      }
    })
  }
 
render();



})