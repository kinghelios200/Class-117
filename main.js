//https://teachablemachine.withgoogle.com/models/7Kv4h3rhf/

function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7Kv4h3rhf/model.json", modelReady);
}

function modelReady() {
    console.log("Model Loaded");
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(3) + "%"
        img1 = document.getElementById("cat1");
        img2 = document.getElementById("cat2");
        img3 = document.getElementById("cat3");
        img4 = document.getElementById("cat4");
        if (results[0].label == "Clapping") {
            img1.src = "NYANCAT1.gif";
            img2.src = "hispanicCat2.png";
            img3.src = "angelCat3.jpeg";
            img4.src = "halloweenCat4.jpg";
        } else if (results[0].label == "Meow") {
            img1.src = "nyanCat1.jpg";
            img2.src = "HISPANICCAT.gif";
            img3.src = "angelCat3.jpeg";
            img4.src = "halloweenCat4.jpg";
        } else if (results[0].label == "Duracell noise") {
            img1.src = "nyanCat1.jpg";
            img2.src = "hispanicCat2.png";
            img3.src = "SATANCAT3.gif";
            img4.src = "halloweenCat4.jpg";
        } else {
            img1.src = "nyanCat1.jpg";
            img2.src = "hispanicCat2.png";
            img3.src = "angelCat3.jpeg";
            img4.src = "HALLOWEENCAT4.gif";
        }
    }
}