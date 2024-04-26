var noseX=0;
var noseY=0;
var difference=0;
var rightWristX=0;
var leftWristX=0;

function setup()
{
     video=createCapture(VIDEO);
     video.size(550,500);
     video.position(60,150);
     

     canvas=createCanvas(550,550);
     canvas.position(760,150);
     
     poseNet=ml5.poseNet(video, modelLoaded);
     poseNet.on('pose',gotPoses)
}

function modelLoaded()
{
    console.log('poseNet is Initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("noseX="+noseX+"noseY="+noseY+"difference="+difference);
    }
}
function draw()
{
    background('#800000');
    fill("blue");
    stroke("yellow")
    square(noseX,noseY,difference);
}

// Get the elements where you want to display the height, width, and position
const note = document.querySelector('.note');
const squareSides = document.getElementById('.square_sides');

// Assume that you have a square element with id 'square'
const square = document.getElementById('square');

// Get the height, width, and position of the square
const height = square.offsetHeight;
const width = square.offsetWidth;
const position = square.getBoundingClientRect();

// Display the height, width, and position in the HTML page
note.innerHTML = `Height: ${height}px<br>Width: ${width}px`;
squareSides.innerHTML = `Top: ${position.top}px<br>Left: ${position.left}px`;
