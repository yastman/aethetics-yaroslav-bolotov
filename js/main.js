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
