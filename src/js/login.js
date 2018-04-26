require(["config"], function(){
    require(["jquery", "cookie"], function($){

        $(".isgo-login-bt").submit(function(){ 
            return false
          $.ajax({
                url : "http://localhost:8080/php/login.php",
                type : "post",
                data : $("#loginForm").serialize(),
                dataType : "json",
                success : function(data){

                    console.log(data)
                    /*if (data.res_code === 0) {

                        console.log(data)
                        // return false;
                        // 保存成功的用户信息到 cookie 中
                        // $.cookie.json = true; 
                        // $.cookie("loginUser", data.res_body, {path:"/"});
                        //location.href = "/index.html";
                        
                    } else {
                        $(".error").text("用户名或密码错误...");
                        // alert("用户名或密码错误...");
                    }*/
                }
            }) 
            // return false;      
         });
        
    })
})



