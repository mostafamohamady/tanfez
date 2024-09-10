let startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", function () {
  console.log("Star");
  startBtn.style = "display:none";

  gsap.to(".behind-logo", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "myBounce",
  });
  gsap.to(".logo", { scale: 2, duration: 0.7, delay: 0.2 });
  gsap.to(".logo", { y: "12vh", duration: 0.5, delay: 1 });
  gsap.to(".logo1", {
    display: "block",
    height: "150px",
    duration: 0.5,
    delay: 1.5,
  });
  gsap.to(".logo2", {
    display: "block",
    height: "150px",
    duration: 0.5,
    delay: 2,
  });
  gsap.to(".logo3", {
    display: "block",
    height: "150px",
    duration: 0.5,
    delay: 2.5,
  });
  gsap.to(".logo-container", {
    y: "-10vh",
    scale: 0.8,
    duration: 0.8,
    delay: 3,
  });
  gsap.to(".tanfiz-title", {
    display: "block",
    y: "-15vh",
    scale: 1.2,
    duration: 0.8,
    delay: 3.5,
  });
  gsap.to(".logo-container", {
    y: "-35vh",
    scale: 0.6,
    duration: 0.8,
    delay: 4.5,
  });
  gsap.to(".tanfiz-title", {
    display: "block",
    y: "-45vh",
    scale: 0.9,
    duration: 0.8,
    delay: 4.5,
  });
  gsap.to(".login-form", {
    display: "block",
    y: "-45vh",
    scale: 0.9,
    duration: 0.8,
    delay: 4.5,
  });
});




