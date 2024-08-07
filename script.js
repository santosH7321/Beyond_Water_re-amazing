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

function automaticBanner() {
  var tl = gsap.timeline({
    repeat: -1,
  });
  tl.to(
    ".banner-img",
    {
      transform: "translateX(-100%)",
      duration: 1,
      ease: "power4",
    },
    "+=3"
  );
  tl.to(
    ".banner-img",
    {
      transform: "translateX(-200%)",
      duration: 1,
      ease: "power4",
    },
    "+=3"
  );
  tl.to(
    ".banner-img",
    {
      transform: "translateX(-300%)",
      duration: 1,
      ease: "power4",
    },
    "+=3"
  );
  tl.to(
    ".banner-img",
    {
      transform: "translateX(-400%)",
      duration: 1,
      ease: "power4",
    },
    "+=3"
  );
}

function manulaBanner() {
  var btn = document.querySelector(".slide-btn");
  var move = 0;
  btn.addEventListener("click", function () {
    move += 100;

    if (move != 500) {
      gsap.to(".banner-img", {
        transform: `translateX(-${move}%)`,
      });
    } else {
      gsap.to(".banner-img", {
        duration: 0,
        transform: `translateX(0%)`,
      });
      move = 0;
    }
  });
}

horizontalScrollAnimation();
automaticBanner();
// manulaBanner();