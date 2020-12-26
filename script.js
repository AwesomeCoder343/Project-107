Webcam.set({
    width:350,
    height: 350,
    image_format:'png',
    png_quality: 90
});
var camera = document.getElementById("camera");
Webcam.attach('#camera');
function takeSnapshot(){
    Webcam.snap((function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';

    }));

    
}
console.log(ml5.verson);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kkfJw60ce.json', modelLoaded)
function modelLoaded(){
    console.log('modelLoaded');
}