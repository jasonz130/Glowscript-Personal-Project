var mars = document.getElementById("mars");
var handicon = document.getElementById("handicon");

var circle1 = document.getElementById("circle1");
var circle1text = document.getElementById("circleonetextcontainer");
var circle1overlay = document.getElementById("circle1overlay");

var circle2 = document.getElementById("circle2");
var circle2text = document.getElementById("circletwotextcontainer");
var circle2overlay = document.getElementById("circle2overlay");

var circle3 = document.getElementById("circle3");
var circle3text = document.getElementById("circlethreetextcontainer");
var circle3overlay = document.getElementById("circle3overlay");

var circle4 = document.getElementById("circle4");
var circle4text = document.getElementById("circlefourtextcontainer");
var circle4overlay = document.getElementById("circle4overlay");

var display = document.getElementById("display");



mars.onclick = function() {
  if(mars.className == "open") {
    mars.className = "";
    handicon.className = "";

    circle1.className = "";
    circle1text.className = "";
    circle1overlay.className = "";

    circle2.className = "";
    circle2text.className = "";
    circle2overlay.className = "";

    circle3.className = "";
    circle3text.className = "";
    circle3overlay.className = "";

    circle4.className = "";
    circle4text.className ="";
    circle4overlay.className = "";

    display.className = "";
  } else {
    mars.className = "open";
    handicon.className = "open";

    circle1.className = "open";
    circle1text.className = "open";
    circle1overlay.className = "open";

    circle2.className = "open";
    circle2text.className = "open";
    circle2overlay.className = "open";

    circle3.className = "open";
    circle3text.className = "open";
    circle3overlay.className = "open";

    circle4.className = "open";
    circle4text.className = "open";
    circle4overlay.className = "open";

    display.className = "open";
  }
};



circle1overlay.onmouseover = function() {
    display.className = "circle1";
    circle1.className = "hover";
};
circle1overlay.onmouseout = function() {
  circle1.className = "open";
}

circle2overlay.onmouseover = function() {
    display.className = "circle2";
    circle2.className = "hover";
};
circle2overlay.onmouseout = function() {
  circle2.className = "open";
}

circle3overlay.onmouseover = function() {
    display.className = "circle3";
    circle3.className = "hover";
};
circle3overlay.onmouseout = function() {
  circle3.className = "open";
}

circle4overlay.onmouseover = function() {
    display.className = "circle4";
    circle4.className = "hover";
};
circle4overlay.onmouseout = function() {
  circle4.className = "open";
}
