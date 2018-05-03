$(function(){
	$("#footer").load("footer.html",function(){
		$(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head");
	})
})
