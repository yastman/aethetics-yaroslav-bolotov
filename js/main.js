let btns = document.querySelectorAll(".button-show-more");
let popup = document.querySelector(".popup");

// click on button to open modal
btns.forEach(function (item) {
  item.onclick = function (event) {
    event.preventDefault();
    popup.classList.add("open");
  };
});

// find  button to close modal

let closeBtn = document.querySelector(".close_btn");

// add event  to close modal button

closeBtn.onclick = function () {
  popup.classList.remove("open");
};

// outside click event

popup.onclick = function () {
  popup.classList.remove("open");
};

// outside modal close

let popupBox = document.querySelector(".popup_box");
popupBox.onclick = function (event) {
  event.stopPropagation();
};
