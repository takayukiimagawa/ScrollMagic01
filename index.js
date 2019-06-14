const tl00 = new TimelineMax();
const tl = new TimelineMax();
const tl02 = new TimelineMax();
const tl03 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl00.from("#lorem-title", 0.3, { opacity: 1, letterSpacig: 1 });
tl00.to("#lorem-title", 1, { opacity: 0, letterSpacig: "1.2em" });

const scene00 = new ScrollMagic.Scene({
  triggerElement: ".sec01",
  offset: 600,
  duration: 700
})
  .setTween(tl00)
  .addTo(controller);

tl.from("#hello-world", 0, { opacity: 0 });
tl.from("#hello-world-cover", 0.3, { width: 0, x: -2000 });
tl.to("#hello-world-cover", 0.3, { width: 0, x: 2000 });

tl02.from(".sec03-title", 0.3, { x: -2000 });
tl02.to(".sec03-title", 0.3, { x: 100 });

const scene02 = new ScrollMagic.Scene({
  triggerElement: ".sec02",
  //offset: 150,
  triggerHook: "onCenter",
  duration: "100%"
})
  .setPin(".sec02")
  .setTween(tl)
  .addTo(controller);

const scene03 = new ScrollMagic.Scene({
  triggerElement: ".sec03",
  offset: -500,
  duration: "100%"
})
  .setClassToggle(".sec03-title", "toggled")
  .setTween(tl02)
  .addTo(controller);

const scene04 = new ScrollMagic.Scene({
  triggerElement: ".sec03",
  offset: 250,
  duration: "100%"
})
  .setClassToggle(".blah-blah", "reveal")
  .setTween(tl03)
  .addTo(controller);
