leftWristX=0;
rightWristX=0;
difference=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(100,150);
    canvas = createCanvas(550,550);
    canvas.position(760,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    background('#8B0000');
    textSize(difference);
    fill('#FFE787');
    text('Hello world', 50 ,400);
}
function modelLoaded() {
    console.log('PoseNet is Initialized by shardul');
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
    }
}