let gaest = document.getElementById("splash");
let fest = document.getElementById("textbox");
let bil = document.getElementById("splash");
let about = document.getElementById("about");
let position = document.getElementById("positions");
let next1 = document.getElementById("knap1");
let skriv1 = document.getElementById("skriv1");
let next2 = document.getElementById("knap2");
let next3 = document.getElementById("knap3");
let next4 = document.getElementById("knap4");
let billeder = document.getElementById("billeder");
let menu = document.getElementById("nav");
let vid = document.getElementById("video");
let indi2 = document.getElementById("scroll-indicator2");
let navButtons = document.getElementsByClassName('navknap');
let undertitel = document.getElementById('undertitel');
let describe = document.getElementById("describe");
let box = document.getElementById("animate-time");
let knappelap = document.getElementById("next1");





window.onload = codeAddress;

function codeAddress() {
  gaest.classList.add("firstmove");
}

console.log("Start animation på splash unit");






box.onanimationstart = function(event) {}



box.onanimationend = function(event) {




  bil.classList.add("secondmove");
  console.log("Start animation af splash2");

  //Forsinker Fjernelse af oprindelig velkomst tekst
  setTimeout(function() {
    fest.classList.add("flicker-out-1");
    skriv1.classList.add("knap-skriv");
  }, 1500);

  // Forsinker visning af om mig
  setTimeout(function() {
    about.style.visibility = 'visible';
    next1.style.display = 'flex';
    position.classList.add("slide-in-left");
    undertitel.classList.add("show");
  }, 3500);

  // Forsinker TypeWriter JS til om mig overskrift
  setTimeout(function() {
    startHeader();
  }, 5000);
}

// Skifter content ud med Om mig skrift
function showContent() {

  setTimeout(function() {
    about.style.visibility = 'hidden';
    position.style.display = 'none';
    undertitel.style.display = 'none';
    next1.style.display = 'none';
    console.log("Skjul Forside, Vis About");
    describe.style.display = 'block';
    next2.style.display = 'flex';
  }, 1000);
}

function showVid() {

  setTimeout(function() {
    describe.style.display = 'none';
    console.log("Skjul About, vis Video content");
    vid.style.display = 'block';
    indi2.classList.add("show");
    next2.style.display = 'none';
    next3.style.display = 'flex';
  }, 1000);

}

function showPhot() {

  setTimeout(function() {
    vid.style.display = 'none';
    billeder.style.display = 'block';
    console.log("Skjul tidligere side, opstarter Photography content");
    next3.style.display = 'none';
    indi2.classList.add("hide");

  }, 1000);
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