function hasTargetSum(array, target) {
  // Write your algorithm here
  for (i = 0; i < array.length; i++) {
    const secondOperand = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === secondOperand) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

*/
//O(log n)
/* 
  Add your pseudocode here
*/
//loop through the each elemen
//loop throught the rest of the elements
//if elemets of an array sum up to  the target return true
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
