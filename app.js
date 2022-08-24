const class1 = document.querySelector(".section-top");
const button = document.querySelector(".btn");

console.log(class1);

function changeSlide() {
  if (class1.className === "section-top2") {
    class1.classList.remove("section-top2");
    class1.classList.add("section-top");
  } else if (class1.className === "section-top") {
    class1.classList.remove("section-top");
    class1.classList.add("section-top1");
  } else {
    class1.classList.remove("section-top1");
    class1.classList.add("section-top2");
  }
}
