$("#zg_btn_login").click(function(e){
  e.preventDefault();
  var phone=$(".phone").val();
  var upwd=$(".upwd").val();
  console.log(phone,upwd);
  $.ajax({
    type:"post",
    url:"data/users/signin.php",
    dataType:"json",
    data:{phone,upwd},
    success:function(datas){
      if(datas.code>0){
        var href=location.href.split("back=")[1];
        if(href){
          location.href=href;
        }else{
          location.href="index.html";
        }
        console.log($("#login")[0]);
        $("#login").html("我的账户");
        $("#register").html("退出");
        console.log(datas.msg);
      }else{
        alert("用户名密码错误！");
      }
    },
    error:function(){
      console.log("网络错误！");
    }
  })
})

$(".info").children(":nth-child(2)").hide();
$(".selectLogin").on("click","li",function(){
  if($(this).index()==0){
    $(this).addClass("active").siblings().removeClass("active");
    $(".info").children().first().show().next().hide();
  }else{
    $(this).addClass("active").siblings().removeClass("active");
    $(".info").children().first().hide().next().show();
  }
})
var sw=false;
var offsetX,screenX;
$(".slide").mousedown(function(e){
  $(".slide").css("transition","");
  $(".slideGreen").css("transition","");
  sw=true;
  offsetX=e.offsetX;
  screenX=e.screenX;
  console.log(offsetX,screenX)
})
$(".in").mousemove(function(e){
  if(sw){
    var margin=parseFloat($(".in").css("marginLeft"));
    var left=e.clientX-screenX;
    var INWIDTH=parseFloat($(".in").css("width"));
    var INPADDING=parseFloat($(".in").css("paddingLeft"));
    left<0?left=0
      :(left<(INWIDTH+INPADDING-40)?left=left:left=(INWIDTH+INPADDING-40));
    $(".slide").css({
      left:left,
      top:0
    })
    $(".slideGreen").css("width",left)
  }
})
$(".docInfo").mouseup(function(){
  sw=false;
  $(".slide").css({
    left:0,
    top:0,
    transition:"all .5s linear"
  })
  $(".slideGreen").css({
    width:0,
    transition:"all .5s linear"
  })
})