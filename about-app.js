let elements = document.querySelectorAll(".element")//Je vais chercher toutes mes slides
let bullets = document.querySelectorAll(".bullet")//Je vais chercher tous les éléments de ma pagination

function ouvreLaSlide(element){
    let openSlide = document.querySelector(".open")//Je vais chercher ma slide ouverte
        let slideEnfant = openSlide.children[0]//Je declare une variable pour le contenu de ma slide 
        if(openSlide === element){//Si je clique sur la slide déjà ouverte
            return// Je ne fais rien, je sors de ma fonction
        }else if(slideEnfant){//sinon si j'ai du contenu
            slideEnfant.classList.remove("opac-full")//Je fais disparaitre le contenu de ma slide
        }
        setTimeout(()=>{//J'attends que mon contenu disparaisse
            openSlide.classList.remove("open")//Je ferme la slide ouverte
            element.classList.add("open")//J'ouvre la slide sur laquelle j'ai cliqué
            let enfant = element.children[0]//Je déclare une variable pour le contenu de ma slide sur laquelle j'ai cliqué
            if(enfant){//Si j'ai du contenu
                setTimeout(()=>{//J'attends l'ouverture complète de ma slide
                    enfant.classList.add("opac-full")//Ensuite j'affiche son contenu
                },700) 
            }
        },300)
       
}

function activePagi(x){
    let activeBullet = document.querySelector(".active-bullet")//Je déclare une variable pour l'élément de pagination qui est actif
    activeBullet.classList.remove("active-bullet")//Je le rend inactif
    bullets[x].classList.add("active-bullet")//L'élément de ma pagination qui correspond à ma slide devient actif
}

elements.forEach((element,posel)=>{// Pour chaque slide
    element.addEventListener("click",()=>{//J'ecoute le clic et j'applique les fonctions suivantes
        ouvreLaSlide(element)
        activePagi(posel)
    })
})

bullets.forEach((bullet,posbul)=>{
    bullet.addEventListener("click",()=>{
        ouvreLaSlide(elements[posbul])
        activePagi(posbul)
    })
})