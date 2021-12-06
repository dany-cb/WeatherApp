import gsap from "gsap";

const fadeIn = (obj) => {
  return gsap.from(obj, {
    duration: 1.8,
    ease: "power2.out",
    opacity: 0,
  });
};

const slideDown = ({ wave, searchBar }, onComplete) => {
  const tl = gsap.timeline({ onComplete: onComplete });

  tl.to(wave, {
    duration: 1.5,
    yPercent: 80,
    ease: "sine.out",
  });

  tl.to(
    searchBar,
    {
      duration: 1.5,
      top: "90%",
      ease: "sine.out",
    },
    "<"
  );

  tl.to(searchBar, {
    duration: 1.5,
    width: "50%",
    height: "6%",
    left: "25%",
    opacity: 0,
    ease: "power2.out",
    fontSize: "0.2em",
  });

  return tl;
};

const waveB2F = (obj) => {
  const tl = gsap.timeline();
  tl.to(obj, {
    duration: "2",
    xPercent: 44,
    ease: "sine.inOut",
  });
  tl.to(obj, {
    duration: "6",
    xPercent: -44,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  return tl;
};

export { slideDown, waveB2F, fadeIn };
