const button = document.getElementById('button');

button.addEventListener('click', () => {
    let heading = document.getElementById('tipsTitle');
    let text = document.getElementById('tipsText');

    heading.innerText = "Tip";
    text.innerText = "This is the tip";
})

pow2Button.addEventListener('click', () => {

    let heading = document.getElementById('tipsTitle');
    let text = document.getElementById('tipsText');
    let link = `<a href="https://en.wikipedia.org/wiki/Square_(algebra)"
    aria-label="link to a web page with more info on power of two" target="_blank">Learn more</a>`;

    heading.innerText = "Square";
    text.innerHTML = `In mathematics, a square is the result of multiplying a number by itself. The verb "to square" is used to denote this operation. Squaring is the same as raising to the power 2, and is denoted by a superscript 2; for instance, the square of 3 may be written as 32, which is the number 9.`;
    text.innerHTML += `<br>${link}`;

})

pow3Button.addEventListener('click', () => {

    let heading = document.getElementById('tipsTitle');
    let text = document.getElementById('tipsText');
    let link = `<a href="https://en.wikipedia.org/wiki/Cube_(algebra)"
    aria-label="link to a web page with more info on power of three" target="_blank">Learn more</a>`;

    heading.innerText = "Cube";
    text.innerHTML = `In arithmetic and algebra, the cube of a number n is its third power, that is, the result of multiplying three instances of n together. The cube of a number or any other mathematical expression is denoted by a superscript 3, for example 23 = 8 or (x + 1)3.`;
    text.innerHTML += `<br>${link}`;

})

toggleButton.addEventListener('click', () => {

    let heading = document.getElementById('tipsTitle');
    let text = document.getElementById('tipsText');
    let link = `<a href="https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/numeracy/positive-and-negative-numbers.html"
    aria-label="link to a web page with more info on power of three" target="_blank">Learn more</a>`;

    heading.innerText = "Toggle";
    text.innerHTML = `Positive numbers are those which are greater than zero (>0). Negative numbers are those which are less than zero (<0). Examples of real-world uses of negative numbers include measuring temperatures which are below 0 and bank statements where money which has been withdrawn from an account is shown as negative.`;
    text.innerHTML += `<br>${link}`;

})

sinButton.addEventListener('click', () => {

    let heading = document.getElementById('tipsTitle');
    let text = document.getElementById('tipsText');
    let link = `<a href="https://byjus.com/maths/sin-cos-tan-values/"
    aria-label="link to a web page with more info on power of three" target="_blank">Learn more</a>`;

    heading.innerText = "Sin Cos Tan";
    text.innerHTML = `In trigonometry, sin cos and tan values are the primary functions we consider while solving trigonometric problems. These trigonometry values are used to measure the angles and sides of a right-angle triangle. Apart from sine, cosine and tangent values, the other three major values are cotangent, secant and cosecant.`;
    text.innerHTML += `<br>${link}`;

})

tanButton.addEventListener('click', () => {

    let heading = document.getElementById('tipsTitle');
    let text = document.getElementById('tipsText');
    let link = `<a href="https://byjus.com/maths/sin-cos-tan-values/"
    aria-label="link to a web page with more info on power of three" target="_blank">Learn more</a>`;

    heading.innerText = "Sin Cos Tan";
    text.innerHTML = `In trigonometry, sin cos and tan values are the primary functions we consider while solving trigonometric problems. These trigonometry values are used to measure the angles and sides of a right-angle triangle. Apart from sine, cosine and tangent values, the other three major values are cotangent, secant and cosecant.`;
    text.innerHTML += `<br>${link}`;

})

cosButton.addEventListener('click', () => {

    let heading = document.getElementById('tipsTitle');
    let text = document.getElementById('tipsText');
    let link = `<a href="https://byjus.com/maths/sin-cos-tan-values/"
    aria-label="link to a web page with more info on power of three" target="_blank">Learn more</a>`;

    heading.innerText = "Sin Cos Tan";
    text.innerHTML = `In trigonometry, sin cos and tan values are the primary functions we consider while solving trigonometric problems. These trigonometry values are used to measure the angles and sides of a right-angle triangle. Apart from sine, cosine and tangent values, the other three major values are cotangent, secant and cosecant.`;
    text.innerHTML += `<br>${link}`;

})

operationElements.forEach(element => {
    let heading = document.getElementById('tipsTitle');
    let text = document.getElementById('tipsText');

    element.addEventListener('click', () => {
        calculator.chooseOperation(element.getAttribute('data-operation'));
        switch (this.('data-operation')) {
            case '+':
                let link = `<a href="https://byjus.com/maths/sin-cos-tan-values/"
                aria-label="link to a web page with more info on power of three" target="_blank">Learn more</a>`;
            
                heading.innerText = "Addition";
                text.innerHTML = `In trigonometry, sin cos and tan values are the primary functions we consider while solving trigonometric problems. These trigonometry values are used to measure the angles and sides of a right-angle triangle. Apart from sine, cosine and tangent values, the other three major values are cotangent, secant and cosecant.`;
                text.innerHTML += `<br>${link}`;
            break
        
        }
    })
})


