const prevComment = document.querySelector('.feedback__button--left');
const nextComment = document.querySelector('.feedback__button--right');

const comments = [...document.querySelectorAll('.feedback__card-content')];
let currentIndex = 0;

prevComment.addEventListener('click', () => {
    comments[currentIndex].classList.add('hidden');
    if(currentIndex === 0) {
        currentIndex = comments.length - 1;
    } else {
        currentIndex--;
    }
    comments[currentIndex].classList.remove('hidden');
})

nextComment.addEventListener('click', () => {
    comments[currentIndex].classList.add('hidden');
    if(currentIndex === comments.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    comments[currentIndex].classList.remove('hidden');
})