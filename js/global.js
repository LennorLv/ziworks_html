// JavaScript Document



/*window.onload = function() {
	var hh = document.getElementById("pic").offsetHeight;
	document.getElementById("banner").style.height = hh+"px";
	mm = hh-105
	document.getElementById("banner-text").style.paddingTop = mm/2-100+"px";
	}
window.onresize = function() {
	var hh = document.getElementById("pic").offsetHeight;
	document.getElementById("banner").style.height = hh+"px";
	mm = hh-105
	document.getElementById("banner-text").style.paddingTop = mm/2-100+"px";
	}
*/


//页面载入时计算页面布局
window.onload = function() {
	var bw = document.body.clientWidth;
	var hh = document.getElementById("pic").offsetHeight;
	if (bw >= 768){			
		document.getElementById("banner").style.height = hh+"px";
		mm = hh-105
		document.getElementById("banner-text").style.paddingTop = mm/2-100+"px";
			}
			//页面宽度大于768时banner的布局
	else {
		document.getElementById("banner").style.height = hh-50+"px";
		mm = hh-50
		document.getElementById("banner-text").style.paddingTop = mm/2+"px";
		}
		//页面宽度小于768时banner的布局
	}



//页面窗口大小改变时计算页面布局	
window.onresize = function() {
	var bw = document.body.clientWidth;
	var hh = document.getElementById("pic").offsetHeight;
	if (bw >= 768){			
		document.getElementById("banner").style.height = hh+"px";
		mm = hh-105
		document.getElementById("banner-text").style.paddingTop = mm/2-100+"px";
			}
			//页面宽度大于768时banner的布局
	else {
		document.getElementById("banner").style.height = hh-50+"px";
		mm = hh-50
		document.getElementById("banner-text").style.paddingTop = mm/2+"px";
		}
		//页面宽度大于768时banner的布局
	}