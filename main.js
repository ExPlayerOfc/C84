canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressede.keyCode;
console.log(keyPressed);
if((keyPressed >=97 && keyPressed<=122) || (keyPressed >=65 && keyPressed<=90))
{
aplhabetkey();
document.getElementById("d1").innerHTML="Você pressionou uma tecla alfabeto"; console.log("alphabet key");
}

if((keyPressed >=48 && keyPressed<=57)){
numberkey();
document.getElementById("d1").innerHTML="Você pressionou uma tecla numerica"; console.log("number key");
}

if((keyPressed >=37 && keyPressed<=40)){
    directionalkey();
document.getElementById("d1").innerHTML="Você pressionou uma tecla direcional"; console.log("directional key");
}

if((keyPressed >=17 && keyPressed<=18 && keyPressed >=27 ))
{
    Specialkey();
document.getElementById("d1").innerHTML="Você pressionou uma tecla Especial"; console.log("Special key");
}

function aplhabetkey()
{
img_image="alfabeto.png";
add();
}

function numberkey()
{
img_image="número.png";
add();
}

function directionalkey()
{
img_image="direcional.png";
add();
}

function Specialkey()
{
img_image="especial.png";
add();
}
}