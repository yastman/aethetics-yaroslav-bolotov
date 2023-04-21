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
form.onsubmit = function (event) {
  event.preventDefault();

  let data = {};
  let inputs = Array.from(form.elements);
  let haveErrors = true;
  let errorText = "где то случилась ошибка";
  inputs.forEach(function (item) {
    // console.log(item.tagName);
    if (item.value && item.tagName.toLowerCase() !== "button") {
      data[item.name] = item.value;
      console.log(data);
    }
  });
  if (!data.userName) {
    errorText = "Write name";
  } else if (data.userName.length > 3) {
    errorText = "write correct name";
  } else if (!data.telephone) {
    errorText = "Write telephone";
  } else if (isNaN(data.telephone)) {
    errorText = "write correct telephone";
  } else {
    haveError = false;
  }
  if (!haveErrors) {
    form.style.display = "none";
    let thanks = document.createElement("div");
    thanks.classList.add("form-submitted");
    thanks.classList.add("form-submitted--success");
    thanks.innerHTML = '<h2 class="apoinment__title"> Done</h2>';
    form.parentNode.appendChild(thanks);
  } else {
    if (document.querySelector(".error-info")) {
      document.querySelector(".error-info").innerText = errorText;
    } else {
      let error = document.createElement("p");
      error.classList.add("error-info");
      error.innerText = errorText;
      form.querySelector(".button-wrapper").insertBefore(
        error,
        inputs.find(function (item) {
          return (
            item.tagName.toLowerCase() === "button" &&
            item.getAttribute("type") === "submit"
          );
        })
      );
    }
  }
};
