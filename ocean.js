
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("orca-container");
  const particles = document.getElementById("ocean-particles");

  if (!container || !particles) return;

  // Orca-Silhouette als SVG
  const orcaSVG = `
    <svg viewBox="0 0 300 130"
         xmlns="http://www.w3.org/2000/svg">
      <g fill="#020b18">
        <!-- Schwanzflosse -->
        <path d="M65 65 L12 27 Q28 59 56 65
                 Q28 71 12 103 L65 65Z"/>

        <!-- Körper -->
        <path d="M55 65
                 Q100 28 165 42
                 Q224 42 282 65
                 Q225 88 165 87
                 Q95 98 55 65Z"/>

        <!-- Rückenflosse -->
        <path d="M140 47
                 Q151 13 165 3
                 Q173 3 172 46Z"/>

        <!-- Brustflosse -->
        <path d="M166 78
                 Q183 107 217 126
                 Q190 116 150 84Z"/>
      </g>
    </svg>
  `;

  // Unterschiedliche Tiere und Tiefen
  const orcas = [
    { size: 250, top: 22, duration: 65, delay: -20, opacity: .75, blur: 0, reverse: false },
    { size: 160, top: 48, duration: 90, delay: -60, opacity: .40, blur: 1, reverse: true },
    { size: 110, top: 70, duration: 115, delay: -30, opacity: .24, blur: 2, reverse: false },
    { size: 195, top: 84, duration: 80, delay: -45, opacity: .55, blur: .5, reverse: true }
  ];

  orcas.forEach(orca => {
    const el = document.createElement("div");

    el.className = "orca" + (orca.reverse ? " reverse" : "");
    el.innerHTML = orcaSVG;

    el.style.setProperty("--size", `${orca.size}px`);
    el.style.setProperty("--top", `${orca.top}%`);
    el.style.setProperty("--duration", `${orca.duration}s`);
    el.style.setProperty("--delay", `${orca.delay}s`);
    el.style.setProperty("--opacity", orca.opacity);
    el.style.setProperty("--blur", `${orca.blur}px`);
    el.style.setProperty("--direction", orca.reverse ? -1 : 1);

    container.appendChild(el);
  });

  // Schwebende Wasserpartikel
  for (let i = 0; i < 35; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration =
      `${12 + Math.random() * 18}s`;
    particle.style.animationDelay =
      `${-Math.random() * 30}s`;

    particles.appendChild(particle);
  }
});
