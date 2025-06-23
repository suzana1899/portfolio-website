const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransition() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].classList = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.classList.add("active-btn");
    });
  }

  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    console.log(e.target);
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  // toggle theme
  const themBtn = document.querySelector(".theme-btn");
  themBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}
pageTransition();
