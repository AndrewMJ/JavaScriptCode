// console.dir(document);

// const dragon = document.getElementById('dragon');
// console.log(dragon);

function rollDice(){
	console.log(`The user just clicked the roll button!`)

	let rand1 = Math.ceil(Math.random() * 6);
	let rand2 = Math.ceil(Math.random() * 6);

	let dice = document.getElementById(`dice`);
	dice.children[0].src=`./dragon-assets/d${rand1}.gif`;
	dice.children[1].src=`./dragon-assets/d${rand2}.gif`;
	console.dir(dice);

	if(rand1 + rand2 > 8){
		document.getElementById('dragon').children[0].src=`./dragon-assets/latest.jpg`
	}
}

let dragon = document.getElementById('dragon');
console.dir(dragon);
dragon.innerHTML='<h1>JavaScript was here!</h1>';