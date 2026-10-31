
(() => {
  "use strict";

  // =========================================
  // Eng20w Landing Page Configuration
  // =========================================

  const DESTINATION_URL = "https://eng20w.com/";
  const REDIRECT_DELAY = 4;

  // =========================================
  // Page Elements
  // =========================================

  const countdownElement = document.getElementById("countdown");
  const yearElement = document.getElementById("year");
  const visitLink = document.getElementById("visit-link");

  // =========================================
  // Set Current Year
  // =========================================

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // =========================================
  // Set Main Website Link
  // =========================================

  if (visitLink) {
    visitLink.href = DESTINATION_URL;
  }

  // =========================================
  // Automatic Redirect Countdown
  // =========================================

  let remainingSeconds = REDIRECT_DELAY;

  if (countdownElement) {
    countdownElement.textContent = remainingSeconds;
  }

  const redirectTimer = window.setInterval(() => {

    remainingSeconds--;

    if (countdownElement) {
      countdownElement.textContent = Math.max(remainingSeconds, 0);
    }

    // Redirect after 4 seconds
    if (remainingSeconds <= 0) {

      window.clearInterval(redirectTimer);

      window.location.replace(DESTINATION_URL);
    }

  }, 1000);

})();
