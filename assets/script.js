const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Récupérer les éléments dans le HTML
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let bannerImage = document.querySelector(".banner-img");
let bannerDots = document.querySelectorAll(".dot");
let bannerSelected = document.querySelector(".dot_selected");
let bannerText = banner.querySelector("p");

// Compteur pour le slide
let affichageSlide = 0;

// Au clic, augmenter ou réduire le chiffre affiché(100) sur la page du site Print it
arrowLeft.addEventListener("click", () => {
  // alert("Ok pour la flèche de gauche");
  // affichageSlide = (affichageSlide - 1 + slides.length) % slides.length;
  // affichageSlide = affichageSlide - 1;
  // if (affichageSlide < 0) {
  //   affichageSlide = 3;
  // }
  // bannerImage.src = slides[affichageSlide].image;
  // bannerText.innerHTML = slides[affichageSlide].tagLine;
  bannerContenu();
  dotChangeOnClick();
  bannerBoucle(-1);
});
arrowRight.addEventListener("click", () => {
  // alert("Ok pour la flèche de droite");

  // affichageSlide = affichageSlide + 1;
  // if (affichageSlide > 3) {
  //   affichageSlide = 0;
  // }

  // bannerText.innerHTML = slides[affichageSlide].tagLine;
  bannerContenu();
  dotChangeOnClick();
  bannerBoucle(1);
});

function dotChangeOnClick() {
  bannerDots.forEach((bullets, i) => {
    bullets.classList.remove("dot_selected");

    if (i === affichageSlide) {
      bullets.classList.add("dot_selected");
    }
  });
}

function bannerContenu() {
  bannerImage.src = slides[affichageSlide].image;
  bannerText.innerHTML = slides[affichageSlide].tagLine;
}

function bannerBoucle(sens) {
  affichageSlide = affichageSlide + sens;
  if (affichageSlide > slides.length - 1) {
    affichageSlide = 0;
  }
  if (affichageSlide < 0) {
    affichageSlide = slides.length - 1;
  }
}
