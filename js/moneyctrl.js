$(function(){
 
  var pageid=0;
  var pageTotal;
  var $next=$('.paging .next');
  var $prev=$('.paging .prev');
  var $curr=$('.paging .currPage');
  render();
  function render(pageid){
    pageid=pageid||0;
    $.ajax({
      type:"get",
      url:'http://192.168.11.33:9090/api/getmoneyctrl',
      data:{
        pageid:0
      },
      dataType:'json',
      success:function(data){
        console.log(data);
        var str=template('tpl',data);
        $('.content').html(str);
        pageTotal=Math.ceil(data.totalCount/data.pagesize);
        console.log(pageTotal);
        console.log(pageid);
        $('.paging .currPage span').text((pageid+1)+'/'+pageTotal);
        var htmlStr=template('pageCount',{
          pageCount:pageTotal
        });
        $('.currPage .morepage').html(htmlStr);
      }
    });
  
  }
  $next.on('click',function(){
    pageid++;
    if(pageid>=pageTotal){
      pageid=pageTotal;
    }
    render(pageid);
  })
    $prev.on('click',function(){
      pageid--;
      if(pageid<=0){
        pageid=0;
      }
      render(pageid);
    })
    $curr.on('click',function(){
      $(this).find('.morePage').toggle();
    })
    $curr.on('click',".morePage li",function(){
      pageid=$(this).index();
      render(pageid);
 
  })

  
})