// Elements
const wishBtn = document.getElementById("wishBtn");
const letter = document.getElementById("letter-container");
const music = document.getElementById("bgMusic");
const confettiContainer = document.getElementById("confetti-container");

wishBtn.addEventListener("click", () => {
  // Show the letter
  letter.style.display = "block";

  // Hide the button
  wishBtn.style.display = "none";

  // Play music
  music.play().catch(() => {});

  // Get container dimensions AFTER showing the letter
  const containerHeight = confettiContainer.offsetHeight;
  const containerWidth = confettiContainer.offsetWidth;

  // Function to create one heart
  const createHeart = () => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random horizontal position inside container
    heart.style.left = Math.random() * (containerWidth - 20) + "px";
    heart.style.top = "0px"; // start at top

    confettiContainer.appendChild(heart);

    // Animate heart falling from top to bottom
    const duration = 4000 + Math.random() * 3000; // 4-7 seconds
    let start = null;

    const fall = timestamp => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = elapsed / duration;

      // Move heart down
      heart.style.top = progress * containerHeight + "px";

      if (progress < 1) {
        requestAnimationFrame(fall);
      } else {
        heart.remove();
      }
    };

    requestAnimationFrame(fall);
  };

  // Generate hearts every 250ms
  const heartInterval = setInterval(createHeart, 250);

  // Stop generating hearts after 30 seconds
  setTimeout(() => clearInterval(heartInterval), 30000);
});
