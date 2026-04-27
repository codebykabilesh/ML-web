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
  const code = pre.querySelector("code");
  const text = code.textContent;

  // Try modern clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = "Copy Code";
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        fallbackCopyTextToClipboard(text, button);
      });
  } else {
    // Fallback for older browsers or non-HTTPS
    fallbackCopyTextToClipboard(text, button);
  }
}

function fallbackCopyTextToClipboard(text, button) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed"; // Avoid scrolling to bottom
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const successful = document.execCommand("copy");
    if (successful) {
      button.textContent = "Copied!";
      setTimeout(() => {
        button.textContent = "Copy Code";
      }, 2000);
    } else {
      button.textContent = "Copy Failed";
    }
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
    button.textContent = "Copy Failed";
  }
  document.body.removeChild(textArea);
}
