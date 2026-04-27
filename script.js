document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const cards = document.querySelectorAll(".experiment-card");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    cards.forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      const desc = card.querySelector("p").textContent.toLowerCase();
      if (title.includes(query) || desc.includes(query)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

function copyCode(button) {
  const pre = button.nextElementSibling;
  const code = pre.querySelector('code');
  const text = code.textContent;
  navigator.clipboard.writeText(text).then(() => {
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = 'Copy Code';
    }, 2000);
  });
}
