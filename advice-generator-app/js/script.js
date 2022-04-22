


document.querySelector(".btn-submit").addEventListener('click', () => {
    
    getAdvice()
    
})

window.onload = function () {
    getAdvice();
}

async function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector(".advice-number").textContent = data.slip.id;
            document.querySelector(".advice").textContent = data.slip.advice;
        });
}