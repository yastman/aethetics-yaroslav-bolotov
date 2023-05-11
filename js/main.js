const tabs = document.querySelectorAll(".tab_item");
const texts = document.querySelectorAll(".tab_text");
let activeIndex = 0;

texts.forEach((text) => (text.style.display = "none"));

function setActive(index) {
  if (tabs[activeIndex]) {
    tabs[activeIndex].classList.remove("active");
    texts[activeIndex].style.display = "none";
  }

  activeIndex = index;
  tabs[activeIndex].classList.add("active");
  texts[activeIndex].style.display = "block";
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => setActive(index));
});

setActive(0);
