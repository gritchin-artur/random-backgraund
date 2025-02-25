const buttonContainer = document.getElementById('button-container');
const button = document.getElementById('button');

const characterArray = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
];

button.textContent = 'click \n #565454';
button.addEventListener('click', () => {
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characterArray.length); 
        randomColor += characterArray[randomIndex];
    }

    let randomColorBtn = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`; 
    button.style.background = randomColorBtn;
    buttonContainer.style.background = randomColor;
    button.textContent = `click \n ${randomColor}`;
});
