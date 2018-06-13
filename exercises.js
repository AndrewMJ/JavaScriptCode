for(let i =0; i < 7; i++){
	if(i == 0 || i == 6){
		console.log("Sleep in")
	}
	else{
		console.log("Go to work")
	}
}

for(let i = 1; i <= 7; i++){
	n=2018;

	if(i%2==0 && i!=2){
		console.log(i + " - 30 days");

	}
	else if(i===2 && n%4==0){
		console.log(i + " - 29 days")
	}
	else if(i===2) {
		console.log(i + " - 28 days")
	}
	
	else if(i%2==1 && i!=2) {
		console.log(i + " - 31 days");
	}
}
for(let i = 8; i <=12; i++){
	if(i%2==0){
		console.log(i + " - 31 days");
	}
	else{
		console.log(i + " - 30 days");
	}
}