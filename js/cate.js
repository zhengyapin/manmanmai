$(function(){
  $.ajax({
    type:'get',
    url:'http://192.168.11.33:9090/api/getcategorytitle',
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('tpl',info);
      // console.log(htmlStr);
      $('.pt').html(htmlStr);
     $('.pt').on('click','.son',function(){
      var id=$(this).data('id');
      // console.log($(this));
      var that = $(this);
      $.ajax({
        type:'get',
        url:'http://192.168.11.33:9090/api/getcategory',
        data:{
          titleid:id
        },
        dataType:'json',
        success:function(info){
          console.log(info);
          var htmlStr=template('secondTpl',info);
          console.log(htmlStr);
          console.log(that);
          that.next().html(htmlStr);
          // $('.pt .box').html(htmlStr);
        }
      })
      $(this).siblings().slideToggle();
    })
    }
  })


 
})