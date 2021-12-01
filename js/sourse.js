const upBtn = document.querySelector('.up-button'); // получаем div .up-button
const downBtn = document.querySelector('.down-button'); // получаем div .down-button
const container = document.querySelector('.container'); //получаем .container
const sideBar = document.querySelector('.sidebar'); // получаем div .sidebar

const mainSlide = document.querySelector('.main-slide'); // получаем div .main-slide
const slidesCount = mainSlide.querySelectorAll('div').length; // получаем все div из .main-slide и через length указываем, что нам нужно количество
let activeSlideIndex = 0;// переменная для активного слайда

sideBar.style.top = `-${(slidesCount -1)*100}vh` // выравниваем background /sidebar  и картинки в .main-slide //-1 потому что есть уже одна картинка на экране

upBtn.addEventListener('click', () => {
    changeSlide('up')
}); //добавляем обработчик событий для кнопок
downBtn.addEventListener('click', () => {
    changeSlide('down')
});

//при нажатии на up
function changeSlide(derection){
    if(derection === 'up'){
        activeSlideIndex++ // прибавляем 1 каждый раз когда нажимаем up
        if(activeSlideIndex === slidesCount){
            activeSlideIndex =0; // обнуление после того как activeSlideIndex достигает значение больше или равно slideCount
        }
    }else if(derection === 'down'){
        activeSlideIndex-- //отнимаем 1 каждый раз, когда нажимаем down
        if(activeSlideIndex<0){
            activeSlideIndex = slidesCount -1
        }
    }
    const height = container.clientHeight // получаем высоту контейнера
    mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`//перемещаем слайд ровно на длину контейнера, полученную из переменной height
    sideBar.style.transform = `translateY(${activeSlideIndex*height}px)`
}


