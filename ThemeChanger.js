const themeContainer =  document.getElementById('themeContainer');
const heading =  document.getElementById('heading');
const themeToggleButton =  document.getElementById('themeToggleButton');

themeToggleButton.addEventListener('click', () => {
    if (themeContainer.style.backgroundColor === 'black') {
        // Switch to Light Theme
        themeContainer.style.backgroundColor = 'white';
        heading.style.color = 'black';
        themeToggleButton.textContent = 'Switch to Dark Theme';
    } else {
        // Switch to Dark Theme
        themeContainer.style.backgroundColor = 'black';
        heading.style.color = 'white';
        themeToggleButton.textContent = 'Switch to Light Theme';
    }
});
