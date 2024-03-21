let destinacija = document.getElementById("lista-destinacija");
console.log(destinacija);

let naslov = document.getElementsByClassName("title");
console.log(naslov);

let element = document.getElementsByTagName("li");
console.log(element);


let wrap = document.querySelector("#wrapper");
console.log(wrap);

let nekeDestinacije = document.querySelectorAll(".naziv");
console.log(nekeDestinacije);  

let listaDestinacija=document.querySelector("#lista-destinacija");
console.log("Roditelj ovog cvora je",listaDestinacija.parentNode);

let listaDestinacija2=document.querySelector("#lista-destinacija");
console.log("Deca ovog cvora su",listaDestinacija2.children);

let listaDestinacija3=document.querySelector("#lista-destinacija");
console.log("BRAT ovog cvora su",listaDestinacija3.nextElementSibling);

let listaDestinacija4=document.querySelector("#lista-destinacija");
console.log("BRAT ovog cvora su",listaDestinacija4.previousElementSibling);

let banner = document.querySelector("#page-banner");
console.log("baner node ime je:" ,banner.nodeName);

let destinacijFrancuska = document.querySelector(".naziv");
destinacijFrancuska.textContent = "Beograd";

var dugmici = document.querySelectorAll(".obrisi");
console.log(dugmici);

Array.from (dugmici).forEach(function(dugme) {
    
    dugme.addEventListener("click", function(e){
        const li = e.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
         } )   
}
)
