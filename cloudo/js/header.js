$(function(){
  $("#header").load("header.html",function(){
    $(`<link rel="stylesheet" href="css/bootstrap.min.css">`).appendTo("head");
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    console.log("执行header.js");
    $(window).scroll(function(){
      if($(window).scrollTop()>=100){
        $(".classify").addClass("fixed");
      }else{
        $(".classify").removeClass("fixed");
      }
    });
    $.ajax({
      type:"get",
      url:"data/users/islogin.php",
      dataType:"json",
      success:function(datas){

        if(datas.ok>0){
          $("#login").html("我的账户").attr("href","#");
          $("#register").html("退出").attr("href","#");
          $.ajax({
            type:"get",
            url:"data/cart/shop_cart_count.php",
            dataType:"json",
            success:function(datas){

              $("#shopping_Cart").html(`购物车(${datas})`);
            }
          })
        }else{
          $("#login").html("登录").attr("href","login.html");
          $("#register").html("注册").attr("href","login.html");
          $("#shop_car").html(`购物车(0)`);
        }
        $("#register").click(function(){
          if($("#register").html()=="退出"){
            $.ajax({
              type:"get",
              url:"data/users/signout.php",
              success:function(){
                location.href="index.html";
              },
              error:function(){
                console.log("signout.php 网络错误");
              }
            })
          }
        })


      },
      error:function(){
        console.log("islogin网络错误");
      }
    })

    $("#shopping_Cart").click(function(e){
      e.preventDefault();
      $.ajax({
        type:"get",
        url:"data/users/islogin.php",
        dataType:"json",
        success:function(datas){
          if(datas.ok>0){
            var uid=datas.uid;
            location.href="same.html";

          }else{
            location.href="login.html";
          }
        }//success结束
      })//ajax结束
    })
    $(".search-img>a").click(function(e){
      e.preventDefault();
      $(this).hide().parent().next().children().show();
    })
    var $keytxt=$("#keyWord");
    var $clickMeSearch=$(".clickMeSearch");
    $clickMeSearch.click(function(){
      var kw=$keytxt.val();
      if(kw.trim()!=""){
        location.href="productList.html?kw="+kw.trim();
      }
    })
    $keytxt.keyup(function(e){
      if(e.keyCode==13){
        $clickMeSearch.click();
      }
    })



  })

})

