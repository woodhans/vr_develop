String.prototype.addstr=function(str){
	return this+""+str;
}
String.prototype.delstr=function(str){
	var _str=this.replace(str, '');
	while (_str.indexOf(str)>-1){
		_str=_str.replace(str, '');
	}
	return _str;
}
String.prototype.getQuery = function(name) {
　　var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  
　　var r = this.substr(this.indexOf("?")+1).match(reg); 
　　if (r!=null) return decodeURI(r[2]); return null;
}
$(function(){
	$('[data-function]').on('click',function(){
		eval($(this).data('function'));
	})
})
function showInfo(){
	if(window.localStorage.getItem('userinfo')){
		username=$.parseJSON(window.localStorage.getItem('userinfo')).username;
		$('#hellopanel').show().find('span').text(username)
	}else{
		$('#logpanel').show();
	}
}
function checklogin(href){
	href=href||'';
	window.localStorage.setItem('goto',href);
	if(window.localStorage.getItem('userinfo')){
		if(parseInt(window.localStorage.getItem('goto'))>0){
			msg=window.localStorage.getItem('goto')=="1"?'将于12月10日正式开放下载，':'内部测试中，';
			alert('联络互动开发者平台资源下载中心\n'+msg+'敬请期待!');
		}
		else{
			window.top.location.href='../'+href;
		}
	}
	else
	register();
}
function exit(){
	window.localStorage.removeItem('userinfo');
	window.location.reload();
}
function login(){
	
	window.top.$.slider({url:'pages/login.html',radius:10,width:600,height:450,id:"login"});
}
function register(){
	window.top.$.slider({url:'pages/register.html',radius:10,width:600,height:550,id:"register"});
}