let str = "the day is sunny the the the sunny is is";

console.log(frequencyWord(str));

function frequencyWord(str){
	let word = str.split(" ");
	let obj = {};
	
	for(let i = 0; i < word.length; i++){
		
		if(obj[word[i]]){
			obj[word[i]]++;
		}else{
			obj[word[i]] = 1
		}
		
	} 
	return obj;
}


