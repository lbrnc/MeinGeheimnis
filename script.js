let attempts = 0;
const meinName = "Dein Name"; // Hier deinen tatsächlichen Namen einfügen!

function checkCode() {
  const enteredCode = document.getElementById("code-input").value;
  const correctCode = "1291";

  if (enteredCode === correctCode) {
    window.location.href = "secret.html"; // Weiterleitung zur schwarzen Seite
  } else {
    const messageElement = document.getElementById("message");
    const codeInputContainer = document.querySelector(".code-input-container");
    const websiteContent = document.querySelector(".website-content");

    attempts++;

    if (attempts === 1) {
      messageElement.textContent = "Eine vierstellige Zahl";
      messageElement.className = "hint-message"; // Grüne Farbe zuweisen
      vibrate();
    } else if (attempts === 2) {
      messageElement.textContent = meinName;
      messageElement.className = "hint-message"; // Grüne Farbe zuweisen
      vibrate();
    } else if (attempts >= 3) {
      messageElement.textContent = correctCode;
      messageElement.className = "hint-message"; // Grüne Farbe zuweisen
      vibrate();
    } else {
      messageElement.textContent = "Falscher Code. Bitte versuche es erneut.";
      messageElement.className = "error-message"; // Rote Farbe zuweisen (sollte nicht erreicht werden)
      vibrate();
    }

    // Zurücksetzen des Eingabefelds
    document.getElementById("code-input").value = "";
  }
}

function vibrate() {
  if ("vibrate" in navigator) {
    navigator.vibrate(200); // Vibriert für 200 Millisekunden
  }
}
