const canvasSize = [600, 600];
let fc = 0;

var x = 0;
var y = 0;

function setup(){
 createCanvas(...canvasSize);
 background(0);
}

function nextPoint(){

    let nextX;
    let nextY;

    let myRandom = random(1);

    if(myRandom < 0.01){
        nextX = 0;
        nextY = 0.16 * y;    
    }else if(myRandom < 0.86){
        nextX = 0.85 * x + 0.04 * y;
        nextY = -0.04 * x + 0.85 * y + 1.6;
    }else if(myRandom < 0.93){
        nextX = 0.20 * x + -0.26 * y;
        nextY = 0.23 * x + 0.22 * y + 1.6;
    }else{
        nextX = -0.15 * x + 0.28 * y;
        nextY = 0.26 * x + 0.24 * y + 0.44;
    }

    x=nextX;
    y=nextY;
}

function drawPoint(){
    let px = map(x, -2.1820, 2.6558, 0, width);
    let py = map(y, 0, 9.9983, height, 0);

    point(px, py);
}

function draw(){
    stroke(255);
    strokeWeight(1);

    for(let i = 0; i < 100; i++){
        drawPoint();
        nextPoint();
        
    }
    fc++;
    if(fc > 10000){
        noLoop();
    }
}