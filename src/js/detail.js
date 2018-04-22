require(["config"],function(){
	require(["jquery", "load"],function($){

		// 加载头部尾部
		$(".header").load("/html/include/header.html");
		$(".footer").load("/html/include/footer.html");


	})
})