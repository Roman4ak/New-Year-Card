window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};


document.addEventListener(
  "DOMContentLoaded",
  function() {
    setTimeout(function() { document.getElementById("loading").className = "slideDown";
    }, 3800);
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function() {
    setTimeout(function() {
      document.getElementById("loading-center").className = "zoomOut";
    }, 3200);
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function() {
    setTimeout(function() {
      document.getElementById("block-1").className = "slideInUp";
    }, 3800);
  },
  false
);

$('.gift').click(function (event) {
    $('.modal').addClass('hidden');
    $('.overlay').addClass('overlay-active');
});


$(function() {
  function randomNum(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  }
  
  var clap = $('.clap');
  var confetti = $('.confetti-effect');
  
  clap.on('click', function() {
    
    confetti.css('transform', 'rotate('+randomNum(0, 180)+'deg)')
    
    confetti.children('.confetti-wrap').stop().addClass('expand');
    setTimeout(function() {
      confetti.children('.confetti-wrap').removeClass('expand');
    }, 700)
  });
});


$(function () {
    $('.gift').click(function(){
        $(this).find('.gift-top').addClass('boxOpen');
    });
});



