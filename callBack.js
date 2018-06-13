// const callback = function)_{
// 	console.log("1000 milliseconds have passed")
// }

// console.log(typeof(callback));
// console.log(callback());
// setTimeout(callback(), 1000)

function a(x){
	return function(y){
		console.log(x+y);
	}
}
a(2)(3);