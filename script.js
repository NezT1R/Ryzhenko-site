let offset = 0;
const buttonNext = document.querySelector('.work__button-next');
const buttonPrev = document.querySelector('.work__button-prev');
const sliderLine = document.querySelectorAll('.work__item');
const itemPoint = document.querySelectorAll(".item-point");

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

if (document.documentElement.clientWidth < 1200){
    console.log("Hello world")
}






