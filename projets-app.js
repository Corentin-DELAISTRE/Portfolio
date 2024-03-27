fetch("./assets/projets.json")
.then(res=>{
    return res.json()    
})
.then(rep=>{
    fillSlide(rep)
    allSwipes(rep)
})
function allSwipes(){
   let swipperProjets = new Swiper(".swiper-projets", { //SLIDER DE PROJET
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 0,
    mousewheel: true,
    loop:false,
    speed:1000,
})
let swiperAuto = new Swiper(".swiper-auto", { //CAROUSEL AUTO DANS LA SLIDE
    direction: "horizontal",
    slidesPerView: 2.5,
    spaceBetween: 10,
    initialSlide: 0,
    loop:true,
    speed:10000,
    autoplay:{
        delay:0,
        disableOnInteraction: false,
    }
}); 
}




function fillSlide(datas){

    let slide = document.querySelector(".wrapper-projets")

   // let badgesDiv = document.createElement("div")
   let badgesDiv =''

   // badgesDiv.classList.add("badges", "flexwrap", "g16")

    datas.forEach(data => {
        badgesDiv=``
        data.badges.forEach(badge => {
            badgesDiv += `<div class="badge badge-${badge}"><p>${badge}</p></div>`
        })
        slide.innerHTML += `<div class="swiper-slide">
                                <div class="projet-slide pad-proj flexwrap g24">
                                    <div class="titre-projet flexwrap spacebetween align-center w100">
                                        <h3>//${data.titre}//</h3> <!-- TITRE ET BADGES -->
                                        <div class="badges flexwrap g16">
                                            ${badgesDiv}
                                        </div>
                                    </div>
                                    <div class="proj-infos flexwrap spacebetween"> <!-- INFOS TEXTUELLES -->
                                        <div class="infos-left w48 flexwrap g24">
                                            <div class="sujet flexwrap g10 pad-proj black-box">
                                                <h4>Le contexte</h4>
                                                <p>${data.contDesc}</p>
                                            </div>
                                            <div class="flexwrap justcenter black-box pad-proj w100">
                                                <h4 class="textcenter">Visiter le site</h4>
                                                <a href="">${data.adresse}</a>
                                            </div>
                                        </div>
                                        <div class="infos-right w48 flexwrap g24 black-box pad-proj">
                                            <h4>Les objectifs</h4>
                                            <p>${data.objDesc.obj1}</p>
                                            <p>${data.objDesc.obj2}</p>
                                            <p>${data.objDesc.obj3}</p>
                                            <p>${data.objDesc.obj4}</p>
                                        </div>
                                    </div>
                                    <div class="swiper swiper-auto w100"> <!-- CAROUSEL AUTO -->
                                        <!-- Additional required wrapper -->
                                        <div class="swiper-wrapper swiper-wrapper-linear">
                                            <!-- Slides -->
                                            <div class="swiper-slide"><img class="responsive-img" src="./assets/Projets-img/${data.photos.img1}" alt=""></div>
                                            <div class="swiper-slide"><img class="responsive-img" src="./assets/Projets-img/${data.photos.img2}" alt=""></div>
                                            <div class="swiper-slide"><img class="responsive-img" src="./assets/Projets-img/${data.photos.img3}" alt=""></div>
                                            <div class="swiper-slide"><img class="responsive-img" src="./assets/Projets-img/${data.photos.img4}" alt=""></div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>`
                                });
                            }