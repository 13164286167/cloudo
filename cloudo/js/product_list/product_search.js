
var $filter=$(".filter")
var $hasFilter=$(".hasFilter");
var obj={};
var size=[];
var sort=[];
var color=[];
var brand=[];
var dataObj={};

$(".priceBtn").click(function(){
  var low=parseFloat($("#product-low").val());
  var high=parseFloat($("#product-high").val());
  dataObj.low=low;
  dataObj.high=high;
  console.log(1);
  searchProductTerm(dataObj);
})
var key=location.href.split("kw=")[1];
dataObj.key=key;
var low=$("#product-low").val();
var high=$("#product-high").val();
console.log("这是关键字"+key);
$(".productList").on("click",".infoImg",function(){
    $img=$(this);
    var pid=parseInt($img.data("pid"));
    location.href="shopInfo.html?pid="+pid;
})
console.log("执行到filter");

$filter.on("click","li",function(){
  var term=$(this).children(".rankingName").html();
  var title=$(this).parent().data("item");
  if(title=="order"||title=="gender"){
    $(this).siblings().children(".rankingMe").css("background","#fff").siblings().css("color","#8c8c8c")
    obj[title]=term;
  }else if(title=="size"){
    size[size.length]=term;
    obj[title]=size;
  }else if(title=="sort"){
    sort[sort.length]=term;
    obj[title]=sort;
  }else if(title=="color"){
    color[color.length]=term;
    obj[title]=color;
  }else if(title=="brand"){
    brand[brand.length]=term;
    obj[title]=brand;
  }
  console.log(obj);
  var html="";
  for(var key in obj){
    var item=obj[key];
      html+=`<div class="wantLook" data-item="${key}">
								<span class="noWant"></span>
								<span class="lookName">${item}</span>
							</div>`;
    dataObj[key]=item;
    var $span=$filter.children("span");
    $span.each(function(i,elem){
      if($(elem).html()==item) {
        $(elem).css("color", "#000").prev().css("background", "#000");
      }else{
        $(elem).css("color", "#8c8c8c").prev().css("background", "#fff");
      }
    })
  }
   $(".hasFilter").html(html);
  // obj.low=parseFloat($("#product-low").val());
  // obj.high=parseFloat($("#product-high").val());
  searchProductTerm(dataObj);

})
.on("click",".noWant",function(){
  $(this).parent().remove();
  var txt=$(this).next().html();
  var title=$(this).parent().data("item");
  console.log("heihei");
  console.log(title);
  //怎么清空数组？？
$(".filter li span").each(function(i,elem){
    for(var tt in obj[title]){
      if($(elem).html()==obj[title][tt]){
        console.log(elem);
        $(elem).parent().children(".rankingMe")
          .css("background","#fff").siblings()
          .css("color","#8c8c8c");
      }
    }
});
  delete obj[title];
  delete dataObj[title];
  searchProductTerm(dataObj);
})

