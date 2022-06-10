var prediction_1 = ""
var prediction_2 = ""

Webcam.set ({
    width: 300,
    height: 350,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EFJTf1Nt6/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    image = document.getElementById("captured_image");
            classifier.classify(image, gotResult);
    }
    
    function gotResult(error, results){
        if(error){
            console.error(error);
        }else{
            console.log(results);
            document.getElementById("result_gesture_image").innerHTML = results[0].label;
            document.getElementById("result_gesture_image2").innerHTML = results[1].label;
            prediction_1 = results[0].label;
            prediction_2 = results[1].label;
            
        }
        if(result[0].label == "thumbs up")
        {
            document.getElementById("update_image").innerHTML = "&#128077;";
        }
        if(result[0].label == "peace")
        {
            document.getElementById("update_image").innerHTML = "&#9996;";
        }
        if(result[0].label == "ok")
        {
            document.getElementById("update_image").innerHTML = "&#128076;";
        }
        if(result[1].label == "peace")
        {
            document.getElementById("update_image2").innerHTML = "&#9996;";
        }
        if(result[1].label == "thumbs up")
        {
            document.getElementById("update_image2").innerHTML = "&#128077;";
        }
        if(result[1].label == "ok")
        {
            document.getElementById("update_image2").innerHTML = "&#128076;";
        }
    }
    