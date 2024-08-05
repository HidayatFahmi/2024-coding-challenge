const dna = "DTNA gU";

// ================= cara 1
// function DNAtoRNA(dna) {
//   const arrayDna = dna.toUpperCase().split("");
//   let arrayRna = [];

//   const rna = arrayDna.map(rnaX => {
//     if(rnaX == "T") return arrayRna.push("U");
//     return arrayRna.push(rnaX);
//   })
//   return arrayRna.join("").trim();
// }

// console.log(DNAtoRNA(dna));

// =============== cara 2

// function DNAtoRNA(dna){
//     let rna = "";

//     for(let i=0;i<dna.length;i++){
//         if(dna[i] == "T"){
//             rna += "U"
//         }else{
//             rna += dna[i];
//         }
//     }
//     return rna
// }

// console.log(DNAtoRNA(dna))

// ==================== cara 3

// function DNAtoRNA(dna){
//     let rna = "";

//     for(let i=0;i< dna.length;i++){
//         rna += (dna[i] == "T") ? "U" : dna[i];
//     }
//     return rna;
// }

// console.log(DNAtoRNA(dna));

// ======================= cara 4
// function DNAtoRNA(dna){
//     let rna="";
//     dna.split("").map((dnax)=>{
//         rna += (dnax == "T") ? "U" : dnax;
//     })
//     return rna;
// }

// console.log(DNAtoRNA(dna));

// ======================= cara 5
// const DNAtoRNA = (dna) => dna.split("").map(rnax => rnax == "T" ? "U" : rnax).join("");

// console.log(DNAtoRNA(dna));

// ======================= cara 6
// const DNAtoRNA = (dna) => dna.replace(/T/g,"U");
// console.log(DNAtoRNA(dna));

// ======================= cara 7
// const DNAtoRNA = (dna) => dna.replaceAll("T","U");
// console.log(DNAtoRNA(dna));

// ================= cara 8
const DNAtoRNA = (dna) => dna.split("T").join("U");
console.log(DNAtoRNA(dna));