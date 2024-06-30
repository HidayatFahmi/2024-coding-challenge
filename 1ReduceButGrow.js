
function grow(x){
    let result = x[0];
    for(let i=1;i<x.length;i++){
        result *= x[i];
    }
    return result;
}

console.log(grow([2,2,2,2,2,2]));

// cara 2
function growi(x){
    const result = x.reduce((a,b) => a * b, 1);
    return result;
}

console.log(growi([1,2,3,4]));