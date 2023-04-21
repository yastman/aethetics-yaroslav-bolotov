let btns = document.querySelectorAll(".button-show-more");
let popup = document.querySelector(".popup");

// click on button to open modal
btns.forEach(function (item) {
  item.onclick = function (event) {
    event.preventDefault();
    popup.classList.add("open");
  };
});

let closeBtn = document.querySelector(".popup_box .close_btn");

if (popup) {
  closeBtn.onclick = function () {
    popup.classList.remove("open");
  };
  popup.onclick = function () {
    popup.classList.remove("open" + "" + "");
  };
  let popupBox = document.querySelector(".popup_box");
  popupBox.onclick = function (event) {
    event.stopPropagation();
  };
}

let form = document.querySelector(".call_me");

if (form) {
  form.onsubmit = function (event) {
    event.preventDefault();

    let data = {};
    console.log(form.elements);
    form.style.display = "none";
    let thanks = document.createElement("div");
    thanks.classList.add("form-submitted");
    thanks.classList.add("form-submitted--success");
    thanks.innerHTML = '<h2 class="apoinment__title"> Done</h2>';
    form.parentNode.appendChild(thanks);
  };
}
