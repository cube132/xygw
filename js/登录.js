//切换页面
window.onload = function(){
	var item = document.getElementsByClassName("item");
	var it = item[0].getElementsByTagName("div");
	
	var content = document.getElementsByClassName("content");
	var con = content[0].getElementsByTagName("div");
	
	for(let i=0;i<it.length;i++){
		it[i].onclick = function(){
			for(let j=0;j<it.length;j++){
				it[j].className = '';
				con[j].style.display = "none";
			}
			this.className = "active";
			it[i].index=i;
			con[i].style.display = "block";
		}
	}
}

//登录注册
var user = new Map([["123","123"]])

function login(){
	var username = document.getElementById("login-username").value;
	var password = document.getElementById("login-password").value;
	
	if(user.get(username)==password){
		window.location.assign("学院官网.html");
	}else{
		alert("用户名或密码错误");
	}
}

function register(){
	var username = document.getElementById("register-username").value;
	var password = document.getElementById("register-password").value;
	
	user.set(username,password);
	alert("注册成功，请登录");
	document.getElementById("register-username").value="";
	document.getElementById("register-password").value="";
	document.getElementById("register-email").value="";
}
