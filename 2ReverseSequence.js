n = 5;

const reverseSeq = n => {
    let nReverse = [];
    for(let i=n;i>0;i--){
    nReverse.push(i);
    }
    return nReverse;
};

console.log(reverseSeq(n));

// cara 2

const reverseSeq2 = n => {
    // return Array(n).fill().map((el, i)=>i+1).reverse();
    // return [...Array(n)].map((el,i)=>i+1).reverse();
    return [...Array(n)].map((el,index)=>n-index);
}

console.log(reverseSeq2(5))