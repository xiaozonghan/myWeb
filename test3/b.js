


/*var f;
var b = (function f(num) {
	
	if(num == 1){
		return 1;
	}else{
		return num * arguments.callee(num-1);
	}
	
});
var m = f;

alert(f(5));

function createFunction(){
	var result = new Array();
	for(var i=0;i<10;i++){
		result[i]=(function(num){
			return num;
		})(i);
	}
	return result;
}
var b = createFunction();
console.log(b[0]());

function box(){

}
alert(box.name);

box();
var box = function(){
    alert("hi");

}    


if(1<2){
	function box(){
		alert("hi");
	}
}else{
	function box(){
		alert("hello");
	}
}

box();


function box(ha){
	return function(obj1,obj2){
		var value1 = obj1[ha];
		var value2 = obj2[ha];

	}
}

function box(){
	var arr=[];
	for(var i=0;i<5;i++){
		arr[i]=function(num){
			return function(){
				return num;
			};	
		}(i);
	}
	return arr;
}
var b=box();
for(var i = 0;i<5;i++){
	alert(b[i]());
}


function box(){
	 var age=100;
	 return function(){
	 	age++;
	 	return age;
	 };
}
var b =box();


alert(b);

var name = "win";
var box = {
	name : "hah",
	fun : function(){
		return this.name;
	}
};

var c = box.fun;
alert(c());
box.fun = null
var d = box.fun;
alert(d());

function ox(num){
	var user = num;
	this.ha = function(){
		return user;
	} 
}

var pox = new ox("li");
alert(pox.ha());
var pox2 = new ox("oo");
alert(pox.ha());

(function(){
	var box = 10;
	function pox(){
		return false;
	}
	Mop = function(){

	};
	Mop.prototype.public=function(){
		box++;
		return pox()
	}
	alert(box)
})();

var b = new Mop();
alert(b.public())

function box(){

}
alert(box());
//putong
//
/()

(function(){
	alert("lee");
})();

function box(name){
    return function(obj1,obj2){
    	var value1 = obj1[name];
    	var value2 = obj2[name];
    	if(value1<value2){
    		return -1;
    	}else if(value1>value2){
    		return 1;
    	}else{
    		return 0;
    	}
    };
}
var pox = box("name");
alert(pox({name:"dada"},{name:"xoxo"}));


var pox=(function box(num){
	if(num == 1){
		return 1;
	}else{
		return num*box(num-1);
	}
});
//alert(box);
var x = pox;
pox = null;
alert( x(2));

function box(){
	var arr = [];
    for(var i = 0;i < 5;i++){
        arr[i] = function(num){
        	var pp= 5;
            return function(){
            	
            	return num ;
            };
        }(i);
    }
    return arr;
}
var b = box();
//alert(b[0]);
alert(pp);


var name = "pp";
var box = {
	name : "hah",
	fun : function(){
		var that = this;
		return function(){
			return that.name;
		};
	}
} 

alert(box.fun()())

function b (){
	(function noc(){
		for(var i = 0;i<3;i++){
			alert(i);
		}

	})();

	
	alert(i);

}
b();

function box(){
	var i = "p";
	function pox(){
		return 34;
	}
	this.go = function(){
		return pox();
	};
}
var c = new box();
alert(c.go());


function Box(name){
	this.get = function(){
		return name;
	};
	this.set = function(hah){
	    name = hah;
	};

}

var c = new Box("bb");
alert(c.get ());
*/



// var b = /a/.match(s);
// alert(3);







