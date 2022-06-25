
//  BIRD WATCHER
/* Instruction 1
birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

function totalBirdCount(birdsPerDay) {
    let count = 0;
    for (let i=0; i<birdsPerDay.length; i++) {
        count += birdsPerDay[i];
    }
    return  count
}
*/

/*Instruction 2

let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];


function birdsInWeek(birdsPerDay, week) {
    let numberOfBirds;
    let totalBirds;
    for (let i=0; i<week; i++) {
        //console.log("week" + i, "total" + week)
        totalBirds = 0;
        for (let j=i*7; j<(i*7+7); j++) {
            totalBirds += birdsPerDay[j];
            //console.log(j, birdsPerDay[j], totalBirds);
        }
    }
    numberOfBirds = totalBirds;
return numberOfBirds
}

console.log(birdsInWeek(birdsPerDay, 2));
// => 12
*/

/* OPTION 2: 
function birdsInWeek(birdsPerDay, week) {
    // return totalBirdCount(birdsPerDay.slice((week - 1) * 7, week * 7)); 
    const startDay = (week - 1) * 7;
    const endDay = startDay + 7; 
    let count = 0;
    for (let i = startDay; i < endDay; i++) {
      count += birdsPerDay[i];
    }
    return count;
  }
*/

/*Instruction 3

let birdsPerDay = [2, 5, 0, 7, 4, 1];

function fixBirdCountLog(birdsPerDay) {
    for (let i=0; i<birdsPerDay.length; i += 2) {
        //console.log(i, birdsPerDay[i])
        birdsPerDay [i] += 1
    }
    
    return birdsPerDay
}

console.log(fixBirdCountLog(birdsPerDay));
// => [3, 5, 1, 7, 5, 1]
*/
DONE!
