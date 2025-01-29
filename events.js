
$(document).ready(function(){
  // Sticky navbar on scroll
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }

      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      $('html').css("scrollBehavior", "auto");
  });

  
  $('.navbar .menu li a').click(function(){
      $('html').css("scrollBehavior", "smooth");
  });

  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });



});

$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
      0:{
          items: 1,
          nav: false
      },
      600:{
          items: 2,
          nav: false
      },
      1000:{
          items: 3,
          nav: false
      }
  }
});

// JavaScript code to filter the cards based on the clicked navbar item

document.addEventListener('DOMContentLoaded', function () {
  // Get all the nav_list links
  const navLinks = document.querySelectorAll('.nav_list a');
  const cardSections = document.querySelectorAll('.TECH, .NON-TECH, .WORKSHOP');

  // Function to show the specified class and hide others
  function filterCards(category) {
      if (category === '*') {
          // Show all sections if 'All' is clicked
          cardSections.forEach(section => section.style.display = 'block');
      } else {
          // Hide all sections and show only the selected category
          cardSections.forEach(section => {
              section.style.display = section.classList.contains(category) ? 'block' : 'none';
          });
      }
  }

  // Add click event to each nav link
  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default link behavior

          // Remove 'active' class from all nav items and add to the clicked one
          navLinks.forEach(nav => nav.parentElement.classList.remove('active'));
          this.parentElement.classList.add('active');

          // Get the category from the href attribute
          const category = this.getAttribute('href').substring(1); // Remove the '.' or '*' prefix
          filterCards(category);
      });
  });

  // Initialize to show all on page load
  filterCards('*');
});

const cards = document.querySelectorAll('.cont');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close');

// Add event listener to each card
cards.forEach(card => {
    card.addEventListener('click', function() {
        // Get event name and format it to match popup ID
        const eventName = card.querySelector('.head p').textContent.trim().toLowerCase().replace(/\s+/g, '');
        const popupId = `popup-${eventName}`;  // Dynamically create the popup id
        
        const popup = document.getElementById(popupId);  // Get the popup element by id
        if (popup) {
            popup.style.display = 'flex';  // Show the popup if it exists
        }
    });
});

// Add event listener to close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        button.closest('.popup').style.display = 'none';  // Hide the popup when close button is clicked
    });
});

// Close popup if clicked outside of the popup content
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';  // Close popup if clicked outside the popup
    }
});

document.addEventListener("DOMContentLoaded", function() {
  const allLink = document.querySelector('.nav_list.active a[href=".ALL"]');
  
  if (allLink) {
      allLink.addEventListener('click', function(event) {
          event.preventDefault();  // Prevent the default link action
          location.reload();  // Refresh the page
      });
  }
});

    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      setTimeout(() => {
          preloader.style.display = 'none'; 
      }, 3000); 
  });
  
  function toggleCard(button) {
    const popup = button.closest('.popup');
    const card = popup.querySelector('.card');
    card.classList.toggle('flipped');
    button.textContent = card.classList.contains('flipped') ? 'Description' : 'Rules';
}

  