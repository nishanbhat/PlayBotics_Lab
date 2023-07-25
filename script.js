// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

new WOW().init();


// -------------------- Owlcarousel ----------------------
const nxtIcon = '<img src="/images/testimonials/Vector-1.svg">';
const prvIcon = '<img src="/images/testimonials/Vector.svg"r>';
$(document).ready(function () {
  $(".owl-carousel ").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [prvIcon, nxtIcon],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
} );

// ---------------------scroll progress-----------------

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#012f3c ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// -----------------------title text coloring----------------

  // const titles = document.querySelectorAll('.title h1, .title h3');

  // titles.forEach((title) => {
  //   const text = title.textContent;
  //   let coloredText = '';
    

  //   for (let i = 0; i < text.length; i++) {
  //     coloredText += i % 2 === 0 ? text[i] : `<span class="blue-letter">${text[i]}</span>`;
  //   }

  //   title.innerHTML = coloredText;
  // });


  // -----------------bar/menu---------------------

function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}