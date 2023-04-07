let btns = document.querySelectorAll(".button-show-more");
let popup = document.querySelector(".popup");
// click on button to open modal
btns.forEach(function (item) {
  item.onclick = function (event) {
    event.preventDefault();
    popup.classList.add("open");
  };
});

let closeModal = document.querySelector(".close_btn");

closeModal.onclick = function () {
  popup.classList.remove("open");
};

