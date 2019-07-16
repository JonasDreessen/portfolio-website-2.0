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

  move();

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

  move1();

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

  move2();