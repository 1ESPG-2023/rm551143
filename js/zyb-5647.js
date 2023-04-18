// getElementById()


// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent)   
// }

// console.log(liElement.length)

//declaração de arrays
let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
//espalhar array com spread [...]
let nr3 = [...nr1,...nr2];

console.log(`Array-1 ${nr1}`);
console.log(`Array-2 ${nr2}`);
console.log(`Array-3 ${nr3}`);

// //listand um array tecnica especial

// // nr3.forEach((itemDoArray)=>{
// //     console.log(`Array-3 sendo listado ${itemDoArray}`);
// // })
// //listando array com map
nr3.map((numero, key)=>{
    console.log(`${(key+1)} - itens do array - ${numero}`);

})

//convertendo htmlcollection em array de forma indireta
const liElementHtml = document.getElementsByTagName("li");
const liElementArray = [...liElementHtml];

liElementArray.map((item,key)=>{

    console.log(`${key+1} - ${item.textContent}`)

})