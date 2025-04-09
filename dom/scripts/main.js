const btnGroup = document.querySelector('.btn-group');

const prevBtn = document.querySelector('button.btn:nth-child(1)');
if (prevBtn){
    prevBtn.classList.add('btn-info');
}
const numBtn = document.querySelector('button.btn:nth-child(2)');
if (numBtn){
    numBtn.classList.add('btn-primary');
}
const nextBtn = document.querySelector('button.btn:nth-child(3)');
if (nextBtn){
    nextBtn.classList.add('btn-info');
}