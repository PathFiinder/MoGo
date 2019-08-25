document.addEventListener('DOMContentLoaded', function (event) {
    const headerIconBars = document.body.querySelector('.header__icon--bars');
    headerIconBars.addEventListener('click', function () {
        document.body.querySelector('.header__navigation').classList.toggle('header__navigation--active');
    });

})