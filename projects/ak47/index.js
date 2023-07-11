var cvs = document.getElementsByTagName("canvas")[0];
var ctx = cvs.getContext("2d");
var elements = document.getElementsByClassName("txt");
var elements2 = document.getElementsByClassName("txxt");
var elm = document.getElementsByClassName("imm")
var whichclick = 0;
ctx.strokeStyle="black";
ctx.lineWidth = 0.5;

function drawLine(x1,y1,x2,y2,ratio) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    x2 = x1 + ratio * (x2-x1);
    y2 = y1 + ratio * (y2-y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
  }

function animate(ratio) {
    ratio = ratio || 0;
    drawLine(60,  75, 60,  105,ratio);
    drawLine(160, 90, 160, 108,ratio);
    drawLine(120, 60, 120, 45,ratio);
    drawLine(185, 58, 185, 50,ratio);
    for( var i = 0; i< elements.length; i++){
        elements[i].style.opacity = ratio;
    }
        if(ratio<1) {
            requestAnimationFrame(function() {
            animate(ratio + 0.03);
        });
        }
}

function deanimate(ratio) {
    ratio = ratio || 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLine(60,  75, 60,  105,ratio);
    drawLine(160, 90, 160, 108,ratio);
    drawLine(120, 60, 120, 45,ratio);
    drawLine(185, 58, 185, 50,ratio);
    drawLine(120,  60, 40,  60,ratio);
    drawLine(130, 60, 130, 10,ratio);
    drawLine(135, 60, 135, 130,ratio);
    drawLine(190, 58, 295, 58,ratio);
    for( var i = 0; i< elm.length; i++){
        elm[i].style.opacity = ratio;
    }
    for( var i = 0; i< elements.length; i++){
        elements2[i].style.opacity = ratio;
    }
    for( var i = 0; i< elements.length; i++){
        elements[i].style.opacity = ratio;
    }
        if(ratio>0) {
            requestAnimationFrame(function() {
            deanimate(ratio - 0.03);
        });
        }
}

function animateparts(ratio) {
    ratio = ratio || 0;
    drawLine(120,  60, 40,  60,ratio);
    drawLine(130, 60, 130, 10,ratio);
    drawLine(135, 60, 135, 130,ratio);
    drawLine(190, 58, 295, 58,ratio);
        if(ratio<1) {
            requestAnimationFrame(function() {
            animateparts(ratio + 0.03);
        });
        }
}

function animatieopacity(ratio){
    ratio = ratio || 0;
    for( var i = 0; i< elm.length; i++){
        elm[i].style.opacity = ratio;
    }
    for( var i = 0; i< elements.length; i++){
        elements2[i].style.opacity = ratio;
    }
        if(ratio<1) {
        requestAnimationFrame(function() {
            animatieopacity(ratio + 0.1);
        });
        }
}

function move(){
    if(whichclick == 1){
        document.getElementById("x1").style.top = "7%";
        document.getElementById("x2").style.bottom = "10%";
        document.getElementById("x3").style.right = "10%";
        document.getElementById("x4").style.left = "2%";
        animatieopacity();
    }
    else{
        document.getElementById("x1").style.top = "45%";
        document.getElementById("x2").style.bottom = "50%";
        document.getElementById("x3").style.right = "40%";
        document.getElementById("x4").style.left = "40%";
        deanimate();
    }
}

function Clicked(){
    if(whichclick == 0){
        animate();
    }
    if(whichclick == 1){
        move();
        animateparts();
    }
    if(whichclick == 2){
        move();
    }
    if(whichclick == 2){
        whichclick = 0;
    }
    else{
        whichclick++;
    }
}
