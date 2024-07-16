// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// const rl = require('readline-sync');

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     distancReach = mpg * fuelLeft;
//     if(distanceToPump <= distancReach) return true;
//     return false;
  
// };

// console.log(zeroFuel(50, 25, 2));

// cara 2
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => (fuelLeft * mpg >= distanceToPump);
// console.log(zeroFuel(50,2,25));


// cara 3
const zeroFuel = (___, _, __) => ___ <= _ * __ ;