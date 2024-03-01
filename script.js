const body = document.body;
const buttonNext = document.querySelector('.work__button-next');
const buttonPrev = document.querySelector('.work__button-prev');
const sliderLine = document.querySelectorAll('.work__item');
const itemPoint = document.querySelectorAll(".item-point");
const menuLink = document.querySelectorAll('.menu__link');
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list-adaptive');
const navMenu = document.querySelector('.menu__mobile');
const menuItem = document.querySelectorAll('.menu__item')
const telBtn = document.querySelectorAll('.tel-button');
const callForm = document.querySelector('.call-form')
let offset = 0;

const removeMenuActive = () => {
    menuLink.forEach(function (i) {
        i.classList.remove('menu__link--active')
    })
}
menuLink.forEach(function (i) {
    i.addEventListener('click', function () {
        removeMenuActive();
        i.classList.add('menu__link--active')
    })
})

buttonNext.addEventListener('click', function () {
    offset += 390;
    sliderLine.forEach(function (i) {
        i.style.right = offset + "px"
    })
    console.log(offset);
    if (offset === 1170) {
        buttonNext.style.display = 'none';
    }
    if (offset >= 390) {
        buttonPrev.style.display = 'block';
    }
})
buttonPrev.addEventListener('click', function () {
    offset -= 390;
    console.log(offset);
    sliderLine.forEach(function (i) {
        i.style.right = offset + "px"
    })
    if (offset <= 1170) {
        buttonNext.style.display = 'block';
    }
    if (offset === 0) {
        buttonPrev.style.display = 'none';
    }
})
const removeAllActive = () => {
    return itemPoint.forEach(item => item.classList.remove('item-point--active'));
};
itemPoint.forEach(function (i) {
    i.addEventListener('click', async (e) => {
        await removeAllActive();
        e.target.classList.add('item-point--active')
        if (e.target.classList.contains('item-point1')) {
            sliderLine.forEach(function (i) {
                i.style.right = 0 + "px"
            })
        } else if (e.target.classList.contains('item-point2')) {
            sliderLine.forEach(function (i) {
                i.style.right = 970 + "px"
            })
        } else if (e.target.classList.contains('item-point3')) {
            sliderLine.forEach(function (i) {
                i.style.right = 1960 + "px"
            })
        }
    })
});

window.addEventListener("resize", function () {
    if (window.innerWidth <= 1200) {
        sliderLine.forEach(function (i) {
            i.style.right = 0 + "px"
        })
        removeAllActive();
        itemPoint.forEach(i => i.classList.contains('item-point1') ? i.classList.add('item-point--active') : false)
        buttonPrev.style.display = 'none';
        buttonNext.style.display = 'block';
        offset = 0;
    }

    if (window.innerWidth > 1024) {
        navMenu.style.display = 'none';
        menuList.style.display = 'flex';
        menuBtn.classList.remove('menu__btn--active')
        body.style.overflowY = 'visible'
    }

    if (window.innerWidth <= 1024) {
        menuList.style.display = 'none'
        navMenu.style.display = 'none'
        menuBtn.classList.remove('menu__btn--active')
        body.style.overflowY = 'visible'
    }

    if (window.innerWidth >= 800) {
        document.querySelector('.work__items').scrollLeft = document.documentElement.scrollLeft = 0;
    }
})

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('menu__btn--active');
    if (menuBtn.disabled) {
        return
    }
    menuBtn.disabled = true;
    setTimeout(() => {
        menuBtn.disabled = false;
        menuBtn.classList.remove("disabled")
    }, 200);
    if (menuBtn.classList.contains('menu__btn--active')) {
        setTimeout(() => menuList.style.display = 'flex', 200);
        navMenu.style.display = 'block';
        body.style.overflow = 'hidden';
        document.querySelector('.html').classList.remove('html--active')
    } else {
        menuList.style.display = 'none';
        navMenu.style.display = 'none';
        body.style.overflowY = 'visible'
        document.querySelector('.html').classList.add('html--active')
    }
})
menuItem.forEach(i => i.addEventListener('click', function () {
    if (window.innerWidth <= 1024) {
        menuBtn.classList.remove('menu__btn--active');
        navMenu.style.display = 'none';
        menuList.style.display = 'none'
        body.style.overflowY = 'visible'
        document.querySelector('.html').classList.add('html--active')
    }
}))

telBtn.forEach(i => i.addEventListener('click', function () {
    alert('hell')
}))
document.getElementById("year").innerHTML = new Date().getFullYear();







