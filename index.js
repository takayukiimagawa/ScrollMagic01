const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from("#hello-world", 0, { opacity: 0 });
tl.from("#hello-world-cover", 0.3, { width: 0 });
tl.from("#hello-world-cover02", 0.6, { width: 0 });
tl.from("#hello-world-cover03", 0.3, { width: 0 });
tl.to("#hello-world-cover", 1, { width: 0, x: 2000 });
tl.to("#hello-world-cover02", 0.5, { width: 0, x: 3000 });
tl.to("#hello-world-cover03", 0.1, { width: 0, x: 4000 });

const scene = new ScrollMagic.Scene({
  triggerElement: ".sec02",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".sec02")
  .setTween(tl)
  .addTo(controller);
