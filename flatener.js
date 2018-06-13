var arr = [[1],[2],[[4]]];
var arr1 = [];

for(let i = 0; i < arr.length; i++){
	if(typeof arr[i][0] ==='number' ){
		console.log(arr[i][0]);
		arr1.push(arr[i][0])
	}else{
		
		arr1.push(arr[i][0][0])
		console.log(arr[i][0][0]);
	}
}

console.log(arr1);