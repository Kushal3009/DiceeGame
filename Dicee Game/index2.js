function startGame() {
    let a = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];
    let randomIndex1 = Math.floor(Math.random() * a.length);
    console.log(typeof randomIndex1);
    let randomImg1 = a[randomIndex1];
    let img1 = document.getElementById("img1");
    img1.src = randomImg1;


    let randomIndex2 = Math.floor(Math.random() * a.length);
    let randomImg2 = a[randomIndex2];
    let img2 = document.getElementById("img2");
    img2.src = randomImg2;


    let message;
    if (randomIndex1 > randomIndex2) {
        message = "Congradulation Player 1 you are Winner";
    } else if (randomIndex2 > randomIndex1) {
        message = "Congradulation Player 2 you are Winner";
    } else if (randomIndex1 == randomIndex2) {
        message = 'Match is Tie'
    }


    var typed = new Typed('#element', {
        strings: [message],
        typeSpeed: 50,
    });
    typed.reset(); // Reset Typed.js to start fresh
    typed.strings = [message]; // Set the new message
    typed.start(); // Start typing animation
    speak(message);
}

function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}