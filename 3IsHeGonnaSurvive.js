function hero(bullets, dragons){
if(bullets/2 >= dragons)return true;
return false;
}

console.log(hero(5,2));
console.log(hero(6,2));
console.log(hero(6,4));

// cara 2
function hero (bullets, dragons){
    return bullets/2 >= dragons ? true : false;
}