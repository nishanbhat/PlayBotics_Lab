// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

new WOW().init();

// -----------------------Owlcarousel one--------------------
const nextIcon =
  '<img src="/images/right-arrow.svg">';
const prevIcon =
  '<img src="/images/left-arrow.svg">';

$(document).ready(function () {
  var owl = $(".carousel1");
  owl.owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    navText: [prevIcon, nextIcon],
    autoplay: false,
    autoplayTimeout: 2000,
    smartSpeed: 1200,
    stagePadding: 50,
    responsive: {
      0: {
        cards: 1,
      },
      800: {
        cards: 2,
      },
      1400: {
        cards: 2,
      },
    },
  });
});

//-------------------- Owlcarousel two----------------------
const nxtIcon = '<img src="/images/testimonials/Vector-1.svg">';
const prvIcon = '<img src="/images/testimonials/Vector.svg"r>';
$(document).ready(function () {
  $(".carousel2").owlCarousel({
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

  const titles = document.querySelectorAll('.title h1, .title h3');

  titles.forEach((title) => {
    const text = title.textContent;
    let coloredText = '';
    

    for (let i = 0; i < text.length; i++) {
      coloredText += i % 2 === 0 ? text[i] : `<span class="blue-letter">${text[i]}</span>`;
    }

    title.innerHTML = coloredText;
  });

