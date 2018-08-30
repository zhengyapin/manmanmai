$(function(){
  $.ajax({
    type:'get',
    url:'http://192.168.11.33:9090/api/getinlanddiscount',
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr=template('tpl',info);
      $('.centent').html(htmlStr);
    }
  })
})