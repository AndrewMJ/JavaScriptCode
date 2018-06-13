// function reverse(str){
// 	let str1 = "";


// 	for(let i = str.length -1; i >= 0; i--){

// 	str1 += str[i];
// 	}

// 	return str1;
// }

// console.log(reverse("It is Friday"));


// let colors = [
//                 {
//                     colorName : "red",
//                     r: 255,
//                     b: 0,
//                     g: 0
//                 },
//                 {  
//                     colorName : "pink",
//                     r: 255,
//                     b: 182,
//                     g: 192
//                 },
//                 {
//                     colorName : "brown",
//                     r: 210,
//                     b: 105,
//                     g: 30
//                 },
//                 {  
//                     colorName : "cyan",
//                     r: 0,
//                     b: 255,
//                     g: 255
//                 }
//             ]

// let arr = [];

// for (let i = 0; i < colors.length; i++){
// 	if(colors[i].b && colors[i].g > 100){
// 		arr.push(colors[i])
// 	}
// }     
// console.log(arr);      

let rand = Math.ceil(Math.random() * 3);
console.log(rand);