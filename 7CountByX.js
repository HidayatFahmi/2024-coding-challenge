/////// cara 1

// const multiply = 3;
// const howMany = 10;

// function countBy(x, n) {
//   let z = [];
//   for(let i=1;i<=n;i++){
//     z.push(i*x);
//   }

//   return z;
// }

// console.log(countBy(multiply, howMany));

//////// Cara 2

function countBy(x, n) {
  return [...Array(n)].map((el,i)=> (i+1)*x);
}

console.log(countBy(3,10));