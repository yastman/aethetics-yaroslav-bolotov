// let btns = document.querySelectorAll(".button-show-more");
// let popup = document.querySelector(".popup");
//
// // click on button to open modal
// btns.forEach(function (item) {
//   item.onclick = function (event) {
//     event.preventDefault();
//     popup.classList.add("open");
//   };
// });
//
// let closeBtn = document.querySelector(".popup_box .close_btn");
//
// if (popup) {
//   closeBtn.onclick = function () {
//     popup.classList.remove("open");
//   };
//   popup.onclick = function () {
//     popup.classList.remove("open" + "" + "");
//   };
//   let popupBox = document.querySelector(".popup_box");
//   popupBox.onclick = function (event) {
//     event.stopPropagation();
//   };
// }
//
// let form = document.querySelector(".call_me");
// form.onsubmit = function (event) {
//   event.preventDefault();
//
//   let data = {};
//   let inputs = Array.from(form.elements);
//   let haveErrors = false;
//   let errorText = null;
//   let inputWithE`rror = null;
//   inputs.forEach(function (item) {
//     if (item.value && item.tagName.toLowerCase() !== "button") {
//       data[item.name] = item.value;
//       console.log(data);
//     }
//   });
//
//   console.log(inputs);
//
//   if (document.querySelector(".--error")) {
//     document.querySelector(".--error").classList.remove("--error");
//   }
//   if (document.querySelector(".error-info")) {
//     document.querySelector(".error-info").remove();
//   }
//
//   let inputWithErrors;
//   if (!data.telephone) {
//     errorText = "Write telephone";
//     inputWithErrors = form.elements.telephone;
//     console.log(inputWithErrors);
//   }
//   if (!data.userName) {
//     errorText = "Write name";
//     inputWithErrors = form.elements.userName;
//     console.log(inputWithErrors);
//   }
//   if (data.userName && data.userName.length < 3) {
//     errorText = "need more then 3 symbol";
//     inputWithErrors = form.elements.userName;
//     console.log(inputWithErrors);
//   }
//   if (errorText) {
//     haveErrors = true;
//     inputWithError = null;
//     console.log(inputWithErrors);
//   }
//   console.log(!haveErrors);
//   if (!haveErrors) {
//     form.style.display = "none";
//     let thanks = document.createElement("div");
//     thanks.classList.add("form-submitted");
//     thanks.classList.add("form-submitted--success");
//     thanks.innerHTML = '<h2 class="apoinment__title"> Done</h2>';
//     form.parentNode.appendChild(thanks);
//     if (document.querySelector(".--error")) {
//       document.querySelector(".--error").classList.remove("--error");
//     }
//   } else {
//     if (document.querySelector(".error-info")) {
//       document.querySelector(".error-info").innerText = errorText;
//     } else {
//       let error = document.createElement("p");
//       error.classList.add("error-info");
//       error.innerText = errorText;
//       if (inputWithErrors) {
//         inputWithErrors.parentNode.appendChild(error);
//         inputWithErrors.classList.add("--error");
//       }
//     }
//   }
// };
//
// let telInputs = Array.from(document.querySelectorAll("input[type='tel']"));
// document.addEventListener("input", function (event) {
//   if (
//     event.target.tagName.toLowerCase() === "input" &&
//     event.target.getAttribute("type") === `tel`
//   ) {
//     let input = event.target;
//     if (input.value.length === 1 && input.value !== "+") {
//       input.value = "+" + input.value;
//     }
//     if (input.value.length === 4) {
//       input.value = input.value + " (";
//     }
//     if (input.value.length === 8) {
//       input.value = input.value + ") ";
//     }
//     if (input.value.length === 13 || input.value.length === 16) {
//       input.value = input.value + "-";
//     }
//     if (input.value.length > 18) {
//       input.value = input.value.slice(0, 19);
//     }
//   }
// });

// let numbersToAnimate = document.querySelectorAll(".services__number");
//
// document.addEventListener("scroll", function () {
//   numbersToAnimate.forEach(function (item) {
//     if (item.getBoundingClientRect().top <= window.innerHeight / 2) {
//       startAnimate(item);
//     }
//   });
// });
//
// function startAnimate(item) {
//   let start = 0;
//   let max = parseInt(item.getAttribute("data-max"));
//   if (item.getAttribute("data-animated")) {
//     item.setAttribute("data-animated", "true");
//     let interval = setInterval(function () {
//       console.log(max >= start);
//       if (max >= start) {
//         item.innerText = start;
//         start++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 10);
//   }
// }

/*TODO:
1 знайти линки
2 знайти контент до этих линк
3 связать эти линки

 */

// function Tabs(target) {
// 	this.target = document.querySelector(target)
// 	this.initTabs = () => {
// 		Array.from(this.target.children).forEach(item => {
// 			console.log(item)
// 			const getContent = document.querySelector(
// 				`.tab_content .${item.getAttribute('data-tab')}`
// 			)
// 			console.log(`.tab_content .${item.getAttribute('data-tab')}`)
// 		})
// 	}
// }
//
// let tab = new Tabs('.tabs')
// console.log(tab)
// tab.initTabs()

/*
// Находим все табы и тексты
const tabs = document.querySelectorAll('.tab_item')
const texts = document.querySelectorAll('.tab_text')


// Добавляем обработчик клика на каждый таб

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		// Скрываем все тексты
		texts.forEach(text => {
			text.style.display = 'none'
		})

		// Показываем нужный текст
		texts[index].style.display = 'block'

		// Добавляем класс "active" текущему табу
		tabs.forEach(tab => {
			tab.classList.remove('active')
		})
		tab.classList.add('active')
	})
})

// Показываем первый текст по умолчанию
texts[0].style.display = 'block'
tabs[0].classList.add('active')
 */

let tabs = document.querySelectorAll('.tab_item')
let texts = document.querySelectorAll('.tab_text')

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		texts.forEach(text => {
			text.style.display = 'none'
		})
		texts[index].style.display = 'block'
		tabs.forEach(tab => {
			tab.classList.remove('active')
		})
		tab.classList.add('active')
	})
})
texts[0].style.display = 'block'
tabs[0].classList.add('active')
