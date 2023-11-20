function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 550);
    canvas.position(690, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded(){
    console.log("Your model has been loaded.");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}
