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

		// 将product中每个元素缓存到行中(这样计算总价的时候才有数据)
		$("#goods_table > tbody > .prodTr").each(function(index, element){
			$(this).data("prod", _products[index]);
			// console.log(this);
		});

		/*********************************************************/
		/****** 购物车操作 ******/

		/* 数量+/- */
		$("#goods_table").on("click", ".minus,.add", function(){
			let _prod = $(this).parents(".prodTr").data("prod");
			// console.log(_prod);
			let _amount = Number(_prod.amount);
			
			if ($(this).is(".add")) {
				_amount++;
			} else {
				if (_amount <= 1)
					return;
				_amount--;
			}
			_prod.amount = _amount;
			// console.log(_amount);
			// 保存在cookie中
			$.cookie("products", _products, {expires:7, path:"/"});
			// 页面渲染
			$(this).siblings("#textMiddle").val(_amount);
			$(this).parents(".prodTr").children(".sub").text((_prod.price * _amount).toFixed(2));

			// 合计
			calcTotal();
		});


		/* 删除商品 */
		$("#goods_table").on("click", ".del", function(){
			// 获取当前删除行中的商品对象
			let _prod = $(this).parents(".prodTr").data("prod");
			// console.log(_prod);
			//查找其在_products数组中的索引
			let _index = $.inArray(_prod, _products);
			// console.log(_index);
			// 从cookie中删除元素
			_products.splice(_index, 1);
			// 从cookie中删除(覆盖保存)
			$.cookie("products", _products, {expires:7, path:"/"});
			// 从DOM中删除
			$(this).parents("tr").remove();

			// 计算合计
			calcTotal();
		});


		/* 文本数量的修改 */ 
		$("#goods_table").on("blur", "#textMiddle", function(){
			let _prod = $(this).parents("tr").data("prod");
			_prod.amount = $(this).val();
			// console.log(_prod.amount);
			// 保存cookie
			$.cookie("products", _products, {expires:7, path:"/"});
			// 页面渲染
			$(this).parents("tr").children(".sub").text((_prod.price * _prod.amount).toFixed(2));

			// 计算合计
			calcTotal();
		});


		/* 全选 */
		$("#selectAll").click(function() {
			// 获取全选复选框的状态
			let status = $(this).prop("checked");
			// console.log(status);
			// 设置所有行的复选框为选中状态
			$(".prodCheck").prop("checked", status);
			
			// 计算合计
			calcTotal();
		});

		/* 部分选中 */
		$("#goods_table").on("click", ".prodCheck", function(){
			$("#selectAll").prop("checked", $(".prodCheck:checked").length === _products.length)

			// 计算合计
			calcTotal();
		}) 

		/* 计算合计金额 */
		function calcTotal(){
			let total = 0;
			$(".prodCheck:checked").each(function(){
				total += Number($(this).parents("tr").children(".sub").text());
				// console.log(total);
			});
			// console.log($("#prodPrice"))
			$("#prodPrice").text(total);
		};






	})
})
