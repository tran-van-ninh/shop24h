window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

let mainImage = $('#main-img');
let smallImg = $$('.small-img');

smallImg.forEach(function(smallImage){
    smallImage.addEventListener('click', function(e){
        console.log(e.target);
        mainImage.src = e.target.src;
    })
})