$(function(){
  $.ajax({
    type:"get",
    url:"data/users/islogin.php",
    dataType:"json",
    success:function(datas) {
      if(datas.ok>0) {
        $.ajax({
          type:"get",
          url:"data/cart/getOrder.php",
          dataType:"json",
          success:function(datas){
            var html="";
            for (data of datas) {
              var {cid, pid, pic, productName, count, price, brandName, is_checked} = data;
              html+=`<tr id="${pid}">
                <td class="img"><img src="${pic}"></td>
                <td class="shop">
                  <p>${brandName}&nbsp;&nbsp;${productName}</p>
                  <p>4 YEAR&nbsp;&nbsp;英国直邮(包邮)：${count}</p>
                </td>
                <td class="price">¥${price}</td>
                <td class="number"><input type="text" value="${count}" class="shopNumber" disabled></td>
                <td class="count">¥${price*count}</td>
              </tr>`
            }
            $("#car").html(html);
            $money=$("#car").find(".count");
            var sum=0;
            $money.each(function(i,li){
               sum+=parseFloat($(li).html().slice(1));
            })
            sum=sum.toFixed(2);
            console.log(sum)
            var html=`<p><input type="checkbox"><span>使用积分:0积分(￥0.00)</span></p>
        <p>运费：<span>0.00</span>元</p>
        <p>礼品卡优惠金额：<span>0.00</span>元</p>
        <p>优惠券优惠金额：<span>0.00</span>元</p>
        <p>商品金额：<span>${sum}</span>元</p>
        <p>活动优惠：<span>0.00</span>元</p>
        <p>实付金额：<span class="last">${sum}</span>元</p>`;
            $(".cartTotal").html(html);

            $(".btn3").click(function(e){
              e.preventDefault();
              var money=parseFloat($(".last").html());
              var word=$(".remarks>input").val();
              location.href="pay.html?money="+money+"&word="+word;
            })
          }
        })
      }
    }
  })



























});