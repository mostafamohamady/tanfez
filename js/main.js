let startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", function () {

  startBtn.style = "display:none";

  gsap.to(".behind-logo", {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "myBounce",
  });
  gsap.to(".logo", { scale: 2, duration: 0.7, delay: 0.2 });
  gsap.to(".logo", { y: "72px", duration: 0.5, delay: 1 });
  gsap.to(".logo1", {
    display: "block",
  
    
    duration: 0.5,
    delay: 1.5,
    scale: 1
  });
  gsap.to(".logo2", {
    display: "block",
    
    duration: 0.5,
    delay: 2,
    scale: 1
  });
  gsap.to(".logo3", {
    display: "block",
    
    duration: 0.5,
    delay: 2.5,
    scale: 1
  });
  gsap.to(".leftanimation", {
    x:"25vw",
    
    duration: 0.8,
    delay: 3,
    
  });


  gsap.to(".logo-container", {
    y: "-10vh",
    scale: 0.8,
    duration: 0.8,
    delay: 3,
    scale: 1
  });
  gsap.to(".tanfiz-title", {
    display: "block",
    y: "-20vh",
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
    y: "-55vh",
    scale: 0.9,
    duration: 0.8,
    delay: 4.5,
  });
  gsap.to(".login-form", {
    display: "block",
    y: "-55vh",
    scale: 0.9,
    duration: 0.8,
    delay: 4.5,
  });
});


let showPassBtn = document.querySelector("#showPasswprd");
let inputPassword = document.querySelector("#inputPass");
let showPassIcon = document.querySelector("#showPassIcon");

showPassBtn.addEventListener("click", function () {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    showPassIcon.setAttribute("src", "../imges/showpassword.svg");

    
  } else {
    inputPassword.type = "password";
    showPassIcon.setAttribute("src", "../imges/hidepass.svg");

    
  }
});