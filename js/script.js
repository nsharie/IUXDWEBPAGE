const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove",function(e){
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"});
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".content");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

const items = document.querySelector("nav-link");

// items.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// })

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
