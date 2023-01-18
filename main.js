function soundClassify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gbZb29Gv4/model.json',modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
        cat = 0;
        dog = 0;
        cow = 0;
        tiger = 0;
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;

        document.getElementById("hear_tag").innerHTML = "I can hear: " + results[0].label;
        document.getElementById("hear_tag").style.color= "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("accuracy").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2);
        document.getElementById("accuracy").style.color= "rgb(" + r + "," + g + "," + b + ")";
        img1 = document.getElementById("hearing default img.png")
        if(results[0].label=="meow"){
            img1.src = "cat gif.gif";
        }
        else if(results[0].label=="bark"){
            img1.src = "puppy.gif";
        }
        else if(results[0].label=="moo"){
            img1.scr == "cow.gif";
        }
        else if(results[0].label=="roar"){
            img1.src=="tiger.gif";
        }
        else if(results[0].label=="Background Noise"){
            img1.src=="hearing default img.png"
        }

    }
}