
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

        lista.forEach((usuario)=> {
            // console.log(usuario.nomeUsuario)
            if(inputUserValue == usuario.nomeUsuario && inputPassValue == usuario.senhaUsuario){
                console.log("VALIDADO!");
                h1Titulo.innerHTML = "Bem vindo : " + usuario.nomeUsuario;
            }else{
                console.log("NÃO VALIDOU...");
                h1Titulo.innerHTML = "";
            }

        })
        

    }

});