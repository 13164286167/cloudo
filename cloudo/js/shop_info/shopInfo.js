
$(function(){


  // console.log("购物车页面的islogin:"+islogin);
  var pid=location.href.split("pid=")[1];//偷懒了哈哈哈啊
  $.ajax({
    type:"get",
    url:"data/product_list/getProductById.php",
    data:{pid},
    dataType:"json",
    success:function(datas){
      var $bigimg=$(".bigImg");
      var {pid,title,productName,price,pic,brandName}=datas;
      var html=`<ul class="clear">
				<li><a href="index.html">首页&gt;</a> </li>
				<li>${productName}</li>
			</ul>`;
      $(".containerUl").html(html);
      $(".smallUl>li>a").html(`<img src="${pic}">`);
      $bigimg.css("background","url('"+pic+"')").css("backgroundSize","cover");
      html=`<p class="doc1" data-pid="${pid}>
					<a href="#">${productName}</a>
				</p>
				<p class="doc2" >${brandName}</p>
				<p class="doc4">销售价:¥${parseInt(price)}</p>`;
      $(".shopTitle").html(html);
      //功能模块一 放大镜

      $(".sizeList").click(function(){
        $(".sizeStyle").show();
        $(".newBg").show();

        $(".newBg")[0].onmousewheel=function(e){
          e.preventDefault();
        }
        $(".sizeStyle")[0].onmousewheel=function(e){
          e.preventDefault();
        }
      })
      $bigimg.mouseenter(function(){
        $bigimg.css("backgroundSize","1200px 1200px")
      }).mouseleave(function(){
        $bigimg.css("backgroundSize","cover").css("backgroundPosition","center center")
      });
      $bigimg.mousemove(function (e) {
        // console.log(1);
        var rate=1200/500;
        var mSize=250,smSize=500;
        var left=e.offsetX-mSize/2;
        var top=e.offsetY-mSize/2;
        left=left<0?0:left>smSize-mSize?smSize-mSize:left;
        top=top<0?0:top>smSize-mSize?smSize-mSize:top;
        $bigimg.css("backgroundPosition",-left*rate+"px "+-top*rate+"px");
      })
      $(".sizeStyle>img").click(function(){
        $(".sizeStyle").hide();
        $(".newBg").hide();
      })
      //功能模块二 添加购物车购物车
      //2.1加减商品数量

    } //success结束}
  })//ajax 结束
//功能模块二 加入收藏夹
  function addlove(datas){
    $(".love").click(function(){
      if(datas.ok>0){

        $(this).toggleClass("haslove");
        if ($(this).is(".haslove")) {
          $(this).html("已收藏");
          tiptoggle("收藏成功");
        } else {
          $(this).html("加入您的收藏");
          tiptoggle("取消收藏成功")
        }
        console.log("love");
      }else{//未登陆
        tiptoggle("您还未登录，请先登录");
      }
    })
  }
// 功能模块三 加入购物车
  function addShoppingCart(datas){
    var $ul=$(".shopBuyUl");
    var $input=$(".buyerNumber")
    var count=$input.val();
    var uid=datas.uid;

    //加减数量
    $ul.on("click","li:not(:nth-child(2))",function(){
      $li=$(this);
      if($li.html()=="-"){
        if(count>1){
          count--;
        }
      }else{
        count++;
      }
      $input.val(count);
    });

    $(".buyerShop").click(function(e){
        e.preventDefault();
        cpid=parseInt(pid);

        var size=$("#size").val();

        if(datas.ok>0){
          if(size==0){
            tiptoggle("请正确选择尺码!");
          }else{//选择尺寸后，添加购物车请求购物车
            console.log("我是cPid："+cpid);
            $.ajax({
              type: "get",
              url: "data/cart/addCart.php",
              data: {uid, cpid, count},
              dataType: "json",
              success: function (datas) {

                if (datas.code > 0) {
                  tiptoggle("加入购物车成功");
                  console.log("success")
                } else {
                  tiptoggle("加入购物车失败")
                  console.log("ddd")
                }
              },
              error:function(){
                console.log("网络错误")
              }
            })
          }
        }else{//未登录
          location.href="login.html?back="+location.href;
        }


      })

  }
// 在登录情况下才会执行的模块
  $.ajax({
    type:"get",
    url:"data/users/islogin.php",
    dataType:"json",
    success:function(datas){
      addlove(datas);
      addShoppingCart(datas);
    }//success结束
  })//ajax结束


function tiptoggle(word){
  $(".tipWord").html(word);
  $(".newBg").show();
  $(".tip").show();

  setTimeout(function () {
    $(".newBg").hide();
    $(".tip").hide()
  }, 1500)
}



})