document.addEventListener('DOMContentLoaded', function() {

    let modalButton = document.querySelectorAll('.form__button'),
        // overlay     = document.querySelector('#overlay-modal'),
        closeButton = document.querySelectorAll('.modal__confirm');

    modalButton.forEach(function(item){

        item.addEventListener('click', function(e) {

        e.preventDefault();

        const inputName = document.getElementById("name"),
        inputEmail = document.getElementById("email"),
        inputPhone = document.getElementById("phone"),
        modalElem = document.querySelector('.checkout');

        if (inputName.value == "") {
            alert("Inputs must be filled!")
        }else{
            if (inputEmail.value == "") {
                alert("Inputs must be filled!")
            }else{
                if (inputPhone.value == "") {
                    alert("Inputs must be filled!")
                }else{
                    modalElem.classList.add('active');
                }
            }
        }
             
        // overlay.classList.add('active');
    });

});

    closeButton.forEach(function(item){

        item.addEventListener('click', function(e) {
        let parentModal = this.closest('.checkout');

        parentModal.classList.remove('active');
        // overlay.classList.remove('active');
    });

});

    document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;

        if (key === 27) {
            document.querySelector('.checkout.active').classList.remove('active');
            // document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

    // overlay.addEventListener('click', function() {
    //     document.querySelector('.modal.active').classList.remove('active');
    //     this.classList.remove('active');
    // });

});