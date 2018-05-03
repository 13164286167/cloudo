$(function(){
  // 在登录情况下才会执行的模块
  function loadPage(){
    $.ajax({
      type:"get",
      url:"data/users/islogin.php",
      dataType:"json",
      success:function(datas){
        if(datas.ok>0){
          var uid=datas.uid;
          $.ajax({
            type:"get",
            url:"data/cart/getCart.php",
            data:{uid},
            dataType:"json",
            success:function(datas){

              var html="";
              for (data of datas){
                var {cid,pid,pic,productName,count,price,brandName,is_checked}=data;
                html+=`<ul class="clear" data-cid="${cid}" data-pid="${pid}">
								<li class="index"><input type="checkbox" class="selectedItem"></li>
								<li class="img"><img src="${pic}"></li>
								<li class="shop">
									<p>${brandName}&nbsp;&nbsp;<span>${productName}</span></p>
									<p>4 YEAR&nbsp;&nbsp;英国直邮(包邮)：<span class="changeCount">${count}</span></p>
								</li>
								<li class="price">¥${price}</li>
								<li class="number" data-cid="${cid}">
									<input class="min" type="button" value="-">
									<input type="text" value="${count}" class="changeCount">
									<input class="add" type="button" value="+">
								</li>
								<li class="count">¥${price*count}</li>
								<li class="del"><input type="button"  data-cid="${cid}" value="删除"></li>
							</ul>`
              }
              $(".border").html(html);

            }
          })
        }else{
          location.href="login.html?back="+location.href;
        }
      }//success结束
    })//ajax结束
  }
  loadPage();
  $(".border").on("click",".add,.min",function(){
    var $input=$(this);
    var cid=$input.parent().attr("data-cid"),
    count=parseInt($input.siblings(":text").val());
    if($input.val()=="+")
      count++;
    else{
      if(count>1){
        count--;
      }else{
        tiptoggle("商品数量最少为一件");
      }
    }
    $.ajax({
      type:"get",
      url:"data/cart/updateCart.php",
      data:{cid, count},
      success:function(){
        loadPage();
      }
    })
  }).on("click",".del>input",function(e){
    var $input=$(this);
    var $delTip=$("#popSuc");
    var $newBg=$(".newBg");
    var cid=$input.attr("data-cid");
      $delTip.show();
      $newBg.show();
      $delTip.on("click","#hxiCle,#hxiEnA",function(){
        if($(this).is("#hxiCle")){
          $delTip.hide();
          $newBg.hide();
        }else{
          $delTip.hide();
          $newBg.hide();
          $.ajax({
            type:"get",
            url:"data/cart/deleteCart.php",
            data:{cid},
            success:function(){
              loadPage();
            }
          })
        }
      })
  });
  // 全选

  $("#seleAll").click(function(){
    var rs=$(this).prop("checked");
    $(".selectedItem").prop("checked",rs);
    var is_checked=$(this).prop("checked")?1:0;
    $.ajax({
      type:"get",
      url:"data/cart/checkAll.php",
      data:{is_checked}
      // success:function(){
      //   loadPage();
      // }
    })
  })

  $(".border").on("click",".selectedItem",function(){
    var $input=$(this);
    var cid=$input.parent().parent().attr("data-cid"),
      is_checked=$input.prop("checked")?1:0;
    console.log($input.prop("checked"));
    $.ajax({
      type:"get",
      url:"data/cart/checkOne.php",
      data:{cid, is_checked}
      // success:function(){
      //   loadPage();
      //   console.log("成功")
      // },
      // error:function(){
      //   console.log("网络错误")
      // }
    })

    var selectCount=0;
    var totalCount=$(".selectedItem").length;
    $.each($(".selectedItem"),function(idx,item){
      var rs=$(item).prop("checked");
      if(rs){
        //修改选中项的is_checked;
        selectCount++;
      }
      if(selectCount==totalCount){
        $("#seleAll").prop("checked",true);
      }else{
        $("#seleAll").prop("checked",false);
      }
    })
  })
  function tiptoggle(word){
    $(".tipWord").html(word);
    $(".newBg").show();
    $(".tip").show();
    setTimeout(function () {
      $(".newBg").hide();
      $(".tip").hide()
    }, 1500)
  }


(function rechecked(){
    var is_checked=0;
  $.ajax({
    type:"get",
    url:"data/cart/checkAll.php",
    data:{is_checked}
  })
})();
// rechecked();
$(".btn3").click(function(){
  var $input=$("input");
  var checked=0
  $input.each(function(i,elem){
    if($(elem).prop("checked")){
      console.log($(elem)[0]);
      checked++;
    }
    if(checked>0){
      location.href="orderSettlemnt.html";
    }else{
      tiptoggle("请选择商品!")
    }
  })
})










})