function turn()
{
	window.open("introduction.html");
}
function check()
{
	if(localStorage.getItem('tag')==null||localStorage.getItem('tag')=='false')
	{
		alert("请先登录\n默认用户：username：123，password：123\n默认管理员：username：456，password：456");
		window.location.href="login.html";
	}
}