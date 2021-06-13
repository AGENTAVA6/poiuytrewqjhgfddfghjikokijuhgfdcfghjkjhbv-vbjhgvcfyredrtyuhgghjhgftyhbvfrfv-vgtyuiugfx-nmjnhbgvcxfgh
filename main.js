status = ""
object = []
function setup(){
    canvas = createCanvas(640, 420)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640, 420)
    video.hide()
    objectDetect = ml5.objectDetector('cocossd',modelLoaded);
}
function draw(){
    image(video, 0, 0, 640, 420)
}
 function modelLoaded(){
status = true;
console.log("play fortnite ")
}