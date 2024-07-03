function horizontalScrollAnimation() {
  gsap.to(".slide", {
    transform: "translate(-300%)",
    duration: 2,
    scrollTrigger: {
      trigger: ".slide",
      start: "top 0",
      end: "+=3000",
      scrub: 0.3,
    },
  });
}


horizontalScrollAnimation();
