require(["config"],function(){
	require(["jquery", "template", "zoom", "load", "cookie"],function($,template){

		// 加载头部尾部
		$(".header").load("/html/include/header.html");
		$(".footer").load("/html/include/footer.html");

		// 放大镜效果
		$("#zoomPic").elevateZoom();

		/* 人气商品数据渲染 */
		$.cookie.json = true;
		let _popular = $.cookie("popular");
		console.log(_popular);
		$(".id").text(_popular.id);
		$(".popular_img").attr("src",_popular.img); 

		// $.getJSON("/mock/detailLeft.json", function(data){
		// 	data = {zoom : data.res_body.data.picId};
		// 	if(picId == id)
		// 	let html = template("pic_temp", data);
		// 	$("#photoZoom").html(html);
		// })
		



	})
})