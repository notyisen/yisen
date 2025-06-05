document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        formStatus.textContent = `Thank you, ${name}! Your message has been sent.`;
        form.reset();
      } else {
        formStatus.textContent = "Oops! Something went wrong. Please try again later.";
      }
    } catch (error) {
      formStatus.textContent = "Network error. Please check your connection and try again.";
    }
  });

  // Try to play background music on page load
  const music = document.getElementById("backgroundMusic");
  if (music) {
    music.play().catch((error) => {
      console.log("Autoplay was prevented by the browser:", error);
    });
  }
});
