const visual = document.querySelector(".hero-visual");

window.addEventListener("mousemove", (event) => {

  const x = (event.clientX / window.innerWidth - 0.5) * 12;
  const y = (event.clientY / window.innerHeight - 0.5) * 12;

  if (visual) {
    visual.style.transform =
      `translate(${x}px, ${y}px)`;
  }

});


const particles = document.querySelectorAll(
  ".background-particles span"
);

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  particles.forEach((particle, index) => {

    const speed = 0.015 + index * 0.006;

    particle.style.transform =
      `translateY(${scroll * speed}px)`;

  });

});