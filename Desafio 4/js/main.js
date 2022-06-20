const modal = document.querySelector(".modal");
const esqueceuSenha = document.querySelector(".linkSenha")

esqueceuSenha.addEventListener("click", function(){
    modal.style.display = "block"
})

document.addEventListener("keydown", function(event){
    const isEscKey = event.key === "Escape";

    if(isEscKey){
        modal.style.display = "none"
    }
})