<?php 
	header("Access-Control-Allow-Origin:*");
	// 获取输入的登录用户名与密码
	$phone = $_POST["phone"];
	$password = $_POST["password"];

	/* 在数据库中比对用户信息 */
	$conn = mysql_connect("localhost", "root", "");

	// 选择数据库
	mysql_select_db("enjoy", $conn);

	// 编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");

	$sql = "SELECT id, phone FROM `mall-users` WHERE phone='$phone' and password='$password'";
	// 执行查询SQL语句，返回查询结果集（类似表格）
	$result = mysql_query($sql);

	// 判断查询结果
	if ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
		echo '{"res_code":0, "res_error":"", "res_body":'. json_encode($row) .'}';
		// echo "<script>alert('用户登录成功'); location='login.html';</script>";
	} else {
		echo '{"res_code":-1, "res_error":"用户名或密码错误", "res_body":{}}';
		//echo "<script>alert('用户登录成功'); </script>";
	}
	
	// 关闭数据库连接
	mysql_close();
 ?>
