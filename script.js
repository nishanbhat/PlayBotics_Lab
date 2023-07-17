// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

new WOW().init();

// Owlcarousel one
const nextIcon =
  '<img src="/images/corousel slider icons/Landing page/Vector-1.svg">';
const prevIcon =
  '<img src="/images/corousel slider icons/Landing page/Vector.svg"r>';

$(document).ready(function () {
  var owl = $(".carousel1");
  owl.owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    navText: [prevIcon, nextIcon],
    autoplay: true,
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

// Owlcarousel two
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
});
