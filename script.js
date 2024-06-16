const slider = document.querySelectorAll('.slider_cards div');
const btns = document.querySelectorAll('.buttons button');

let drinksBtn = document.querySelector('.drinks');
let pizzaBtn = document.querySelector('.pizza');
let burgersBtn = document.querySelector('.burgers');
let pastaBtn = document.querySelector('.pasta');

console.log(slider);
console.log(btns);

jQuery(document).ready(function(){
    $.stellar();
});

let options = {
    root: null,
    rootMargin: "5px",
    threshold: 0.0,
  };

let callback = function (entries, observer) {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry);
            entry.target.classList.add('_active');
            observer.unobserve(entry.target);
        }
      });
  };

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim');
console.log(targets);

targets.forEach(target => {
    observer.observe(target);
})


const showCards = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    console.log(e.target);
    slider.forEach(slide => {slide.classList.add('hide')

    if(slide.dataset.name === e.target.dataset.name){
        slide.classList.remove('hide')
    }});
}

btns.forEach(btn => btn.addEventListener('click', showCards))

window.addEventListener('load', () => {
    slider.forEach(slide => {slide.classList.add('hide')})
    let activeSlide = document.querySelector('.active');
    slider.forEach(slide => {
        if(slide.dataset.name === activeSlide.dataset.name){
            slide.classList.remove('hide')
        }}) 
        
        
})

