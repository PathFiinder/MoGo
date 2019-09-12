window.addEventListener('DOMContentLoaded', function () {


    //Scroll 

    const aboutUsPosTop = $('.about-us').offset().top
    const servicesPosTop = $('.services').offset().top
    const workPosTop = $('.work').offset().top
    const blogPosTop = $('.blog').offset().top
    const contactPosTop = $('.site-map').offset().top

    const positionTopArray = [aboutUsPosTop, servicesPosTop, workPosTop, blogPosTop, contactPosTop]
    const navButtonArray = ['about-us', 'services', 'work', 'blog', 'contact'];

    function toScroll(positionTop) {
        $('body, html').animate({
            scrollTop: positionTop
        }, 1000)
        document.querySelector('#navbarMenu').classList.remove('show')
    }

    navButtonArray.forEach((element, index) => {
        document.querySelector(`.nav-link--${element}`).addEventListener('click', () => {
            toScroll(positionTopArray[index])
        })
    });



    //Slider (quotes) - Accordion
    const servicesTwoAccordion = document.querySelector('#accordion');


    servicesTwoAccordion.addEventListener('click', (event) => {
        if (event.target.dataset.h) {
            const targets = ["One", "Two", "Three"];
            if (document.querySelector(`#collapse${event.target.dataset.h}`).classList.contains('show')) {

                targets.forEach(element => {
                    if (element != event.target.dataset.h) {
                        if (document.querySelector(`[data-arrow="${element}"]`).classList.contains('fa-arrow-up')) {
                            document.querySelector(`[data-arrow="${element}"]`).classList.remove('fa-arrow-up');
                            document.querySelector(`[data-arrow="${element}"]`).classList.add('fa-arrow-down')
                        }
                    }
                })

                if (document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.contains('fa-arrow-up')) {
                    document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.remove('fa-arrow-up');
                    document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.add('fa-arrow-down');
                }

            }
            if (!document.querySelector(`#collapse${event.target.dataset.h}`).classList.contains('show')) {

                targets.forEach(element => {
                    if (element != event.target.dataset.h) {
                        if (document.querySelector(`[data-arrow="${element}"]`).classList.contains('fa-arrow-up')) {
                            document.querySelector(`[data-arrow="${element}"]`).classList.remove('fa-arrow-up');
                            document.querySelector(`[data-arrow="${element}"]`).classList.add('fa-arrow-down')
                        }
                    }
                })

                if (document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.contains('fa-arrow-down')) {
                    document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.remove('fa-arrow-down');
                    document.querySelector(`[data-arrow="${event.target.dataset.h}"]`).classList.add('fa-arrow-up');
                }
            }
        }
    })









})