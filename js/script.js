window.addEventListener('DOMContentLoaded', function () {


    const servicesTwoAccordion = document.querySelector('#accordion');


    servicesTwoAccordion.addEventListener('click', (event) => {
        if (event.target.dataset.h) {

            if (document.querySelector(`#collapse${event.target.dataset.h}`).classList.contains('show')) {
                if (document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.contains('fa-arrow-up')) {
                    document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.remove('fa-arrow-up');
                    document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.add('fa-arrow-down');
                }
            }
            if (!document.querySelector(`#collapse${event.target.dataset.h}`).classList.contains('show')) {
                if (document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.contains('fa-arrow-down')) {
                    document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.remove('fa-arrow-down');
                    document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.add('fa-arrow-up');
                }
            }
        }
    })









})