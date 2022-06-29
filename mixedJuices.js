/*INSTRUCTION 1 */
function timeToMixJuice(name) {
    switch (name) {
        case 'Pure Strawberry Joy':
            return 0.5
        break;
        case 'Energizer':
            return 1.5
        break;
        case 'Green Garden':
            return 1.5
        break;
        case 'Tropical Island':
            return 3
        break;
        case 'All or Nothing':
            return 5
        break;
        default:
            return 2.5
    }
}
/*
console.log(timeToMixJuice('Tropical Island')); // => 3
console.log(timeToMixJuice('Berries & Lime')); // => 2.5
*/ 

/* INSTRUCTION 2
function limesToCut(wedgesNeeded, limes) {
    const wedges = {
      'small': 6,
      'medium': 8,
      'large': 10
    }
    let wedgesCut = 0;
    let i = 0;
    while (wedgesCut < wedgesNeeded) {
      if(limes[i]) {
        wedgesCut += wedges[limes[i]]; // wedges[small] = 6
        i++;
      } else {
        return i;
      }
    }
    return i;
  } */

/* INSTRUCTION 3 
Li Mei always works until 3pm. Then her employee Dmitry takes over. There are often drinks that have been 
ordered but are not prepared yet when Li Mei's shift ends. Dmitry will then prepare the remaining juices.

To make the hand-over easier, implement a function remainingOrders which takes the number of minutes left in 
Li Mei's shift and an array of juices that have been ordered but not prepared yet. The function should return 
the orders that Li Mei cannot start preparing before the end of her workday.

The time left in the shift will always be greater than 0. Furthermore, the orders are prepared in the order in 
which they appear in the array. If Li Mei starts to mix a certain juice, she will always finish it even if 
she has to work a bit longer. If there are no remaining orders left that Dmitry needs to take care of, an 
empty array should be returned. */

function remainingOrders(timeLeft, orders) {
    while (timeLeft > 0) {
      timeLeft -= timeToMixJuice(orders[0]);
      orders.shift();
    }
    return orders;
  }

console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']));
// => ['Green Garden']