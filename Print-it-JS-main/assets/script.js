

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

const bulletpoints=document.querySelector(".dots");
const flechedegauche=document.querySelector("#banner .arrow_left");
const flechededroite=document.querySelector("#banner .arrow_right");
const image = document.querySelector(".banner-img");
const BannerTxt=document.querySelector("#banner p");

let slides_check=0

function showSlide(media){
	
	if(media<0){
		media=slides.length-1;
		console.log("Passage à la dernière slide");
	}
	if (media>slides.length-1){
		media=0;
		console.log("Retour à la première slide");
	}
	slides_check=media;
	BannerTxt.innerHTML=slides[media].tagLine
	image.src="./assets/images/slideshow/"+slides[media].image;

	const dotsAll = document.querySelectorAll('.dot');
	dotsAll.forEach(dot => dot.classList.remove('dot_selected'));
    dotsAll[media].classList.add('dot_selected');
	
	
}

function slidegauche(){
	slides_check--
	showSlide(slides_check)
	console.log("slide à gauche")

	
	
}

function slidedroite(){
	slides_check++
	showSlide(slides_check)
	console.log("slide à droite")
	 
}



flechedegauche.addEventListener("click",slidegauche);

flechededroite.addEventListener("click",slidedroite);




for(let i=0;i<slides.length;i++){
	const points=document.createElement("div");
	points.classList.add("dot");
	if (i===slides_check){
		points.classList.add("dot_selected")
	}
	points.addEventListener('click', () => showSlide(i));
	bulletpoints.appendChild(points)
	


}
