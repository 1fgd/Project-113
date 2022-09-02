function preloas(){

}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    fill(0, 0, 255);
    stroke(0, 255, 0);
    rect(50, 30, 560, 40);
    fill(0, 0, 255);
    stroke(0, 255, 0);
    rect(20, 30, 60, 410);
    fill(0, 0, 255);
    stroke(0, 255, 0);
    rect(550, 30, 60, 410);
    fill(0, 0, 255);
    stroke(0, 255, 0);
    rect(50, 410, 560, 40);
    fill(255, 25, 0);
    stroke(0, 128, 0);
    circle(50, 50, 80);
    circle(575, 50, 80);
    circle(575, 425, 80);
    circle(50, 425, 80);

}

function take_snapshot(){
    save('student_name.png');    
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}
