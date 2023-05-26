


const product=[
    {
        id:0,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 1200000,
        Aimer: "<i id='Aimer0' class='fa-solid fa-heart' style='color: #010b1e;'></i>",
    },
    {
        id:1,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 15000,
        Aimer: "<i id='Aimer1' class='fa-solid fa-heart' style='color: #010b1e;'></i>",
        /*Aimer: "<i class='fa-regular fa-heart' style='color: #010b1e;'></i>",*/

    },
    {
        id:2,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 2300000,
        Aimer: "<i id='Aimer2' class='fa-solid fa-heart' style='color: #010b1e;'></i>",
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Head phones',
        price: 10000,
        Aimer: "<i id='Aimer3' class='fa-solid fa-heart' style='color: #010b1e;'></i>",
    },

    {
        id:4,
        image: 'https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/53184/1.jpg?4222',
        title: 'Astech Smart TV LED 55"',
        price: 178000,
        Aimer: "<i id='Aimer4' class='fa-solid fa-heart' style='color: #010b1e;'></i>",
    },
    {
        id:5,
        image: 'https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/755701/1.jpg?5033',
        title: 'SMART Home Cinéma',
        price: 90000,
        Aimer: "<i id='Aimer5' class='fa-solid fa-heart' style='color: #010b1e;'></i>",
    },
    {
        id:6,
        image: 'https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/05379/1.jpg?7427',
        title: 'Beko - RDSE450K20S',
        price: 345000,
        Aimer: "<i id='Aimer6' class='fa-solid fa-heart' style='color: #010b1e;'></i>",
    },
    {
        id:7,
        image: 'https://sn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/36/603911/1.jpg?8094',
        title: 'Philips Cafetière 7 Tasses',
        price: 45000,
        Aimer: "<i id='Aimer7' class='fa-solid fa-heart' style='color: #010b1e;'></i>",
    }

];

