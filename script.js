var canvas = document.getElementById("starfield");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random(); // Initialize with random opacity
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

function drawText() {
    if(frameNumber < 300){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 300 && frameNumber < 600){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 600){
        opacity = 0;
    }
    if(frameNumber > 600 && frameNumber < 900){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 900 && frameNumber < 1200){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("amongst trillions and trillions of stars, over billions of years", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1200){
        opacity = 0;
    }
    if(frameNumber > 1200 && frameNumber < 1500){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1500 && frameNumber < 1800){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1800){
        opacity = 0;
    }
    if(frameNumber > 1800 && frameNumber < 2100){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2100 && frameNumber < 2400){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("is so incredibly, unfathomably unlikely", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2400){
        opacity = 0;
    }
    if(frameNumber > 2400 && frameNumber < 2700){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2700 && frameNumber < 3000){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("and yet here I am to get the impossible chance to get to know you", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 3000){
        opacity = 0;
    }
    if(frameNumber > 3000 && frameNumber < 99999){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.textAlign = `center`;
        context.fillText("I love you so much {name}, more than all the time and space in the universe can contain", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 3300 && frameNumber < 99999){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        context.textAlign = `center`;
        context.fillText("and I can't wait to spend all the time in the world to share that love with you!", canvas.width/2, (canvas.height/2 + 50));
        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3600 && frameNumber < 99999){
        context.font = "30px Comic Sans MS";
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.textAlign = `center`;
        context.fillText("Happy Valentines Day <3", canvas.width/2, (canvas.height/2 + 100));
        thirdOpacity = thirdOpacity + 0.01;
    }   
    
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
