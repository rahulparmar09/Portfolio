// let abb = document.querySelector(".ab");
// let about = document.querySelector(".about");

// abb.addEventListener("click", function() {
//     about.style.display = "block";
// })
// abb.addEventListener("dblclick", function() {
//     about.style.display = "none";
// })
// abb.addEventListener("click", function () {
//   about.style.display = about.style.display === "block" ? "none" : "block";
// });

// let sk = document.querySelector(".sk");
// let skill = document.querySelector(".skill");

// sk.addEventListener("click", function() {
//     skill.style.display = "block";
// })
// sk.addEventListener("dblclick", function() {
//     skill.style.display = "none";
// })
// sk.addEventListener("click", function () {
//   skill.style.display = skill.style.display === "block" ? "none" : "block";
// });

let certi = document.querySelector(".gg");
let gallary = document.querySelector(".gallary");

let ss = document.querySelector(".ss");
let skill = document.querySelector(".skill");

let pp = document.querySelector(".pp");
let Project = document.querySelector(".packages");

// certi
certi.addEventListener("click", function () {
  gallary.style.display = "block";
  skill.style.display = "none";
  Project.style.display = "none";

})
// project
pp.addEventListener("click", function () {
  Project.style.display = "block";
  skill.style.display = "none";
  gallary.style.display = "none";

})
// skill
ss.addEventListener("click", function () {
  skill.style.display = "block";
  Project.style.display = "none";
  gallary.style.display = "none";

})

// toogle
// const themeSwitch = document.getElementById("themeSwitch");
// themeSwitch.addEventListener("change", () => {
//   document.body.classList.toggle("dark-mode");
// });

// icon
const themeToggle = document.getElementById("toglu");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle icon from moon to sun
  const icon = themeToggle.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});
