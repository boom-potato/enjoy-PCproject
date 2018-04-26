require(["config"], function(){
    require(["jquery", "cookie"], function($){

        $("#loginForm").click(function(){ 
          $.ajax({
                type : "post",
                url : "http://localhost:8080/login.php",
                data : $(this).serialize(),
                dataType : "json",
                success : function(data){
                    return false
                    console.log(data)
                   /* if (data.res_code === 0) {

                        console.log(data)
                        return false;
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
            return false;      
         });
        
    })
})



