/*const animatedText_span = document.getElementById("animated-Text");

var i = 0;
var text1 = 'Jonas Dreessen'; //text 1
const text2 = 'Front-end designer'
const text3 = 'Back-end developer'
const text4 = 'Full-stack developer'
var speed = 100;

function typeWriter() {
  if (i < text1.length) {
    animatedText_span.innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  } 
}
typeWriter(); */
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
        timer = setTimeout(loopDeleting, 150);
    };
    loopDeleting();
};

typingEffect();