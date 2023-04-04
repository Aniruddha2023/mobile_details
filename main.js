var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");
var rotatevalue = circle.style.transform;
var rotatetSum;


upbtn.onclick = function() {

    rotatetSum = rotatevalue + "rotate(-90deg)";
    circle.style.transform = rotatetSum;
    rotatevalue = rotatetSum;

}

downbtn.onclick = function() {

    rotatetSum = rotatevalue + "rotate(90deg)";
    circle.style.transform = rotatetSum;
    rotatevalue = rotatetSum;

}