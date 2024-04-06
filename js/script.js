var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centralSlide: "true",
  fade: "true",
  grabCursor: "true",
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },
});

// Get the modal
var modal = document.getElementById("myModal");

// Get all images and add click event listener
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

console.log(img);

// for (var i = 0; i < img.length; i++) {
//   console.log(img[i]);
//   img[i].addEventListener("click", function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
//   });
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// testimoni-js 

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
  },
  loop: true,
  pagination: {
      el: ".swiper-pagination",
  },
});

// tentang kami button
document.addEventListener("DOMContentLoaded", function() {
  const readMoreBtn = document.querySelector('.read-more-btn');
  const fullText = document.querySelector('.full-text');
    
  readMoreBtn.addEventListener('click', (e) => {
    fullText.classList.toggle('hidden');
    if (readMoreBtn.innerText === 'Selengkapnya') {
      readMoreBtn.innerText = 'Lebih Sedikit';
    } else {
      readMoreBtn.innerText = 'Selengkapnya';
    }
  });
});
