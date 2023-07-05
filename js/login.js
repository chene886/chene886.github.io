let users = [{ name: '123', pwd: '123' }];
let manager = [{ name: '456', pwd: '456' }]

let username = document.getElementById("username");
let pwd = document.getElementById("pwd");
let btn = document.getElementById("log");
localStorage.setItem('tag', "false");
/* 点击按钮后触发声�? */
btn.onclick = function () {
	/* 遍历两个数组 */
	let ret = users.some(function (value) {
		return value.name == username.value && value.pwd == pwd.value;
	});

	let manager1 = manager.some(function (value) {
		return value.name == username.value && value.pwd == pwd.value;
	});

	/* 判断键盘获取用户名和密码是否注册了并存储在了locaStorage�? */
	if (username.value == localStorage.getItem('username1') && pwd.value == localStorage.getItem('pwd1')) {
		alert("用户登入成功");
		localStorage.setItem("tag","true");
		window.location.href = "index.html";
		/* 判断是否是预设账�? 并判断是用户或管理分别跳�? */
	} else if (ret) {
		alert("用户登入成功");
		localStorage.setItem("tag","true");
		window.location.href = "index.html";

	} else if (manager1) {
		alert("管理员登入成功");
		localStorage.setItem("tag","true");
		window.location.href = "manage.html";
	} else {/* 输入错误 */
		alert("输入正确用户名和密码");
	}
}



























/* function myFunction(){
			var x = document.getElementById("demo").value;
			var z=document.getElementById("name").value;
			var y = document.getElementById("damo");
			
			/*console.log(z);*/
/*alert('恭喜发财')*/
/*if(x==""&&z==""){
		alert("表格内不能为�?");
			}
else{
	if(x=="123456"&&z=="my"){
	
		y.href = "图片查看/project.html";
	
		}
		else if(x==""&&z=="my"){
	
			alert("您的密码不能为空");
		
		}
		else if(x=="123456"&&z==""){
	
			alert("您的用户名不能为�?");
		
		}
	else{
		alert("您填写的用户名或密码有误，请在输入一�?")
	}
}
	
} */