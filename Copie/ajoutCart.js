


const product=[
    {
        id:0,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 1200000,
        Aimer: "<i class='fa-solid fa-heart' style='color: #010b1e;'></i>",
    },
    {
        id:1,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 60000,
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
        title: 'Astech Téléviseur Smart TV LED 55"',
        price: 178000,
        Aimer: "<i id='Aimer4' class='fa-solid fa-heart' style='color: #010b1e;'></i>",
    },
    {
        id:5,
        image: 'https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/755701/1.jpg?5033',
        title: 'SMART TECHNOLOGY Home Cinéma',
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
        title: 'Philips Cafetière Daily Mini Noir 600 W - 0.6 litres - 7 Tasses - Noir',
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
        <h2>${price.toLocaleString()}F CFA</h2>` +
        "<button id='bouton1' onclick='addtocart("+(i++)+")'>Ajouter au panier</button>"+
        "<button id='bouton2' onclick='addtocart("+(i-1)+")'>+</button>"+
        `</div>
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
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML =0+" F CFA";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var {image, title, price}= items;
            total=total+price;
            document.getElementById('total').innerHTML = total.toLocaleString()+" F CFA";

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
let choix = true;

aimeCoeur.addEventListener('click', () =>{
   
    if(choix == true){
        aimeCoeur.style.color = "blue";
        choix= false;
    }else {
        aimeCoeur.style.color = "red";
        choix = true;
        console.log('fa-heart')
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
        trouver1.style.color = "blue";
        choix1= false;
    }else {
        trouver1.style.color = "red";
        choix1 = true;
    }
});

let trouver2 = document.getElementById("Aimer2");
let choix2 = true
trouver2.addEventListener('click', () =>{
   
    if(choix2 == true){
        trouver2.style.color = "blue";
        choix2= false;
    }else {
        trouver2.style.color = "red";
        choix2 = true;
    }
});

let trouver3 = document.getElementById("Aimer3");
let choix3 = true
trouver3.addEventListener('click', () =>{
   
    if(choix3 == true){
        trouver3.style.color = "blue";
        choix3= false;
    }else {
        trouver3.style.color = "red";
        choix3 = true;
    }
});

let trouver4 = document.getElementById("Aimer4");
let choix4 = true
trouver4.addEventListener('click', () =>{
   
    if(choix4 == true){
        trouver4.style.color = "blue";
        choix4= false;
    }else {
        trouver4.style.color = "red";
        choix4 = true;
    }
});

let trouver5 = document.getElementById("Aimer5");
let choix5 = true
trouver5.addEventListener('click', () =>{
   
    if(choix5 == true){
        trouver5.style.color = "blue";
        choix5= false;
    }else {
        trouver5.style.color = "red";
        choix5 = true;
    }
});

let trouver6 = document.getElementById("Aimer6");
let choix6 = true
trouver6.addEventListener('click', () =>{
   
    if(choix6 == true){
        trouver6.style.color = "blue";
        choix6= false;
    }else {
        trouver6.style.color = "red";
        choix6 = true;
    }
});

let trouver7 = document.getElementById("Aimer7");
let choix7 = true
trouver7.addEventListener('click', () =>{
   
    if(choix7 == true){
        trouver7.style.color = "blue";
        choix7= false;
    }else {
        trouver7.style.color = "red";
        choix7 = true;
    }
});
