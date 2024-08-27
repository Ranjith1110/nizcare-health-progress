const typedName = document.getElementById('typedName');
const name = 'Hi, Ranjith';
let index = 0;

function typeLetter() {
    if (index < name.length) {
        typedName.innerHTML += name[index];
        index++;
        setTimeout(typeLetter, 200); // Adjust the delay for typing speed
    } else {
        setTimeout(() => {
            typedName.innerHTML = ''; // Clear the text
            index = 0;                // Reset the index
            typeLetter();             // Start the typing again
        }, 2000); // Pause before starting the loop again
    }
}

typeLetter();

const phrases = ["Fasting", "Post Prandial"];
let textIndex = 0;
let letterIndex = 0;

function typePhrase() {
    const displayText = document.getElementById('displayText');
    const currentPhrase = phrases[textIndex];

    if (letterIndex < currentPhrase.length) {
        displayText.innerHTML += currentPhrase[letterIndex];
        letterIndex++;
        setTimeout(typePhrase, 200); // Typing speed (milliseconds)
    } else {
        setTimeout(() => {
            textIndex = (textIndex + 1) % phrases.length; // Move to the next phrase
            letterIndex = 0; // Reset letter index
            displayText.innerHTML = ''; // Clear text for re-typing
            typePhrase(); // Start typing the next phrase
        }, 2000); // Wait for 2 seconds before typing the next phrase
    }
}

// Start typing animation
typePhrase();

