// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);


//Contact form 
function postToGoogle() {
  var field1 = $("#Name").val();
  var field2 = $("#Email").val();
  var field3 = $("#Phone").val();
  var field4 = $("#Message").val();

  $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe8uNC7qJywdRORzIvI1afcRlo6kWDGiMLb0wSOwBtOFSjZow/formResponse",
      
    //add your google form generated numbers below which are also the 'names' of your inputs     
    data: {
      "entry.517626622": field1,
      "entry.935048337": field2,
      "entry.1737955681": field3,
      "entry.354351359": field4
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {
      $('#contact').trigger('reset');
    },
    error: function (x, y, z) {
      $('#contact').trigger('reset');
    }
  });
  return false;
}