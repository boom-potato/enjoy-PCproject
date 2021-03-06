require(["config"],function(){
	require(["jquery", "template", "zoom", "load", "cookie"],function($,template){

		// 加载头部尾部
		$(".header").load("/html/include/header.html");
		$(".footer").load("/html/include/footer.html");

		/***************************************************/ 
		/* 商品右边的模板渲染 */

		/* 读取假数据的id,根据id把旗下的内容全部加载出来 */

		let url = location.toString(),
			state = Number(url.indexOf("?")+1),
			id = url.slice(state);
		// console.log(url);
		// console.log(state);
		// console.log(id);
		let news = "/mock/detailRight"+id+".json";
		$.getJSON(news, function(data){
			data = data.res_body.data;
			data.forEach(function(item){
				console.log(item.id, id)
				if(item.id==id){
					var html = template("detail_temp",{prod : item});
					// console.log(html);
					$(".bigWrap").html(html);
					};
				});
			

		/* 放大镜效果 */ 
		$("#zoomPic").elevateZoom();


		/* 点击数量+- */
		$(".rightBox").on("click", "#minus,#add", function(){
			let _prod = $(this).parents(".count1").children(".amount").val();
			// console.log(_prod);
			let _amount = Number(_prod);
			if ($(this).is("#add")) {
				_amount++;
			} else {
				if (_amount <= 1)
					return;
				_amount--;
			}
			// 保存在cookie
			$.cookie.json = true;
			let _products = $.cookie("products");
			$.cookie("products", _products, {expires:7, path:"/"});
			//页面渲染
			$(this).siblings(".amount").val(_amount);
		});
		
		// 点击加入购物车保存cookie
		$(".content").on("click", "a", function(){
			// 当前选购的对象信息提取
			let that = $(this).parent().parent();//*回到最上层的父元素才找得出来
			// console.log(that);
			let product = {
				id:$(that).find(".id").text(),
				img:$(that).find(".img1").attr("src"),
				title:$(that).find(".title").text(),
				price:$(that).find(".price").text(),
				amount:1

			}
			
			 // console.log(product);

			 /* cookie */ 
			$.cookie.json = true;
			let _products = $.cookie("products") || [];
				index = exist(product.id, _products);
			if (index === -1) {	//表示没有，则新添加商品
				_products.push(product);
			} else {
				_products[index].amount++;
			}

			//	重新保存在cookie中
			$.cookie("products", _products, {expires:7, path:"/"});
			alert("加入购物车成功！");
		})

		
		// 查找指定id的商品在数组中的下标
		function exist(id, products) {
			for (let i = 0, len = products.length; i < len; i++) {
				if (products[i].id === id)
					return i;
			}
			return -1;
		}






		})
	})
})
