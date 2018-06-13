function caseConvert(str, conversionType){

 //Your code here!!
 	let convertedStr = ``;
 	if(conversionType === `camelCase`){
 		let strArray = str.split(`_`);
 		convertedStr += strArray[0];
 		for(let i = 1; i < strArray.length; i++){
 			convertedStr += strArray[i].replace(strArray[i][0],strArray[i][0].toUpperCase());
 		}
 	}else if(conversionType === `snake_case`){
		let strArray = str.split(/(?=[A-Z])/);
		convertedStr += strArray[0];
 		for(let i = 1; i < strArray.length; i++){
 			convertedStr += `_`;
 			convertedStr += strArray[i].replace(strArray[i][0],strArray[i][0].toLowerCase());
 		}

	}else{
		return `What is your problem?`;
	}
	return convertedStr;
} 

console.log(caseConvert(`dog_house_hello`,`camelCase`));
console.log(caseConvert(`dogHouseHello`,`snake_case`));
console.log(caseConvert(`dogHouseHello`,`go Saints!`));
