let burger = document.getElementById("burger")
let nav = document.querySelector(".burger-nav")

burger.addEventListener("click",()=>{
    if(nav.classList.contains("open-burg") === false){
        nav.classList.add("open-burg")
        burger.innerHTML = `<img class="responsive-img" src="./assets/close-cross.png" alt="Icone pour fermer le menu depliant">`
    }else{
        nav.classList.remove("open-burg")
        burger.innerHTML = `<img class="responsive-img" src="./assets/burger-bar.png" alt="Icone pour ouvrir le menu depliant">`
    }
})