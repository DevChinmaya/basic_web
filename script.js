// ===== Dark/Light Mode Toggle =====
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// ===== Counter Button =====
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterDisplay = document.getElementById("counter");
counterBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

// ===== Show/Hide About Section =====
const toggleAboutBtn = document.getElementById("toggleAbout");
const aboutSection = document.getElementById("about");
toggleAboutBtn.addEventListener("click", () => {
  if (aboutSection.style.display === "none") {
    aboutSection.style.display = "block";
    toggleAboutBtn.textContent = "Hide About";
  } else {
    aboutSection.style.display = "none";
    toggleAboutBtn.textContent = "Show About";
  }
});

// ===== Random Background Color =====
const randomBgBtn = document.getElementById("randomBg");
randomBgBtn.addEventListener("click", () => {
  const colors = ["#f4f4f9", "#e0f7fa", "#fff3e0", "#ede7f6", "#fce4ec", "#e8f5e9"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
});

// ===== Live Clock =====
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = `⏰ Time: ${now.toLocaleTimeString()}`;
}
setInterval(updateClock, 1000);

// ===== Form Validation =====
const form = document.getElementById("contactForm");
const response = document.getElementById("formResponse");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    response.textContent = `✅ Thank you, ${name}! Your message has been sent.`;
    response.style.color = "green";
    form.reset();
  } else {
    response.textContent = "⚠️ Please fill out all fields.";
    response.style.color = "red";
  }
});
