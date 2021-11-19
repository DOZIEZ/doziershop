const Ouvrire= document .querySelector("ul");


const Menu= document .querySelector("#menu");
const Fermer= document .querySelector("div.fermer");

const Promo=document.querySelector("div.promo");

Menu.addEventListener("click",()=>{

        
        Promo.classList.toggle("mo");
        Ouvrire.style.marginLeft= 0 + "px";   
 })
 

 Fermer.addEventListener("click",()=>{

    Ouvrire.style.marginLeft= -290 +"px";
    Promo.classList.toggle("mo");
});


 
