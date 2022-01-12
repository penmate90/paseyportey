

function pic() {
    Webcam.attach(camera);
}

function submit() {
   
    document.getElementById("succes").innerHTML="Submited! Pls reload page to make a new Registration or close the page.";
   document.getElementById("camera").innerHTML="";

    
}

camera= document.getElementById("camera");

Webcam.set({
height: 282,
width:282,
image_format: 'png',
png_quality:90
});


