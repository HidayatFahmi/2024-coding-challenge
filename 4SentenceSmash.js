const words = ["Hallo", "Fahmi", "Hidayat", "Apa", "Kabar"]
const words2 = ["Hallo", "Fahmi", "Hidayat", "Apa", "Kabar"]

// function smash (words) {
//    return words.join(" ");
// };

// console.log(smash(words));

// cara 2 
// const smash = (words) =>  words.join(" ");
// console.log(smash(words));

// cara 3
const smash = (words) => {
    let result = '';
    for(let a=0;a<words.length;a++){
        result += words[a];
        if(a != words.length) result+= " ";
    }
    return result;
}

console.log(smash(words));