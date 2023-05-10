let tabs = document.querySelectorAll('.tab_item')
let texts = document.querySelectorAll('.tab_text')

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		tabs.forEach(tab => {
			tab.classList.remove('active')
		})
		tab.classList.add('active')

		texts.forEach(text => {
			text.style.display = 'none'
		})
		texts[index].style.display = 'block'
	})
})

texts[0].style.display = 'block'
tabs[0].classList.add('active')
