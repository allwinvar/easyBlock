function injectLink() {
  const ytApp = document.querySelector('body');
  if (!ytApp) {
    console.log('body not found yet...');
    return;
  }

  // Prevent injecting multiple times
  if (document.getElementById('injected-check-link')) return;

  const linkContainer = document.createElement('div');
  linkContainer.id = 'injected-check-link';
  linkContainer.style.padding = '20px';
  linkContainer.style.background = '#f4f4f4';
  linkContainer.style.textAlign = 'center';

  const link = document.createElement('a');
  link.href = chrome.runtime.getURL('checkout.html');
  link.innerText = 'Click to go to checkout.html';
  link.style.fontSize = '18px';
  link.style.color = '#065fd4';

  linkContainer.appendChild(link);
  ytApp.prepend(linkContainer);
}

// Wait for full load and SPA updates
const observer = new MutationObserver(() => {
  if (window.location.pathname === '/results') {
    injectLink();
  }
});
observer.observe(document.body, { childList: true, subtree: true });

// Initial injection
if (window.location.pathname === '/results') {
  injectLink();
}
