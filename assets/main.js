window.addEventListener('scroll', function () {
    let scroll = window.scrollY || document.documentElement.scrollTop;
    const header = document.querySelector('header');

    if (scroll > 300) {
        header.classList.add('position-fixed');
    } else {
        header.classList.remove('position-fixed');
    }
});

document.addEventListener('click', function (e) {
    if (e.target.closest('.heading-toggler')) {
        const menu = document.querySelector('.heading-menu');
        if (menu) {
            menu.classList.toggle('show-menu');
        }
    }
});
