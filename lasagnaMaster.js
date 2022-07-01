function cookingStatus(remainingTime) {
    if (remainingTime > 0) {
        return 'Not done, please wait.'
    } else if (remainingTime === 0)  {
        return 'Lasagna is done.'  
    } return 'You forgot to set the timer.'
}

function preparationTime(layers, avgTime = 2) {
    let time = 0;
    for (let i=0; i<layers.length; i++) {
        time += avgTime;
    } 
    return time
}

function quantities() {
    
    return {
        noodles: 50,
        sauce: 0.2,
        }
}
quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']);
// => { noodles: 100, sauce: 0.4 }