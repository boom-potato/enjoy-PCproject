require(["config"], function(){
    require(["jquery", "cookie"], function($){

        $(".isgo-login-bt").on("click", function(){ 
          $.ajax({
                url : "http://localhost/login.php",
                type : "post",
                data : $("#loginForm").serialize(),
                dataType : "json",
                success : function(data){

                    console.log(data)
                    if (data.res_code === 0) {
                        alert("登录成功");
                        // 保存成功的用户信息到 cookie 中
                        $.cookie.json = true; 
                        $.cookie("loginUser", data.res_body, {path:"/"});
                        location = "/";
                        
                    } else {
                        $(".error").text("用户名或密码错误...");
                       
                    }
                }
            }) 
            // return false;      
         });
        
    })
})



