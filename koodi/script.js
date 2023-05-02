//Lisätään napin kuuntelijafunktio
document.querySelector("button").addEventListener("click", addNote);

//Haetaan dokumentin elementit

let article = document.querySelector("article");
let note = document.getElementById("viesti");
let checkbox = document.getElementById("important");
let name = document.getElementById("fname");

//lisätään sen hetkinen aika funktioon
const currentDate = new Date();
const dateTimeString = currentDate.toLocaleString();


//luodaan funktio addNote
function addNote(){

    let h3 = document.createElement("h3");
    let x = document.createElement("x");
    let p = document.createElement("p");
    

    p.textContent = viesti.value;
    x.textContent = fname.value;
    dateTimeString.textContent = viesti.value;
    
    //tarkistetaan onko checkbox valittu vai ei

    if(checkbox.checked){
        h3.classList.add("important");
        p.classList.add("important");
        x.classList.add("important");  
    }

    //kaikki elementit articlen sisälle
    article.append(h3,x,p,dateTimeString,document.createElement("hr"));
}