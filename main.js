NoseX = 0;
NoseY = 0;
LWristX = 0;
RWristX = 0;
Difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(530,400);
    canvas = createCanvas(530,400);
    canvas.position(680,170);
    posenet = ml5.poseNet(video,Modelloaded);
    posenet.on('pose',gotresults);
}

function Modelloaded(){
    console.log("it works!!");
}

function draw(){
    background("gray");
    fill("red");
    stroke("black")
    square(NoseX, NoseY, Difference);
    document.getElementById("result_span").innerHTML= "The width and the height of the square is "+ Difference +"px"
}

function gotresults(results){
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        LWristX = results[0].pose.leftWrist.x;
        RWristX = results[0].pose.rightWrist.x;
        Difference = Math.floor(LWristX-RWristX);
    }
}
