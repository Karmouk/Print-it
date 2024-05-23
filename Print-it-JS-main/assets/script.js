

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
function slidegauche(){
	console.log("Gauche")
	
}
function slidedroite(){
	console.log("Droite")
}
let slides_check=0
const flechedegauche=document.querySelector("#banner .arrow_left");
flechedegauche.addEventListener("click",slidegauche);

const flechededroite=document.querySelector("#banner .arrow_right");
flechededroite.addEventListener("click",slidedroite);

const bulletpoints=document.querySelector(".dots");

for(let i=0;i<slides.length;i++){
	const dot=document.createElement("div");
	dot.classList.add("dot");
	if (i===slides_check){
		dot.classList.add("dot_selected")
	}
	bulletpoints.appendChild(dot)
	
}