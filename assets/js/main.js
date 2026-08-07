const COMPANY = {
  phone: "+91 7373373030",
  whatsapp: "919876543210",
  email: "annamithraagenciesmdu@gmail.com",
};
function wa(text) {
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
}
function shared() {
  document
    .querySelectorAll("[data-phone]")
    .forEach((a) => (a.href = "tel:" + COMPANY.phone.replace(/\s/g, "")));
  document
    .querySelectorAll("[data-wa]")
    .forEach(
      (a) =>
        (a.href = wa(
          a.dataset.message ||
            "Hello, I would like to enquire about your dairy and frozen-food products.",
        )),
    );
  document
    .querySelector(".menu-btn")
    ?.addEventListener("click", () =>
      document.querySelector(".navlinks").classList.toggle("open"),
    );
  document
    .querySelector(".filter-toggle")
    ?.addEventListener("click", () =>
      document.querySelector(".filters").classList.add("open"),
    );
  document
    .querySelector(".filter-close")
    ?.addEventListener("click", () =>
      document.querySelector(".filters").classList.remove("open"),
    );
  document
    .querySelectorAll("[data-year]")
    .forEach((e) => (e.textContent = new Date().getFullYear()));
}
document.addEventListener("DOMContentLoaded", shared);
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("aboutVideo");
    const soundButton = document.getElementById("aboutSoundBtn");

    if (!video || !soundButton) return;

    const soundIcon = soundButton.querySelector(".sound-icon");
    const soundText = soundButton.querySelector(".sound-text");

    soundButton.addEventListener("click", async () => {
        if (video.muted) {
            video.muted = false;
            video.volume = 1;

            try {
                await video.play();
            } catch (error) {
                console.error("Video sound error:", error);
            }

            soundButton.classList.add("sound-on");

            if (soundIcon) soundIcon.textContent = "🔇";
            if (soundText) soundText.textContent = "Mute Sound";
        } else {
            video.muted = true;

            soundButton.classList.remove("sound-on");

            if (soundIcon) soundIcon.textContent = "🔊";
            if (soundText) soundText.textContent = "Play Sound";
        }
    });
});