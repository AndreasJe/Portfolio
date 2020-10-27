let gaest = document.getElementById("splash");




function codeAddress() {
  gaest.classList.add("firstmove");
}
window.onload = codeAddress;

console.log("Start animation på splash unit");




let box = document.getElementById("animate-time");
let knappelap = document.getElementById("next1");


box.onanimationstart = function(event) {
  console.log("Animation startet, knap vises efterfølgende");
  setTimeout(function() {
    knappelap.style.opacity = '1';
  }, 3000);
}



box.onanimationend = function(event) {

};
let fest = document.getElementById("textbox");
let bil = document.getElementById("splash");
let about = document.getElementById("about");
let position = document.getElementById("positions");
let next = document.getElementById("next-knap");
let nextCon = document.getElementById("next2");
let next3 = document.getElementById("next3");
let menu = document.getElementById("nav");
let navButtons = document.getElementsByClassName('navknap');
let undertitel = document.getElementById('undertitel');
let describe = document.getElementById("describe");


function moveSplash() {


  bil.classList.add("secondmove");
  console.log("Start animation af splash2");

  //Forsinker Fjernelse af oprindelig velkomst tekst
  setTimeout(function() {
    fest.classList.add("flicker-out-1");
  }, 1500);

  // Forsinker visning af om mig
  setTimeout(function() {
    about.style.visibility = 'visible';
    nextCon.style.opacity = '1';
    position.classList.add("slide-in-left");
    next.classList.add("line4");
    undertitel.classList.add("show");
    next.classList.add("show");
  }, 4500);

  // Forsinker TypeWriter JS til om mig overskrift
  setTimeout(function() {
    startHeader();
  }, 5000);
}

// Skifter content ud med Om mig skrift
function showContent() {


  about.style.visibility = 'hidden';
  position.style.display = 'none';
  undertitel.style.display = 'none';
  nextCon.style.opacity = '0';
  console.log("Skjul tidligere side, opstart content");
  describe.style.display = 'block';
  next3.classList.add("show");
}

function showNAV() {

  describe.style.display = 'none';
  console.log("Skjul tidligere side, opstart content");
  menu.style.visibility = 'visible';

}


// Typewriter funktion til overskriften på om mig siden:



function startHeader() {
  console.log("Start animation af header");
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 100;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

// TEST PÅ SKIFT AF TO SIDET BRØDTEKST.

// function vistekst2() {
//   console.log("Kom igang")
//   const nextText = 'Learning to work with HTML5, CSS and JavaScript has opened a new world for me, and i wish to continue to develop my skills even further. <br> Hopefully ';
//   document.getElementById('broed').innerHTML = nextText;
//   document.getElementById("tekst-knap").innerText = "2/2";
// }