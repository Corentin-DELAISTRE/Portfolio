let liens = document.querySelectorAll("nav a")//Je récupère les liens de ma nav 
let adress = window.location.href.split("/")//Je recupère mon url et je la coupe en 3
let url = adress[3]//Je récupère le bout d'url qui change selon ma page (exemple: index.html)

liens.forEach(lien => {//Pour chaque lien de ma nav
    page = lien.href.split("/")//Je coupe l'adresse associé en 3
    pageName = page[3]//Je récupère le morceau d'adressse qui correspond à ma page (exemple: index.html)

    if(pageName === url){//Si le lien correspond à l'url de ma page actuelle
      lien.style.transform = "translateX(0)"//Alors mon lien est visible
    }else{//Sinon
      lien.addEventListener("mouseenter", () => {//Lorsque ma souris survole le lien
        lien.style.transform = "translateX(0)"//Le lien apparaît
      })
      lien.addEventListener("mouseleave", () => {//Lorsque ma souris ne survole plus le lien
        lien.style.transform = "translateX(-80%)"//Le lien disparaît
      })
    }
    if(url === "about.html" || url === "contact.html"){//Si je suis sur la page à propos où contact
      lien.style.backgroundColor = "#525252"//La couleur d'arrière plan de mon lien change
    }
});
