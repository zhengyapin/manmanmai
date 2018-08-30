$(function(){
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getbrandtitle",
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('tpl',info);
      $('.pt ul').html(htmlStr);
      // $('.pt').on('click','.son',function(){
      //   var id=$(this).data('id');
      //   var that=$(this);
      //   $.ajax({
      //     type:"get",
      //     url:"http://127.0.0.1:9090/api/getbrand",
      //     data:{
      //       brandtitleid:id
      //     },
      //     dataType:"json",
      //     success:function(info){
      //       console.log(info);
      //     }
      //   })
      // })
    }
  })
})