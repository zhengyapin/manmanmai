$(function(){
  var id=getSearch().brandtitleid;
  console.log(id);
  // $('.pt').on('click','.son',function(){
      //  var that=$(this);
       $.ajax({
         type:"get",
         url:"http://127.0.0.1:9090/api/getbrand",
         data:{
           brandtitleid:id,
         },
         dataType:"json",
         success:function(info){
           console.log(info);
           var htmlStr=template('tpl',info);
           $('.pt ul').html(htmlStr);

         }
       });



       $.ajax({
         type:"get",
         url:"http://127.0.0.1:9090/api/getbrandproductlist",
         dataType:"json",
         data:{
          brandtitleid:id,
          pagesize:4
         },
        success:function(info){
          console.log(info);
          var htmlStr=template('secondTpl',info);
          $('.pro ul').html(htmlStr);
        }
       })
     })
// })








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