function searchProductTerm(obj){
  $.ajax({
    type:"get",
    url:"data/product_list/get_products_term.php",
    data:obj,
    dataType:"json",
    success:function(datas){
      window.scrollTo(0,0);

      var html="";
      if(datas.data.length>0){
        for(var data of datas.data){
          var {pid,title,brandName,productName,price,pic,spec,gender}=data;
          html+=`<div class="productWrap" data-pid="${pid}">
                  <div class="proInfo">
                    <!--图片 -->
                    <div class="product">
                      <img src="${pic}" class="infoImg" title="${title}" data-pid="${pid}">
                    </div>
                    <div class="brandName">${brandName}</div>
                    <div class="productName">${productName}</div>
                    <div class="border"></div>
                    <div class="price"><span>¥${price}</span><span class="awardPoint">赠</span></div>
                  </div>
                  <div class="loveOne">
                    <ul>
                      <li>3 YEAR</li>
                      <li>4 YEAR</li>
                      <li>5 YEAR</li>
                      <li>6 YEAR</li>
                      <li>7 YEAR</li>
                      <li>${spec}</li>
                    </ul>
                    <div class="lover"></div>
                  </div>
              </div>`;
        }
        html+=`<div class="pagebox"><ul class="page"></ul></div>`;
        $(".productList").html(html);

        html="";
        var pno=parseInt(datas.pno);
        var pageCount=parseInt(datas.pageCount);
        var pageSize=parseInt(datas.pageSize);
        var key=$("#product-kw").val();
        var low=$("#product-low").val();
        var high=$("#product-high").val();


        var html="";
        html+=`<li><a href="#"  class="index" data-page="${low}_${high}_${key}">首页</a></li>`;
        html+=`<li><a href="#"   class="prvepno" data-page="${low}_${high}_${key}">上一页</a></li>`;
        if(pno-2>0){
          html+=`<li><a href="#" data-page="${low}_${high}_${key}">${pno-2}</a></li>`;
        }
        if(pno-1>0){
          html+=`<li><a href="#" data-page="${low}_${high}_${key}">${pno-1}</a></li>`;
        }
        html+=`<li class="active" ><a href="#" data-page="${low}_${high}_${key}">${pno}</a></li>`;
        if(pno+1<=pageCount){
          html+=`<li><a href="#" data-page="${low}_${high}_${key}">${pno+1}</a></li>`;
        }
        if(pno+2<=pageCount){
          html+=`<li><a href="#" data-page="${low}_${high}_${key}">${pno+2}</a></li>`;
        }
        html+=`<li><a class="nextpno" data-page="${low}_${high}_${key}" href="#">下一页</a></li>`;
        html+=`<li class="select-pagesize" style="border:none">
          <select class="pageSelect" data-page="${pageSize}">
            <option value="9" >&nbsp;&nbsp;9条/页</option>
            <option value="12" checked>12条/页</option>
            <option value="24">24条/页</option>
          </select>
          <input type="text" value=1>
          <a href="#" class="goto">跳转</a>
        </li>`
        $(".page").html(html);
        pageSize=parseInt($(".pageSelect").data("page"));
        if ($(".active").children().html()=="1"){
          $(".prvepno").addClass("pageDisabled").parent().addClass("liPageDisabled");
          $(".index").addClass("pageDisabled").parent().addClass("liPageDisabled");
        }else if($(".active").children().html()==pageCount){
          $(".nextpno").addClass("pageDisabled").parent().addClass("liPageDisabled");
        }
        //分页条
        $(".goto").click(function(e){
          e.preventDefault();
          var pageSize1=$(".pageSelect").val();
          $(".pageSelect").data("page",pageSize1);
          pageSize=parseInt($(".pageSelect").data("page"));
          var pno=parseInt($(".select-pagesize").find("input").val());
          // obj.pno=pno;
          // obj.pageSize=pageSize;
          // obj.key=key;

          searchProductTerm(obj);
        })
        //分页条分页123456
        $(".productList").on("click",".pagebox>.page>li:not('.select-pagesize')",function(e){
          e.preventDefault();
          $a=$(this).children();
          var pnoActive=parseInt($(this).parent().parent().find(".active").children().html());
          if($a.html()=="上一页"){
            // console.log($a.html());
            if(pnoActive!=1){
              var pno=pnoActive-1;
            }else{
              return;
            }
          }else if($a.html()=="下一页"){
            if(pnoActive!=pageCount){
              var pno=pnoActive+1;
            }else{
              return;
            }
          }else if($a.html()=="首页"){
            if(pnoActive!=1){
              var pno=1;
            }else{
              return;
            }
          }else{
            pno=parseInt($a.html());
          }

          window.scrollTo(0,0);

          var page=$(this).children().data("page");
          var data=page.split("_");
          var low=parseInt(data[0]);
          var high=parseInt(data[1]);
          var key=data[2];
          if(key=="undefined"){
            key="";
          }
          if(isNaN(low)){
            low="";
          }
          if(isNaN(high)){
            high="";
          }
          for(var obt in obj){
            var item1=obj[obt];
            dataObj[obt]=item1;
          }
          console.log(obj);
          dataObj.pno=pno;
          dataObj.pageSize=pageSize;
          dataObj.low=low;
          dataObj.high=high;
          dataObj.key=key;
          console.log(dataObj)
          searchProductTerm(dataObj);
        })
      }else{
        //什么都没找到就是这个
        html=`<div class="nothing">未检索到相关商品呦！</div>`;
        $(".mainContent").html(html);
      }

    },//结束success,
    error:function(){console.log("网络错误")}
  })
}
searchProductTerm(dataObj);