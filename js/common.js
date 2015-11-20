String.prototype.addstr=function(str){
	return this+""+str;
}
String.prototype.delstr=function(str){
	var index=this.indexOf(str),l=str.length,sl=this.length;
	return index>-1?this.substr(0,index)+""+this.substr(index+l,sl):this;
}
