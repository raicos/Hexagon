
var canvas;
var rad_x = 0;

function setup(){ 
    canvas = createCanvas(windowWidth, windowHeight);
    //canvas.position(0, 0);
    //canvas.parent('canvas');
    colorMode(HSB, 100);
    smooth();
    background(360);
    rad_x = windowWidth/2
}

var strokeColor = 0;
var colorC = 0;
var flag = true;

function draw(){
    rad_x += 5;
    if(flag){
        colorC++;
        if(colorC > 20){
            flag = false;
        }
    }else{
        colorC--;
        if(colorC < 0){
            flag = true;
        }
    }
    strokeColor = color(colorC, 100, 100);

    noFill();
    push();
    translate(width/2,height/2);

    var circleResolution = 6;
    var radius = rad_x - width/2;
    var angle = TWO_PI/circleResolution;

    strokeWeight(2);
    stroke(strokeColor);

    beginShape();
    for (var i=0; i<=circleResolution; i++){
        var x = 0 + cos(angle*i) * radius;
        var y = 0 + sin(angle*i) * radius;
        vertex(x, y);
    }
    endShape();

    pop();

    fill(255);
    push();
    translate(width/2,height/2);

    var circleResolution = 6;
    var radius = (rad_x - width/2)-10;
    var angle = TWO_PI/circleResolution;

    strokeWeight(2);
    stroke(255);

    beginShape();
    for (var i=0; i<=circleResolution; i++){
        var x = 0 + cos(angle*i) * radius;
        var y = 0 + sin(angle*i) * radius;
        vertex(x, y);
    }
    endShape();

    pop();

    if(rad_x > windowWidth*1.2){
        rad_x = windowWidth/2;
        clear();
    }

}

