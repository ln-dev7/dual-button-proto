import "./style.scss";
import gsap from "gsap";

const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const icon3 = document.querySelector(".icon3");
const icon4 = document.querySelector(".icon4");
const icon5 = document.querySelector(".icon5");
const icon6 = document.querySelector(".icon6");

const icons = document.querySelectorAll(".icon");

const cursor = document.querySelector(".cursor");

const ellipse1 = document.querySelector(".ellipse-1");
const ellipse3 = document.querySelector(".ellipse-3");
const ellipse4 = document.querySelector(".ellipse-4");

const hexagon = document.querySelector(".hexagon");

let open = false;

ellipse1.addEventListener("click", (e) => {
  const tl = gsap.timeline();
  if (open) {
    open = false;
    gsap.to(cursor, {
      background: "#051a2a",
      ease: "none",
      duration: 0.4,
    });
    tl.to(ellipse3, {
      width: "536px",
      height: "536px",
      borderRadius: "536px",
      background: "#051F32",
      ease: "none",
      duration: 0.3,
    });
    tl.to(hexagon, {
      scale: 0.5,
      ease: "none",
      duration: 0.3,
    });
    gsap.to(ellipse4, {
      ease: "none",
      duration: 0.3,
      scale: 0.8,
      opacity: 0,
    });
    gsap.to(icons, {
      ease: "none",
      duration: 0.3,
      delay: 0.3,
      rotate: 0,
    }); 
    gsap.to(ellipse1, {
      rotate: 0,
      ease: "none",
      duration: 0.4,
    });
    gsap.to(".icon2 path, .icon3 path, .icon4 path, .icon5 path, .icon6 path", {
      fill: "#095792",
      ease: "none",
      duration: 0.4,
    });
  } else {
    open = true;
    gsap.to(cursor, {
      background: "#0AF966",
      ease: "none",
      duration: 0.4,
    });
    tl.to(ellipse3, {
      width: "800px",
      height: "800px",
      borderRadius: "800px",
      background: "#051a2b",
      ease: "none",
      duration: 0.3,
    });
    tl.to(hexagon, {
      scale: 0.8,
      ease: "none",
      duration: 0.3,
    });
    gsap.to(ellipse4, {
      ease: "none",
      duration: 0.3,
      //transform: "translate(-50%, -50%) scale(1)",
      scale: 1,
      opacity: 1,
    });
    gsap.to(icons, {
      ease: "none",
      duration: 0.3,
      delay: 0.3,
      rotate: 360,
    });
  }
});

icon1.addEventListener("click", () => {
  gsap.to(ellipse1, {
    rotate: 0,
    ease: "none",
    duration: 0.4,
  });
  gsap.to(cursor, {
    background: "#0AF966",
    ease: "none",
    duration: 0.4,
  });
  gsap.to(".icon1 path", {
    fill: "#0AF966",
    ease: "none",
    duration: 0.4,
  });

  gsap.to(".icon2 path, .icon3 path, .icon4 path, .icon5 path, .icon6 path", {
    fill: "#095792",
    ease: "none",
    duration: 0.4,
  });
});

icon2.addEventListener("click", () => {
  gsap.to(ellipse1, {
    rotate: 53,
    ease: "none",
    duration: 0.4,
  });
  gsap.to(cursor, {
    background: "#0AF966",
    ease: "none",
    duration: 0.4,
  });
  gsap.to(".icon2 path", {
    fill: "#FFF",
    ease: "none",
    duration: 0.4,
  });

  gsap.to(".icon3 path, .icon4 path, .icon5 path, .icon6 path", {
    fill: "#095792",
    ease: "none",
    duration: 0.4,
  });
});

icon3.addEventListener("click", () => {
  gsap.to(ellipse1, {
    rotate: 122,
    ease: "none",
    duration: 0.4,
  });
  gsap.to(cursor, {
    background: "#0AF966",
    ease: "none",
    duration: 0.4,
  });
  gsap.to(".icon3 path", {
    fill: "#FFF",
    ease: "none",
    duration: 0.4,
  });

  gsap.to(".icon2 path, .icon4 path, .icon5 path, .icon6 path", {
    fill: "#095792",
    ease: "none",
    duration: 0.4,
  });
});

icon4.addEventListener("click", () => {
  gsap.to(ellipse1, {
    rotate: 180,
    ease: "none",
    duration: 0.4,
  });
  gsap.to(cursor, {
    background: "#920909",
    ease: "none",
    duration: 0.4,
  });
  gsap.to(".icon4 path", {
    fill: "#920909",
    ease: "none",
    duration: 0.4,
  });

  gsap.to(".icon2 path, .icon3 path, .icon5 path, .icon6 path", {
    fill: "#095792",
    ease: "none",
    duration: 0.4,
  });
});

icon5.addEventListener("click", () => {
  gsap.to(ellipse1, {
    rotate: 235,
    ease: "none",
    duration: 0.4,
  });
  gsap.to(cursor, {
    background: "#0AF966",
    ease: "none",
    duration: 0.4,
  });
  gsap.to(".icon5 path", {
    fill: "#FFF",
    ease: "none",
    duration: 0.4,
  });

  gsap.to(".icon2 path, .icon3 path, .icon4 path, .icon6 path", {
    fill: "#095792",
    ease: "none",
    duration: 0.4,
  });
});

icon6.addEventListener("click", () => {
  gsap.to(ellipse1, {
    rotate: 305,
    ease: "none",
    duration: 0.4,
  });
  gsap.to(cursor, {
    background: "#0AF966",
    ease: "none",
    duration: 0.4,
  });
  gsap.to(".icon6 path", {
    fill: "#FFF",
    ease: "none",
    duration: 0.4,
  });

  gsap.to(".icon2 path, .icon3 path, .icon4 path, .icon5 path", {
    fill: "#095792",
    ease: "none",
    duration: 0.4,
  });
});

/*
    transform: rotate(0deg);
    transform: rotate(53deg);
    transform: rotate(122deg);
    transform: rotate(180deg);
    transform: rotate(235deg);
    transform: rotate(305deg);
*/
