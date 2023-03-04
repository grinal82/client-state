// Get the textarea element
const textarea = document.getElementById("editor");

// When the user types or modifies the textarea, save its content to localStorage
textarea.addEventListener("input", function () {
    const text = textarea.value;
    localStorage.setItem("savedText", text);
});

// When the page loads, retrieve the saved text from localStorage and set the textarea value to it
window.addEventListener("load", function () {
    const savedText = localStorage.getItem("savedText");
    if (savedText) {
        textarea.value = savedText;
    }
});
