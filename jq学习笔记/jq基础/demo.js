// $(function(){
// 	//这是直接在内部加入css属性，
// 	// 通过f12查看，内部新增css代码
// 	$("#box").css("color","red");
// });


// jQuery(function(){	
// 	jQuery("#box").css("color","red");
// 	alert($===jQuery);//true
// });


// $(function(){
// 	alert($);
// 	alert($());
// 	alert($("#box"));
// 	alert($("#box").css("color","red"));
// 	$("#box").css("color","bule").css("font-size","30px");
// 	//下面这个颜色设置就没有用
// });



// window.onload=function(){
// 	$("#box").css("color","yellow");
// }//网页必须加载完毕，包括所有内容
// window.onload=function(){
// 	alert(1);
// }//上面内容将被覆盖



// $(document).ready(function(){
// 	alert(1);
// });//加载完DOM树即可
// $(document).ready(function(){
// 	alert(2);
// })//第一次不会被覆盖
// // 简写方法
// $(function(){

// });


// $(function(){
// 	// alert($());//[object Object]
// 	// alert($("#box"));//[object Object]
// 	//上面都返回了jq对象，若要得到原生对象
// 	// alert($("#box").get(0));[object HTMLDivElement]
// 	//对象互相交换
// 	// alert($(document.getElementById("box")));[object Object]
// });


// 解决库之间的冲突
//jQuery在前面
// var $$=jQuery;
// $$(function(){
// 	// jQuery用两个$代替，其他库用$
// 	alert($$("#box"));
// });
// jQuery在后面
// jQuery.noConflict(); //删除$所有权
// var $$=jQuery;
// $$(function(){
// 	alert($$("#box"));
// });









