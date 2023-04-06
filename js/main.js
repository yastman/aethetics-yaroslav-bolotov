// let elem1 = document;
// let elem2 = document.getElementsByClassName("first-view");
// let elem3 = document.getElementById("section");
// let elem4 = document.getElementsByTagName("section");
// let elem5 = document.getElementsByClassName("button-catalogue");
// let elem6 = document.querySelectorAll("section");
// let elem7 = document.querySelectorAll("#section");
// let elem8 = document.querySelector("#section > .layout > article > h2");
// console.log(elem8);

let btn = document.querySelectorAll("#button");
console.log(btn);
btn.forEach(function (item) {
  item.onclick = function (event) {
    event.preventDefault();
    document.querySelector(".popup").classList.add("open");
  };
});

let closeModal = document.querySelector(".close_btn");
closeModal.onclick = function () {
  document.querySelector(".popup.open").classList.remove("open");
};
