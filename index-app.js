let swiper = new Swiper(".mySwiper", {  //SCROLL TRIGGER PAGE D'ACCUEIL
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 0,
    mousewheel: true,
    loop:true,
    speed:1000,
  });

let scrollSwip = document.querySelector(".swiper-wrapper")//Je vais chercher mon slider
let nomPrenom = document.querySelector(".np-bot-index")//Je vais chercher ma div "nom-prenom" cachée en bas à gauchede ma page
let defautSlide = document.querySelector(".defaut-slide")//Je vais recuperer ma slide defaut => celle qui indique de scroller au debut pour naviguer

scrollSwip.addEventListener("wheel",replace)
scrollSwip.addEventListener("touchmove",replace)

function replace(){
  setTimeout(()=>{//J'attends avant d'executer ma fonction
    if(window.innerWidth > 1151){
      nomPrenom.style.transform = "translateX(0)"
    }else if(window.innerWidth <= 1151){
      nomPrenom.style.transform = "translateY(0)"
      nomPrenom.style.transform = "translateX(-50%)"
    }
    //ma div "nom-prenom" en bas à gauche apparaît
    //Le contenu de ma slide "defaut" devient celle correspondant à mon CV. Cela évite d'enlever une slide et d'avoir un décalage non controlé dans le slider
    defautSlide.innerHTML = `<div class="box cv-box flexwrap spacebetween box-shadow pad-box">
                                <div class="text-box w60 flexwrap align-center">
                                    <h3>//Curriculum Vitae//</h3>
                                    <p>
                                        À la recherche d'informations condensées et précises ? Téléchargez simplement mon CV pour découvrir un résumé complet de mon parcours professionnel, compétences clés et réalisations. C'est le moyen idéal d'obtenir un aperçu rapide de ce que je peux offrir.
                                    </p>
                                    <a href="" title="Télécharger le CV" class="btn">Télécharger le CV en PDF</a>
                                </div>
                                <div class="img-box cv-img w35">
                                    <img src="./assets/CV_box.jpg" class="responsive-img one-img" alt="Image d'un bureau en bois avec un ordinateur portable ouvert sur un document. A coté on peut voir différents équipement de bureau, un smartphone ainsi que quelque plantes">
                                </div>
                            </div>`
  },1000)//Correspond au temps d'attente avant d'executer la fonction soit 1 secondes => le temps que met le slider pour changer de slide
}

let advice = document.querySelector(".scrollez")
let icon = document.querySelector(".mouse-icon")

if(window.innerWidth <= 1050){
  advice.innerText = "Swiper pour naviguer"
  icon.innerHTML = `<img src="./assets/touch_icon.png" alt="icône de main fermée avec l'index tendu"></img>`
}