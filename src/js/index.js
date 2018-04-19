require(["config"], function(){
	require(["jquery", "template", "load"], function($, template){

        /* carousel */
        $.getJSON("/mock/carousel.json", function(data){
            data = {carousel : data.res_body.data};
            let html = template("carousel_temp", data);
            $(".banner_inner").prepend(html);
        })

		$.getJSON("/mock/list.json", function(data){
			data = {list : data.res_body.data};
			let html = template("list_template", data);
			$(".list").html(html);
		});

	});
});
