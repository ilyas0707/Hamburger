document.addEventListener('DOMContentLoaded', function() {

    let modalButton = document.querySelectorAll('.form__button')

    modalButton.forEach(function(item){

        item.addEventListener('click', function(e) {

        e.preventDefault();

        let modalElem = document.querySelector('.checkout');

        modalElem.classList.add('active');
    });

});
});