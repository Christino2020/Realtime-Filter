function setup(){
    canvas = createCanvas(400,400)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPose)
    }
    function gotPose(results){
    if (results.length > 0){
    console.log(results)
    noseX = results[0].pose.nose.x +38
    noseY = results[0].pose.nose.y + 40
    
    }
    
    }


    function modelLoaded(){
        console.log("poseNet Ready!")
    }
    
    function take_snapshot(){
        save("Your_Clown_Nose_Image")
    }
    function draw(){
        image(video, 0, 0, 400, 400 )
        image(NOSE, noseX, noseY, 30, 30)

    }
    noseX = 0;
    noseY = 0;
function preload(){
    NOSE = loadImage("https://i.postimg.cc/7PKgjhhh/clownnose.png")

}
    

    