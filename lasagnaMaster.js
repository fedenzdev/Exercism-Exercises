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
function quantities(items) {
    let sumNoodles = 0;
    let sumSauce = 0;
    for (let i=0; i<items.length; i++) {
        if (items[i]=== 'noodles') {
            sumNoodles +=50;
        } else if (items[i]=== 'sauce') {
            sumSauce +=0.2;
        }
    }
    return {
        noodles: sumNoodles,
        sauce: sumSauce,
        }
}
/*function addSecretIngredient(friendsList, myList) {
    let secretIngredientPlace = friendsList.length
    return myList.push(friendsList[secretIngredientPlace-1]);
} Error in test, i dont understand the reason yet */
function addSecretIngredient(friendList, myList) {
    myList.push(friendList[friendList.length - 1]);
   }

const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
  };

function scaleRecipe(recipe, portions) {
    const scaled = {};
    for (const key in recipe) {
      scaled[key] = recipe[key] * portions / 2;
    }
    return scaled;
   }
  
  console.log(scaleRecipe(recipe, 4));
  // =>
  // {
  //   noodles: 400,
  //   sauce: 1,
  //   mozzarella: 2,
  //   meat: 200,
  // };
  
  console.log(recipe);
  // =>
  // {
  //   noodles: 200,
  //   sauce: 0.5,
  //   mozzarella: 1,
  //   meat: 100,
  // };

