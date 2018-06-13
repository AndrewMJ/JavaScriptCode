var players = [
  {
    name: 'Paul Millsap',
    position: 'PF',
    avgMinutesPlayed: 36,
    avgPoints: 16.4,
    avgRebounds: 9.4,
    starter: true
  },
  {
    name: 'Jeff Teague',
    position: 'PG',
    avgMinutesPlayed: 28.6,
    avgPoints: 15.6,
    avgRebounds: 1.9,
    starter: true
  },
  {
    name: 'Al Horford',
    position: 'C',
    avgMinutesPlayed: 32,
    avgPoints: 13.2,
    avgRebounds: 6.8,
    starter: true
  },
  {
    name: 'Kent Bazemore',
    position: 'SF',
    avgMinutesPlayed: 31.8,
    avgPoints: 12,
    avgRebounds: 6.6,
    starter: true
  },
  {
    name: 'Kyle Korver',
    position: 'SG',
    avgMinutesPlayed: 32.4,
    avgPoints: 11.2,
    avgRebounds: 4.9,
    starter: true
  },
  {
    name: 'Dennis Schroder',
    position: 'PG',
    avgMinutesPlayed: 18.3,
    avgPoints: 10.7,
    avgRebounds: 1.8,
    starter: false
  },
  {
    name: 'Kris Humphries',
    position: 'PF',
    avgMinutesPlayed: 14.7,
    avgPoints: 9.7,
    avgRebounds: 5.7,
    starter: false
  },
  {
    name: 'Mike Scott',
    position: 'PF',
    avgMinutesPlayed: 17.6,
    avgPoints: 7.0,
    avgRebounds: 3.6,
    starter: false
  },
  {
    name: 'Thabo Sefolosha',
    position: 'SF',
    avgMinutesPlayed: 18.9,
    avgPoints: 4.8,
    avgRebounds: 3.9,
    starter: false
  },
  {
    name: 'Mike Muscala',
    position: 'PF',
    avgMinutesPlayed: 7.4,
    avgPoints: 2.7,
    avgRebounds: 1.9,
    starter: false
  },
  {
    name: 'Tim Hardaway Jr.',
    position: 'SG',
    avgMinutesPlayed: 9.7,
    avgPoints: 2.2,
    avgRebounds: 1.0,
    starter: false
  },
  {
    name: 'Lamar Patterson',
    position: 'SG',
    avgMinutesPlayed: 5.0,
    avgPoints: 1.5,
    avgRebounds: 1.3,
    starter: false
  },
  {
    name: 'Kirk Hinrich',
    position: 'SG',
    avgMinutesPlayed: 4.5,
    avgPoints: 0.8,
    avgRebounds: 0.7,
    starter: false
  }
];
// 1.
// var avgOfAvgMinutes = 0;
// for(i=0; i<players.length; i++){
//   avgOfAvgMinutes += players[i].avgMinutesPlayed;
//   console.log(players[i].name + " "+players[i].avgMinutesPlayed);
// }
// avgOfAvgMinutes/players.length;


// 2.
//  var avgOfAvgMinutes = 0;
// for(i=0; i<players.length; i++){
//   if(players[i].starter){
//   avgOfAvgMinutes += players[i].avgMinutesPlayed;
//   console.log(players[i].name + " "+players[i].avgMinutesPlayed);
//   }
// }

// 3.
// var avgOfAvgMinutes = 0;
// for(i=0; i<players.length; i++){
//   if(!(players[i].starter)){
//   avgOfAvgMinutes += players[i].avgMinutesPlayed;
//   console.log(players[i].name + " "+players[i].avgMinutesPlayed);
//   }
// }

// 4.
// const nameArr=[];
// for(i=0; i<players.length; i++){
//   nameArr.push(players[i].name)
// }
// console.log(nameArr);

// 5.
// const pArr=[];
// for(i=0; i<players.length; i++){
//   if((players[i].avgPoints > 10)){
//   pArr.push(players[i].name)
//   }
// }
// console.log(pArr);

6.
// const rArr=[];
// for(i=0; i<players.length; i++){
//   if((players[i].avgRebounds > 5)){
//   rArr.push(players[i].name)
//   }
// }
// console.log(rArr);

7.
function maxNum(mostPoints){
  let max = mostPoints[0];

  for (let i = 1; i <mostPoints.length; i++) {
    if(max < mostPoints[i]){
          max = mostPoints[i];
    }
  }

  return max;
}

const arr = [];

function mostPointsPerMin(players){
    // for (let i = 0; i < players.length; i++) {
    //   console.log(179);
    //     // let avgPointsPerMin = players[i].avgPoints/players[i].avgMinutesPlayed;
    //     // arr.push(avgPointsPerMin);
    // }
    
    // console.log(maxNum(arr));
}

// players.forEach(function(player){
//   console.log(player.name)
// })

let ptsPerMin = players.map((player) => {
  let avgPointsPerMin = player.avgPoints / player.avgMinutesPlayed
  return avgPointsPerMin
})


console.log(ptsPerMin)


mostPointsPerMin(players)