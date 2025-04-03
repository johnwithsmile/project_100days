const imageElement = document.getElementById("main-image");

new simpleParallax(imageElement, {
  scale: 1.2,
  delay: 0.6,
  transition: "cubic-bezier(0,0,0,1)",
});
