require(["config"], function(){
	require(["jquery", "template", "load", "boot", "cookie"], function($, template){

        /* 加载推荐商品 */ 
		$.getJSON("/mock/popular.json", function(data){
			data = {popular : data.res_body.data};
			let html = template("popular_tem", data);
			$(".popular_list").html(html);
		});

        /*  第一层 加载健康生活商品 */ 
        $.getJSON("/mock/index_prodRight.1.json", function(data){
            data = {health : data.res_body.data};
            let html = template("health_temp", data);
            $(".bannerRightList").html(html);
        });

        $.getJSON("/mock/index_NavLeft.1.json" ,function(data){
            data = {healthNav : data.res_body.data};
            // console.log(data);
            let html = template("healthNav_temp", data);
            $(".themes").html(html);
        })

        /*  第二层 加载健康健康食品 */ 
        $.getJSON("/mock/index_prodRight.2.json", function(data){
            data = {health : data.res_body.data};
            let html = template("health_temp", data);
            $("#bannerRightList2").html(html);
        });

        $.getJSON("/mock/index_NavLeft.2.json" ,function(data){
            data = {healthNav : data.res_body.data};
            // console.log(data);
            let html = template("healthNav_temp", data);
            $("#themes2").html(html);
        })

        /*  第三层 加载母婴用品 */ 
       $.getJSON("/mock/index_prodRight.3.json", function(data){
            data = {health : data.res_body.data};
            let html = template("health_temp", data);
            $("#bannerRightList3").html(html);
        });

        $.getJSON("/mock/index_NavLeft.3.json" ,function(data){
            data = {healthNav : data.res_body.data};
            // console.log(data);
            let html = template("healthNav_temp", data);
            $("#themes3").html(html);
        });

        /*  第四层 加载时尚臻藏 */ 
        $.getJSON("/mock/index_prodRight.4.json", function(data){
            data = {health : data.res_body.data};
            let html = template("health_temp", data);
            $("#bannerRightList4").html(html);
        });

        $.getJSON("/mock/index_NavLeft.4.json" ,function(data){
            data = {healthNav : data.res_body.data};
            // console.log(data);
            let html = template("healthNav_temp", data);
            $("#themes4").html(html);
        });

        /*  第五层 加载时尚科技 */ 
        $.getJSON("/mock/index_prodRight.5.json", function(data){
            data = {health : data.res_body.data};
            let html = template("health_temp", data);
            $("#bannerRightList5").html(html);
        });

        $.getJSON("/mock/index_NavLeft.5.json" ,function(data){
            data = {healthNav : data.res_body.data};
            // console.log(data);
            let html = template("healthNav_temp", data);
            $("#themes5").html(html);
        });


    

        



	});
});
