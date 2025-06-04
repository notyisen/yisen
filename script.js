document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    formStatus.textContent = `Thank you, ${name}! Your message has been sent.`;
    form.reset();
  });

  // Try to play background music on page load
  const music = document.getElementById("backgroundMusic");
  if (music) {
    music.play().catch((error) => {
      console.log("Autoplay was prevented by the browser:", error);
    });
  }
});
