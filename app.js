// grab DOM elements

// IF I UPDATE THIS, WILL IT CHANGE THE DEV BRANCH?!

const nameInput = document.getElementById('name-input');
const nameHeader = document.getElementById('name-header');

const iconSelect = document.getElementById('icon-select');
const iconDisplay = document.getElementById('icon-display');

const descriptionTextArea = document.getElementById('description-textarea');
const descriptionDisplay = document.getElementById('description-display');

const themeSelect = document.getElementById('theme-select');
const card = document.getElementById('card');

const generateNumber = document.getElementById('generate-number');
const numberDisplay = document.getElementById('number-display');

const exportButton = document.getElementById('export-button');


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

themeSelect.addEventListener('change', () => {
    card.classList.value = '';
    card.classList.add(themeSelect.value);
});

generateNumber.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 50);
    numberDisplay.textContent = randomNumber;
});

exportButton.addEventListener('click', async() => {
    const dataUrl = await domtoimage.toPng(card);
    const link = document.createElement('a');
    link.download = nameInput.value + '.png';
    link.href = dataUrl;
    link.click();
});