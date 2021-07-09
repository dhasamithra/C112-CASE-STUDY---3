Webcam.set({
    width:310,
    height:300,
    image_format : 'png',
    png_quality:90,

    constraints:{
        facingMode:"environment"
    }
});
camera = document.getElementById("camera1");

Webcam.attach("#camera1");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
Webcam.set({
    width:310,
    height:300,
    image_format : 'png',
    png_quality:90,

    constraints:{
        facingMode:"environment"
    }
});
camera = document.getElementById("camera2");

Webcam.attach("#camera2");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}