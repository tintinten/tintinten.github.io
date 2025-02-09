const messages = [
    "Weee ayaw mo?",
    "Promise ayaw mo?",
    "Ayaw mo talaga?:((",
    "Sure na sure na sure na ayaw?",
    "Siguro maling pindot lang",
    "Ay No talaga?:(",
    "Pweaseeeeee:((",
    "But I want you to be my Valentine",
    "Okayokay wag na nga:((",
    "Joke lang, please say yes baby ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html"
}
