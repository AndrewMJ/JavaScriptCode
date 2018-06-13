let str = "today is friday"
let st=""
str = str.toLowerCase().split("").join("").split(" ");
for(let i = 0; i < str.length; i++){
	var len = str[i].length-1;
    st+= str[i].substring(0, len) + str[i].substring(len).toUpperCase()+" ";
  	
} 
console.log(st)