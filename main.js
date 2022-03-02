rightWristX=0;
rightWristY=0;
score=0;

function preload() {

}

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

function gotPoses(){

	if(results.length > 0)
	{
	console.log(results);
	rightWristX = results[0].pose.rigthWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	}
}
