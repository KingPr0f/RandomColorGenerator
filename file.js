const block = document.querySelector('.js-block'),
color = document.querySelector('.js-color'),
btn = document.querySelector('.js-btn'),
hex = '0123456789ABCDEF';

let randomColor= '#';

const getRandomColor = () => {
    randomColor = '#';
    // [0, 1)
    for (let i = 0; i < 6; i++) {
        //randomColor = randomColor + hex[Math.floor(Math.random()*hex.length)];
        randomColor += hex[Math.floor(Math.random()*hex.length)];
        
    }
    console.log(randomColor);
}

btn.addEventListener('click', () => {
    getRandomColor(); 
    block.style.backgroundColor = randomColor;
    color.innerHTML = randomColor;
})