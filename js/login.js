
const usuario1 = {
    nomeUsuario:"Pedros",
    senhaUsuario:"12345",
}

const usuario2 = {
    nomeUsuario:"Anaa",
    senhaUsuario:"67890",
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));
// localStorage.setItem("user2", usuario2)

addEventListener("click",(evento)=>{
    // console.log(evento.target.id == "btnSubmit");
    evento.preventDefault();

    if(evento.target.id == "btnSubmit"){
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value;
        let inputUserValue = document.querySelector("#idUser").value;
        let inputPassValue = document.querySelector("#idPass").value;

        const h1Titulo = document.querySelector("#titulo");

        let lista = JSON.parse(localStorage.getItem("listaUser"));

        let userValidado = {};

        try{
            lista.forEach((usuario)=> {
                //VALIDAÇÃO
                if(inputUserValue == usuario.nomeUsuario && inputPassValue == usuario.senhaUsuario){
                    userValidado = usuario;
                    throw "VALIDADO";
                }
            });

            throw "NÃO VALIDADO";


        }catch(msg){
            if(msg == "VALIDADO"){
                h1Titulo.innerHTML = "<span><strong>login validado com sucesso!</strong></span>";
                h1Titulo.setAttribute("style","color:#00ff00")

                userValidado["token"] = 


                localStorage.setItem("userValidado", JSON.stringify(userValidado));
                // console.log("VALIDADO");
                // direcionando o usuario para a pagina de sucesso
                window.location.href = "../sucesso.html";

            }else{
                h1Titulo.innerHTML = "<span><strong>login ou senha inválidos</strong></span>";
                h1Titulo.setAttribute("style","color:#ff0000")
                // console.log("NÃO VALIDADO");
                window.location.href = "../erro.html"
            }
        }       
    }
});

try{
    const userBemVindo = document.querySelector("#userWelcome");
    userBemVindo.innerHTML = JSON.parse(localStorage.getItem("userValidado"))
    userBemVindo.innerHTML = usuario.nomeUsuario;

}catch(erro){

    if(userBemVindo != null){
        userBemVindo.innerHTML = JSON.parse(localStorage.getItem("userValidado")).nomeUsuario;
    }

}
