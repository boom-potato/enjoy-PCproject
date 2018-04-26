require(["config"], function(){
    require(["jquery", "cookie"], function($){

    /* 验证注册的邮箱是否被占用 */
    let isExist = true; // 标记邮箱是否被占用，true--占用 false--未被占用
      $(".isgo-login-table :text[name='phone']").blur(function(){
        // console.log($(this).val());
        // console.log($("#regForm").serialize());
        
          // $.getJSON("http://localhost/check.php", {phone : $(this).val()}, function(data){
          //       console.log(data);
          //       if (data.res_body.status == 0) {
          //         isExist = false;
          //       $(".email_info").text("邮箱可用");
          //     } else {
          //       isExist = true;
          //       $(".email_info").text("邮箱已被注册，请重新输入");
          //     }
          //   });  
          $.ajax({
              url: "http://localhost/check.php",
              type: "get",
              dataType: "json",
              data: $("#regForm").serialize(),
              success : function(data) {
                if (data.res_body.status == 0) {
                    isExist = false;
                    $(".email_info").text("邮箱可用");
                }else{
                    isExist = true;
                    $(".email_info").text("邮箱已被注册，请重新输入");
                  };
                }
          });
    });

      $("#regFormSubmit").on("click", function(){
        $.ajax({
            url: "http://localhost/register.php",
            type: "post",
            dataType: "json",
            data: $("#regForm").serialize(),
            success : function(data){
                console.log(data);
                if (data.res_code === 0) {
                // 保存注册成功的用户信息到 cookie 中
                $.cookie.json = true; 
                $.cookie("loginUser", data.res_body, {path:"/"});
                location = "/";

              } else {
                $(".error").text("用户注册失败，请稍后重试...");
              }
            }
        }); 
      });


    })
})



