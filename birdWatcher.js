
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

//Instruction 2

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


