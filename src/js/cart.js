require(["config"], function(){
	require(["jquery", "template", "load", "cookie"], function($,template){

		/* 加载头部 */
		 $(".header").load("/html/include/header.html");
		/* 加载尾部 */ 
		$(".footer").load("/html/include/footer.html");


		/*******************************************************/ 
		/* 空购物车与显示购物车数据 */
		$.cookie.json = true;
		// 读取cookie中保存的购物车数据
		let _products = $.cookie("products") || [];
		// 判断购物车是否有商品
		if (_products.length === 0) {
			$(".empty_wrap").show().next(".goods_wrap").hide();
			return;
		} else {
			$(".empty_wrap").hide().next(".goods_wrap").show();
		};

		// 渲染从详情页面传过来的数据
		let rendData = { products : _products },
			html = template("cart_temp", rendData);
		$("#goods_table > tbody").html(html);


	})
})