let ctn = document.querySelector(".ctn");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

box1.addEventListener('click', () => {
    ctn.style.cssText = "background-image: url(./images/girl.jpg)"
})

box2.addEventListener('click', () => {
    ctn.style.cssText = "background-image: url(./images/girl1.jpg)"
})

box3.addEventListener('click', () => {
    ctn.style.cssText = "background-image: url(./images/girl2.jpg)"
})