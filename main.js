function setup() {
    canvas = createCanvas(1240,336);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(800,400);
    video.parent('game_console');
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log("Model is loaded")
}