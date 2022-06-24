
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

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

function birdsInWeek(birdsPerDay, week) {
    for (let i=0; i<week; i++) {
        console.log(i, week)
        for (let j=0; j<7; j++) {
            console.log(day(j))
        }
    }
return birdsPerDay
}

console.log(birdsInWeek(birdsPerDay, 2));
// => 12


