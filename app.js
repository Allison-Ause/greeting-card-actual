// grab DOM elements
const nameInput = document.getElementById('name-input');
const nameHeader = document.getElementById('name-header');

const iconSelect = document.getElementById('icon-select');
const iconDisplay = document.getElementById('icon-display');

const descriptionTextArea = document.getElementById('description-textarea');
const descriptionDisplay = document.getElementById('description-display');

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state

nameInput.addEventListener('input', () => {
    nameHeader.textContent = nameInput.value;
});

iconSelect.addEventListener('change', () => {
    const src = 'assets/' + iconSelect.value;
    iconDisplay.src = src;
});

descriptionTextArea.addEventListener('input', () => {
    descriptionDisplay.textContent = descriptionTextArea.value;
});