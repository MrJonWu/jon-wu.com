$(document).ready(function() {
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 800, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  });

  window.sr = ScrollReveal();
  sr.reveal('.sr-my-skills', {
    duration: 600,
    distance: '0px'
  });
  sr.reveal('.sr-skills', {
    duration: 600,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-experience', {
    duration: 600,
    distance: '0px'
  });
  sr.reveal('.sr-work', {
    duration: 600,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-my-projects', {
    duration: 600,
    distance: '0px'
  });
  sr.reveal('.sr-narnia', {
    duration: 600,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-moneyio', {
    duration: 600,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-fridge', {
    duration: 600,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-about', {
    duration: 600,
    distance: '0px'
  });
  sr.reveal('.sr-me', {
    duration: 600,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-footer', {
    duration: 600,
    distance: '0px'
  }, 200);
});