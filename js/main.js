let btns = document.querySelectorAll(".button-show-more");
btns.forEach(function (item) {
  const popup = document.querySelector(".popup");
  const closeModal = popup.querySelector(".close_btn");
  const content = popup.querySelector(".popup_box");

  content.onclick = function (event) {
    event.stopPropagation();
  };
  item.onclick = function (event) {
    event.preventDefault();
    popup.classList.add("open");
  };

  function closePopup(event) {
    event.preventDefault();
    popup.classList.remove("open");
  }

  closeModal.onclick = closePopup;
  popup.onclick = closePopup;
});

//click outside
