var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

// === รายการรูปภาพ 27 รูป ===
var imgUrls = [
    "public/images/photo1.jpg", "public/images/photo2.jpg", "public/images/photo3.jpg",
    "public/images/photo4.jpg", "public/images/photo5.jpg", "public/images/photo6.jpg",
    "public/images/photo7.jpg", "public/images/photo8.jpg", "public/images/photo9.jpg",
    "public/images/photo10.jpg", "public/images/photo11.jpg", "public/images/photo12.jpg",
    "public/images/photo13.jpg", "public/images/photo14.jpg", "public/images/photo15.jpg",
    "public/images/photo16.jpg", "public/images/photo17.jpg", "public/images/photo18.jpg",
    "public/images/photo19.jpg", "public/images/photo20.jpg", "public/images/photo21.jpg",
    "public/images/photo22.jpg", "public/images/photo23.jpg", "public/images/photo24.jpg",
    "public/images/photo25.jpg", "public/images/photo26.jpg", "public/images/photo27.jpg"
];

let floatingImages = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;

// === ระบบปุ่ม ===
const container = document.querySelector('.container');
const btnContainer = document.createElement('div');
btnContainer.id = "love-container";
btnContainer.style.display = "none";
btnContainer.innerHTML = `
    <h1 id="emoji-display">💖</h1>
    <button id="btn-love">Cinta!!</button>
    <button id="btn-notlove">Tidak...</button>
`;
container.appendChild(btnContainer);

const btnLove = document.getElementById("btn-love");
const btnNotLove = document.getElementById("btn-notlove");
const emojiDisplay = document.getElementById("emoji-display");

let scaleNotLove = 1.0;
const emojisSad = ["🥺", "😭", "😮‍💨", "💔", "pls pls pls🥺"];

btnLove.addEventListener("click", () => {
    alert("Hore!!! Akhirnya aku paling mencintaimu Nara!!!! 💕");
});

btnNotLove.addEventListener("click", () => {
    scaleNotLove -= 0.25;
    emojiDisplay.innerText = emojisSad[Math.floor(Math.random() * emojisSad.length)];
    if (scaleNotLove <= 0.1) btnNotLove.style.display = "none";
    else btnNotLove.style.transform = "scale(" + scaleNotLove + ")";
});

// === สร้างรูปลอย ===
function createFloatingImage() {
    const img = new Image();
    img.src = imgUrls[Math.floor(Math.random() * imgUrls.length)];
    floatingImages.push({
        image: img,
        x: Math.random() * (canvas.width - 100),
        y: canvas.height + 50,
        size: 80,
        speed: 0.5 + Math.random() * 1
    });
}
setInterval(createFloatingImage, 2000);

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;

    // ระบบแสดงข้อความ (เหมือนเดิม)
    if(frameNumber < 250) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Setiap hari aku tak percaya betapa beruntungnya aku", canvas.width/2, canvas.height/2);
        opacity = Math.min(1, opacity + 0.01);
    }
    // ... (ส่วนการแสดงข้อความอื่นๆ คงเดิม) ...
    if(frameNumber > 2500) {
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Aku sangat mencintaimu NARA lebih dari seluruh waktu dan ruang di alam semesta dapat menampung", canvas.width/2, canvas.height/2);
        opacity = Math.min(1, opacity + 0.01);
        btnContainer.style.display = "block";
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // วาดดาว
    for (var i = 0; i < stars; i++) {
        var s = starArray[i];
        context.beginPath();
        context.arc(s.x, s.y, s.radius, 0, 360);
        context.fillStyle = "hsla(" + s.hue + ", " + s.sat + "%, 88%, " + s.opacity + ")";
        context.fill();
    }

    // วาดรูปลอย
    floatingImages.forEach((p, i) => {
        if (p.image.complete) context.drawImage(p.image, p.x, p.y, p.size, p.size);
        p.y -= p.speed;
        if (p.y < -100) floatingImages.splice(i, 1);
    });

    drawText();
    frameNumber++;
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
