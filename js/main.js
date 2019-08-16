document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

window.addEventListener('scroll', getScrollPosition);
function getScrollPosition(){
  return scrollY;
}

// navbar fixed
function getVmiddlePosition(){
  let elem = document.querySelector('.hero-section');
  let elemPosition = elem.getBoundingClientRect().bottom;
  return elemPosition;
}
getVmiddlePosition();

window.addEventListener('scroll', compareVmiddleWithScrollY);

function compareVmiddleWithScrollY(){
  if (getScrollPosition() > getVmiddlePosition()){
    giveNavbarFixedPosition();
  } else {
    giveNavbarAbsolutePosition();
  }
}

function giveNavbarFixedPosition(){
  var navbar = document.querySelector('.navbar');
  navbar.style.position = 'fixed';
  navbar.style.zIndex = '10000';
  navbar.style.backgroundColor = "white";
  TweenMax.to(document.getElementById("navbarNavDropdown"), 4, { ease: Circ.easeOut, x: 50 });
  hideNavbrand();
}

function giveNavbarAbsolutePosition(){
  var navbar = document.querySelector('.navbar');
  navbar.style.position = 'absolute';
  navbar.style.backgroundColor = "transparent";
  TweenMax.to(document.getElementById("navbarNavDropdown"), 4, { ease: Circ.easeOut, x: 0 });
  showNavBrand();
}

function hideNavbrand(){
  var navBrand = document.querySelector('.navbar-brand');
  navBrand.style.display = "none";
}

function showNavBrand(){
  var navBrand = document.querySelector('.navbar-brand');
  navBrand.style.display = 'block';
}


// typing and deleting effect.



animatedText_span = document.getElementById("animated-Text");
const words = ["Jonas Dreessen.", " a Front-end designer.", "a Back-end developer.", "a Full-stack expert."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {
            animatedText_span.innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            animatedText_span.innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
};

typingEffect();


// skillbar 
var compareScrollPositionWithElementPosition = setInterval(compareScrollPositionWithElementPosition, 10);



function getSkillsPosition(){
  let elem = document.querySelector('.skills');
  let elemPosition = elem.getBoundingClientRect();
  return elemPosition.bottom;
}
getSkillsPosition();

function compareScrollPositionWithElementPosition(){
  if(getScrollPosition() >= getSkillsPosition()){
    clearInterval(compareScrollPositionWithElementPosition);
    move();
    move1();
    move2();
  }
}

function move() {
    var elem = document.querySelectorAll('.skill-percent');    
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= elem[0].dataset.percent) {
        clearInterval(id);
      } else {
        width+= 0.8; 
        elem[0].style.width = width + '%'; 
      }
    }
  }


  function move1() {
    var elem = document.querySelectorAll('.skill-percent');    
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= elem[1].dataset.percent) {
        clearInterval(id);
      } else {
        width+= 0.8; 
        elem[1].style.width = width + '%'; 
      }
    }
  }



  function move2() {
    var elem = document.querySelectorAll('.skill-percent');    
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= elem[2].dataset.percent) {
        clearInterval(id);
      } else {
        width+= 0.8; 
        elem[2].style.width = width + '%'; 
      }
    }
  }

  //TweenMax.to(document.getElementById("navbarNavDropdown"), 2.5, { ease: Circ.easeOut, y: 50 });
  //TweenLite.to(document.querySelector(".navbar-nav"), 2.5, { ease: Circ.easeOut, y: -500 });




  