function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classification = ml5.surroundClassifier('https://teachablemachine.withgoogle.com/models/[...]model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results)
if