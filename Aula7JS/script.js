
let modal = document.querySelector(".lh-modal");

document.getElementById("botao").addEventListener("click", (e) => {

    let modal = document.querySelector(".lh-modal");
    modal.classList.toggle("d-none");
    
})

document.querySelector(".lh-modal a").addEventListener("click", (e) =>{

    e.preventDefault();
    modal.classList.toggle("d-none");
})

window.addEventListener("click", (e) => {
    
    if(e.target.class == modal){
        modal.classList.toggle("d-none")
    }
})