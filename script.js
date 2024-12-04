// Select the textarea and button
const textInput = document.getElementById('textInput');
const speakButton = document.getElementById('speakButton');

// Add a click event listener to the button
speakButton.addEventListener('click', () => {
    const text = textInput.value.trim(); // Get the input text
    if (text) {
        // Use ResponsiveVoice to speak the text
        responsiveVoice.speak(text, "UK English Female", { pitch: 1, rate: 1, volume: 1 });
    } else {
        alert("Please enter some text to convert to speech!");
    }
});