const categories = [...new Set (product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price,Aimer}=item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <p>${Aimer}</p>
                 <h2>${price.toLocaleString()}F CFA</h2>
                <div class='gpebtns'>` +
                    "<button id='bouton1' onclick='addtocart("+(i++)+")'>Ajouter au panier</button>"+
                    "<button id='bouton2' onclick='addtocart("+(i-1)+")'>+</button>"+
                `</div>
            </div>
        </div>`             
    )
}).join('')

// <div class='gpebtns'>+

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j=0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Votre panier est vide";
        document.getElementById('total').innerHTML =0+" F CFA";
        document.getElementById('total2').innerHTML =0+" F CFA";

    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var {image, title, price}= items;
            total=total+price;
            document.getElementById('total').innerHTML = total.toLocaleString()+" F CFA";
            document.getElementById('total2').innerHTML = total.toLocaleString()+" F CFA";

            return(
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}
                    <h2 style='font-size: 15px;'>${price.toLocaleString()}F CFA</h2>`+
                    "<i id='bordure' class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

let aimeCoeur = document.querySelector(".fa-heart");
let choix = true;//Pour une condition choix du code et de la couleur

aimeCoeur.addEventListener('click', () =>{
   
    if(choix == true){
        aimeCoeur.style.color = 'rgb(66, 133, 244)';
        choix= false;

        const section = document.getElementById('Aimer0'); // Récupère la section
        
        //const nouveauParagraphe = document.createElement('p'); // Crée un nouvel élément paragraphe
        //nouveauParagraphe.id = 'OK0'; // Définit l'identifiant du paragraphe
        //nouveauParagraphe.textContent = "J'aime!"; // Ajoute du texte au paragraphe
        //section.appendChild(nouveauParagraphe); // Ajoute le paragraphe à la section
        
        section.innerHTML='<p id="OK0">J\'aime</p>';//Waoooo! Une ligne pour le prix de 4!

        //---------------------------------------------------------------------------------------------
        //Supprimer code je n'aime pas 02 methodes :
        //const paragrapheASupprimer = document.querySelector('.fa-thumbs-down'); // Methode 2 Récupère le paragraphe à supprimer
        const paragrapheASupprimer = document.getElementById("KO0"); // Methode 1 :Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page
        //---------------------------------------------------------------------------------------------

    }else {
        aimeCoeur.style.color = "red";
        choix = true;
        const section = document.getElementById('Aimer0'); // Récupère la section
        // Créer un nouvel élément <p>
        var monParagraphe = document.createElement("i");
        // Ajouter un ID à l'élément
        monParagraphe.id = "KO0";
        // Ajouter une classe à l'élément
        monParagraphe.className = "fa-solid fa-thumbs-down";
        monParagraphe.textContent = " Berk...!"; // Ajoute du texte au paragraphe
        // Insérer le paragraphe dans le corps (body) de la page
        section.appendChild(monParagraphe);
        //Supprimer code j'aime methode 2---------------------------------------------------------------
        const paragrapheASupprimer = document.getElementById('OK0'); // Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page
        //----------------------------------------------------------------------------------------------
    }
 
    /*style='color: #010b1e;';*/
    /*for (let i = 0; i < product.length; i++) {
        console.log(product[i].Aimer);
 
      }*/
 
});

let trouver1 = document.getElementById("Aimer1");
let choix1 = true
trouver1.addEventListener('click', () =>{
   
    if(choix1 == true){
        trouver1.style.color = "rgb(66, 133, 244)";
        choix1= false;

        const section = document.getElementById('Aimer1'); // Récupère la section
        const nouveauParagraphe = document.createElement('p'); // Crée un nouvel élément paragraphe
        nouveauParagraphe.id = 'OK1'; // Définit l'identifiant du paragraphe
        nouveauParagraphe.textContent = "J'aime!"; // Ajoute du texte au paragraphe
        section.appendChild(nouveauParagraphe); // Ajoute le paragraphe à la section
        const paragrapheASupprimer = document.getElementById("KO1"); // Methode 1 :Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page

    }else {
        trouver1.style.color = "red";
        choix1 = true;

        const section = document.getElementById('Aimer1'); // Récupère la section
        var monParagraphe = document.createElement("i");
        monParagraphe.id = "KO1";
        monParagraphe.className = "fa-solid fa-thumbs-down";
        monParagraphe.textContent = " Berk...!"; // Ajoute du texte au paragraphe
        section.appendChild(monParagraphe);
        const paragrapheASupprimer = document.getElementById('OK1'); // Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page

    }
});

let trouver2 = document.getElementById("Aimer2");
let choix2 = true
trouver2.addEventListener('click', () =>{
   
    if(choix2 == true){
        trouver2.style.color = "rgb(66, 133, 244)";
        choix2= false;

        const section = document.getElementById('Aimer2'); // Récupère la section
        const nouveauParagraphe = document.createElement('p'); // Crée un nouvel élément paragraphe
        nouveauParagraphe.id = 'OK2'; // Définit l'identifiant du paragraphe
        nouveauParagraphe.textContent = "J'aime!"; // Ajoute du texte au paragraphe
        section.appendChild(nouveauParagraphe); // Ajoute le paragraphe à la section
        const paragrapheASupprimer = document.getElementById("KO2"); // Methode 1 :Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page

    }else {
        trouver2.style.color = "red";
        choix2 = true;

        const section = document.getElementById('Aimer2'); // Récupère la section
        var monParagraphe = document.createElement("i");
        monParagraphe.id = "KO2";
        monParagraphe.className = "fa-solid fa-thumbs-down";
        monParagraphe.textContent = " Berk...!"; // Ajoute du texte au paragraphe
        section.appendChild(monParagraphe);
        const paragrapheASupprimer = document.getElementById('OK2'); // Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page
    }
});

let trouver3 = document.getElementById("Aimer3");
let choix3 = true
trouver3.addEventListener('click', () =>{
   
    if(choix3 == true){
        trouver3.style.color = "rgb(66, 133, 244)";
        choix3= false;

        const section = document.getElementById('Aimer3'); // Récupère la section
        const nouveauParagraphe = document.createElement('p'); // Crée un nouvel élément paragraphe
        nouveauParagraphe.id = 'OK3'; // Définit l'identifiant du paragraphe
        nouveauParagraphe.textContent = "J'aime!"; // Ajoute du texte au paragraphe
        section.appendChild(nouveauParagraphe); // Ajoute le paragraphe à la section
        const paragrapheASupprimer = document.getElementById("KO3"); // Methode 1 :Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page

    }else {
        trouver3.style.color = "red";
        choix3 = true;

        const section = document.getElementById('Aimer3'); // Récupère la section
        var monParagraphe = document.createElement("i");
        monParagraphe.id = "KO3";
        monParagraphe.className = "fa-solid fa-thumbs-down";
        monParagraphe.textContent = " Berk...!"; // Ajoute du texte au paragraphe
        section.appendChild(monParagraphe);
        const paragrapheASupprimer = document.getElementById('OK3'); // Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page

    }
});

let trouver4 = document.getElementById("Aimer4");
let choix4 = true
trouver4.addEventListener('click', () =>{
   
    if(choix4 == true){
        trouver4.style.color = "rgb(66, 133, 244)";
        choix4= false;

        const section = document.getElementById('Aimer4'); // Récupère la section
        const nouveauParagraphe = document.createElement('p'); // Crée un nouvel élément paragraphe
        nouveauParagraphe.id = 'OK4'; // Définit l'identifiant du paragraphe
        nouveauParagraphe.textContent = "J'aime!"; // Ajoute du texte au paragraphe
        section.appendChild(nouveauParagraphe); // Ajoute le paragraphe à la section
        const paragrapheASupprimer = document.getElementById("KO4"); // Methode 1 :Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page

    }else {
        trouver4.style.color = "red";
        choix4 = true;

        const section = document.getElementById('Aimer4'); // Récupère la section
        var monParagraphe = document.createElement("i");
        monParagraphe.id = "KO4";
        monParagraphe.className = "fa-solid fa-thumbs-down";
        monParagraphe.textContent = " Berk...!"; // Ajoute du texte au paragraphe
        section.appendChild(monParagraphe);
        const paragrapheASupprimer = document.getElementById('OK4'); // Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page
        
    }
});

let trouver5 = document.getElementById("Aimer5");
let choix5 = true
trouver5.addEventListener('click', () =>{
   
    if(choix5 == true){
        trouver5.style.color = "rgb(66, 133, 244)";
        choix5= false;

        const section = document.getElementById('Aimer5'); // Récupère la section
        const nouveauParagraphe = document.createElement('p'); // Crée un nouvel élément paragraphe
        nouveauParagraphe.id = 'OK5'; // Définit l'identifiant du paragraphe
        nouveauParagraphe.textContent = "J'aime!"; // Ajoute du texte au paragraphe
        section.appendChild(nouveauParagraphe); // Ajoute le paragraphe à la section
        const paragrapheASupprimer = document.getElementById("KO5"); // Methode 1 :Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page

    }else {
        trouver5.style.color = "red";
        choix5 = true;

        const section = document.getElementById('Aimer5'); // Récupère la section
        var monParagraphe = document.createElement("i");
        monParagraphe.id = "KO5";
        monParagraphe.className = "fa-solid fa-thumbs-down";
        monParagraphe.textContent = " Berk...!"; // Ajoute du texte au paragraphe
        section.appendChild(monParagraphe);
        const paragrapheASupprimer = document.getElementById('OK5'); // Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page
        
    }
});

let trouver6 = document.getElementById("Aimer6");
let choix6 = true
trouver6.addEventListener('click', () =>{
   
    if(choix6 == true){
        trouver6.style.color = "rgb(66, 133, 244)";
        choix6= false;

        const section = document.getElementById('Aimer6'); // Récupère la section
        const nouveauParagraphe = document.createElement('p'); // Crée un nouvel élément paragraphe
        nouveauParagraphe.id = 'OK6'; // Définit l'identifiant du paragraphe
        nouveauParagraphe.textContent = "J'aime!"; // Ajoute du texte au paragraphe
        section.appendChild(nouveauParagraphe); // Ajoute le paragraphe à la section
        const paragrapheASupprimer = document.getElementById("KO6"); // Methode 1 :Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page

    }else {
        trouver6.style.color = "red";
        choix6 = true;

        const section = document.getElementById('Aimer6'); // Récupère la section
        var monParagraphe = document.createElement("i");
        monParagraphe.id = "KO6";
        monParagraphe.className = "fa-solid fa-thumbs-down";
        monParagraphe.textContent = " Berk...!"; // Ajoute du texte au paragraphe
        section.appendChild(monParagraphe);
        const paragrapheASupprimer = document.getElementById('OK6'); // Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page
        
    }
});

let trouver7 = document.getElementById("Aimer7");
let choix7 = true
trouver7.addEventListener('click', () =>{
   
    if(choix7 == true){
        trouver7.style.color = "rgb(66, 133, 244)";
        choix7= false;
        
        const section = document.getElementById('Aimer7'); // Récupère la section
        const nouveauParagraphe = document.createElement('p'); // Crée un nouvel élément paragraphe
        nouveauParagraphe.id = 'OK7'; // Définit l'identifiant du paragraphe
        nouveauParagraphe.textContent = "J'aime!"; // Ajoute du texte au paragraphe
        section.appendChild(nouveauParagraphe); // Ajoute le paragraphe à la section
        const paragrapheASupprimer = document.getElementById("KO7"); // Methode 1 :Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page


    }else {
        trouver7.style.color = "red";
        choix7 = true;

        const section = document.getElementById('Aimer7'); // Récupère la section
        var monParagraphe = document.createElement("i");
        monParagraphe.id = "KO7";
        monParagraphe.className = "fa-solid fa-thumbs-down";
        monParagraphe.textContent = " Berk...!"; // Ajoute du texte au paragraphe
        section.appendChild(monParagraphe);
        const paragrapheASupprimer = document.getElementById('OK7'); // Récupère le paragraphe à supprimer
        paragrapheASupprimer.remove(); // Supprime le paragraphe de la page
        
    }
});
