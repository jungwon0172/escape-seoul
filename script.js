
document.addEventListener('DOMContentLoaded', function () {
  var banner = document.getElementById('cookieBanner');
  var accept = document.getElementById('cookieAccept');
  if (!banner || !accept) return;
  try {
    if (!localStorage.getItem('cookieConsent')) {
      banner.hidden = false;
    }
    accept.addEventListener('click', function () {
      localStorage.setItem('cookieConsent', '1');
      banner.hidden = true;
    });
  } catch (e) {
    // localStorage unavailable; skip persistence silently
  }
});
