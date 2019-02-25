//Fonctionnalité 1:

 let footer = document.querySelector("footer");

function testConsole() {
  console.log("clique");
}

footer.addEventListener("click", testConsole);

//Fonctionnalité 1-bis:

let footer2 = document.querySelector("footer");
let num = 1;

function testConsole() {
  console.log(`cliquer ${num}`);
  num++;
};

 footer2.addEventListener("click", testConsole);

//Fonctionnalité 2 :

 let menu = document.getElementById("navbarHeader");
 let clickBtn = document.querySelector(".navbar-toggler-icon");
 function openMenu() {
   menu.classList.toggle("collapse");
 }

 clickBtn.addEventListener("click", openMenu);

//Fonctionnalité 3
var changeColor = document.getElementsByClassName("card")[0];
var editButtonCard = document.getElementsByClassName("btn")[1];
console.log("clique");
function colorRed() {
  changeColor.style.color = "red";
};
changeColor.addEventListener("click", colorRed);


//Fonctionnalité 4
 var secondcard = document.getElementsByClassName("card")[1];
 var myeditbutton2 = secondcard.getElementsByClassName("btn")[1];
 console.log(secondcard)
 console.log(myeditbutton2)

 function onEditButton2Click() {
   if (secondcard.style.color === "green") {
     secondcard.style.color = "black";
   } else {
     secondcard.style.color = "green";
   };
 };

 myeditbutton2.addEventListener("click", onEditButton2Click);


//Fonctionnalité 5

 let navbar = document.querySelector("header");
 let css;

 function nuclear() {
   if (css === false) {
     css = document.querySelector("link").disabled = true;
   } else {
     css = document.querySelector("link").disabled = false;
   }
 }

 navbar.addEventListener("dblclick", nuclear);