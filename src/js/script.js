const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const logo = document.getElementById("logo");

const items = menu.querySelectorAll("a");

// tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// hambuger
btn.addEventListener("click", navToggle);

// tabclick funtion
function onTabClick(e) {
  // console.log(e.target);

  // deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // hide all panels
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  // activate a new tab and new panel based on data-target
  e.target.classList.add("border-softRed", "border-b-4");

  // get the data-target
  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

// hamburger function
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  // items.forEach((item) => {
  //   item.addEventListener("click", () => {
  //     menu.classList.toogle("hidden");
  //     menu.classList.toogle("flex");
  //     // btn.classList.toggle("open");
  //     // menu.classList.remove("flex");
  //     // menu.classList.remove("hidden");
  //   });
  // });
}
