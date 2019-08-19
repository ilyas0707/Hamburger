document.addEventListener('DOMContentLoaded', function() {

    let modalButton = document.querySelectorAll('.checkout__link'),
        overlay     = document.querySelector('#overlay-modal'),
        closeButton = document.querySelectorAll('.modal__cross');

    modalButton.forEach(function(item){

        item.addEventListener('click', function(e) {

        e.preventDefault();

        let modalElem = document.querySelector('.modal[data-modal="1"]');

        modalElem.classList.add('active');
        overlay.classList.add('active');
    });

});

    closeButton.forEach(function(item){

        item.addEventListener('click', function(e) {
        let parentModal = this.closest('.modal');

        parentModal.classList.remove('active');
        overlay.classList.remove('active');
    });

});

    document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;

        if (key === 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

});