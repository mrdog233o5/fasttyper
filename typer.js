const typingArea = document.getElementById("typingArea");
const inputReader = document.getElementById("inputReader");
var text = "Hello world during";
var letterElements = [];
function updateText(text) {
    var textByWords = text.split(" ");
    textByWords.forEach((word) => {
        var element = `<span class="word">`
        Array.from(word).forEach((letter) => {
            element += `<span class="letter">${letter}</span>`;
        });
        element += `</span>`;
        typingArea.innerHTML += element;
    });
}

updateText(text);

// input reader
inputReader.focus();
inputReader.onblur = inputReader.focus;
inputReader.oninput = () => {
    console.log(inputReader.value);
}