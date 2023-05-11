/*
TODO:
1.Создать функцию
    // Если есть активная вкладка, убираем у нее класс 'active' и скрываем связанный текст
    // Устанавливаем новую активную вкладку и показываем связанный текст
2. После этого добавить привязать функцию к клику на вкладку
3.запустить функцию
const tabs = document.querySelectorAll('.tab_item');
const texts = document.querySelectorAll('.tab_text');
let activeIndex = 0;

function setActive(index) {
    // Если есть активная вкладка, убираем у нее класс 'active' и скрываем связанный текст
    if (tabs[activeIndex]) {
        tabs[activeIndex].classList.remove('active');
        texts[activeIndex].classList.remove('visible');
    }

    // Устанавливаем новую активную вкладку и показываем связанный текст
    activeIndex = index;
    tabs[activeIndex].classList.add('active');
    texts[activeIndex].classList.add('visible');
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setActive(index));
});

setActive(0); // Initialize the first tab as active.

 */
const tabs = document.querySelectorAll('.tab_item')
const texts = document.querySelectorAll('.tab_text')
let activeIndex = 0

function setActive(index) {
	if (tabs[activeIndex]) {
		tabs[activeIndex].classList.remove('active')
		texts[activeIndex].classList.remove('visible')
	}
	activeIndex = index
	tabs[activeIndex].classList.add('active')
	texts[activeIndex].classList.add('visible')
}
tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => setActive(index))
})

setActive(0)
