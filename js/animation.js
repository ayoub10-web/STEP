const navbar = document.querySelector('#navbar1');

window.onscroll = () => {
    if (window.scrollY > 80) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
  
    }
};

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid rgb(255, 166, 0),height:50px;}";
    document.body.appendChild(css);
};
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
     
    }
  }



function myFunction() {
  var x = document.getElementById("navbar1");
  var y=document.getElementById("logo");
  x.classList.remove("nav-active");
  if (x.className === "topnav") {
    x.className += " responsive";

  } else {
    x.className = "topnav";   
  }

}
/*.............*/
 /* 1 carousel */
 $('#carousel-1').carousel({
  interval: 2000,
  wrap: true,
  keyboard: true
});


/* 2 carousel */
$('#carousel-2').carousel({
  interval: 2000,
  wrap: true,
  keyboard: true
});


/* 3 carousel */
$('#carousel-3').carousel({
 interval: 2000,
 wrap: true,
 keyboard: true
});

/* 4 carousel example with jumbotron */
$('#carousel-4').carousel({
 interval: 2000,
 wrap: true,
 keyboard: true
});

/* 5 carousel example */
$('#carousel-5').carousel({
 interval: 2000,
 wrap: true,
 keyboard: true
});

/* 6 carousel example */
$('#carousel-6').carousel({
 interval: 2000,
 wrap: true,
 keyboard: true
});

/* 7 carousel example */
$('#carousel-7').carousel({
 interval: 4000,
 wrap: true,
 keyboard: true
});

/* 8 carousel example */
$('#carousel-8').carousel({
 interval: 6000,
 wrap: true,
 keyboard: true
});

/* 9 carousel example */
$('#carousel-9').carousel({
 interval: 8000,
 wrap: true,
 keyboard: true
});

/* 10 carousel example */
$('#carousel-10').carousel({
 interval: 2000,
 wrap: true,
 keyboard: true
});

/* 11 carousel example */
$('#carousel-11').carousel({
 interval: 4000,
 wrap: true,
 keyboard: true
});

/* 12 carousel example */
$('#carousel-12').carousel({
 interval: 6000,
 wrap: true,
 keyboard: true
});

/* 13 carousel example */
$('#carousel-13').carousel({
 interval: 8000,
 wrap: true,
 keyboard: true
});

