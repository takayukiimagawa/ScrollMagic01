const tl = new TimelineMax();
const tl02 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from("#hello-world", 0, { opacity: 0 });
tl.from("#hello-world-cover", 0.3, { width: 0, x: -2000 });
tl.to("#hello-world-cover", 0.3, { width: 0, x: 2000 });

tl02.from("#sec03-title", 0.3, { x: -2000 });
tl02.to("#sec03-title", 0.3, { x: 100 });

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
  //.setPin(".sec03")
  .setTween(tl02)
  .addTo(controller);
