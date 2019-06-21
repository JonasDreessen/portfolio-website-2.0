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
        timer = setTimeout(loopDeleting, 150);
    };
    loopDeleting();
};

typingEffect();

// Skills Bars
$('.skill-percent').each(function(){
    $(this).animate({
      width:$(this).attr('data-percent')},"fast");
    });