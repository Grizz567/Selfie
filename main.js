noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function draw() {
    background('#87CEEB');
   
    fill('#013233');  
    textSize(difference);
    text('Shivaansh', noseX, noseY, difference);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results) {
if(results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + ", noseY = " + noseY);

    leftWristX = results[0].pose.leftWristX;
    leftWristY = results[0].pose.leftWristY;
    difference = floor(leftWristX - rightWristX);

console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    
}
}