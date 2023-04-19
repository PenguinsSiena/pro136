statuss = "";
input = "";
function setup(){
    canvas = createCanvas(480, 330);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 330);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    document.getElementById("name1").value = input;
}

function modelLoaded(){
    console.log("model is Loaded!");
    statuss = true;
}

function draw(){
    image(video, 0, 0, 480, 330);
}

