// function alteraBanner1() {

//     let nr = Math.round(Math.random() * 3);

//     let caminho = `img/banner-lateral-${nr}.png`;

//     const img1 = document.querySelector(".l-e > img");
//     img1.src = caminho;

// }

// alteraBanner1();

// function alteraBanner2() {

//     let nr = Math.round(Math.random() * 3);

//     let caminho = `img/banner-lateral-${nr}.png`;

//     const img2 = document.querySelector(".central > img");
//     img2.src = caminho;

// }

// alteraBanner2();

// function alteraBanner3() {

//     let nr = Math.round(Math.random() * 3);

//     let caminho = `img/banner-lateral-${nr}.png`;

//     const img3 = document.querySelector(".l-d > img");
//     img3.src = caminho;

// }

// alteraBanner3();

// function alteraBanner() {

//     let nr = Math.ceil(Math.random() * 3);

//     const img1 = document.querySelector(".l-e > img");
//     const img2 = document.querySelector(".l-d > img");

//     let caminho = `img/banner-lateral-${nr}.png`;
//     img1.src = caminho;

//     nr = Math.ceil(Math.random() * 3);
//     caminho = `img/banner-lateral-${nr}.png`;
//     img2.src = caminho;

//     setTimeout(alteraBanner, 1000);

// }

// const botao = document.querySelector(".central button");

// botao.addEventListener("click", ()=>{
//     const imgLampada = document.querySelector(".central img");


//     if(botao.textContent == "LIGAR"){
//         imgLampada.src = "img/pic_bulbon.gif"
//         botao.textContent = "DESLIGAR";
//     }else{
//         imgLampada.src = "img/pic_bulboff.gif"
//         botao.textContent = "LIGAR";
//     }
// })

// alteraBanner();

// function ligaDesliga() {

//     const imgLampada = document.querySelector(".central img");


//     if(botao.textContent == "LIGAR"){
//         imgLampada.src = "img/pic_bulbon.gif"
//         botao.textContent = "DESLIGAR";
//     }else{
//         imgLampada.src = "img/pic_bulboff.gif"
//         botao.textContent = "LIGAR";
//     }

// }

const inputUser = document.querySelector("input[name='nmUser']");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color:#ff0000;");
});

inputUser.addEventListener("keyup", ()=>{
    if(inputUser.value.length < 8){
    inputUser.setAttribute("style", "outline-color:#ff0000;");
    }else{
    inputUser.setAttribute("style", "outline-color:#dddddd;");
    }
});