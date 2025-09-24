function createInjectedMenuItem() {
  // Prevent adding the same item multiple times
  if (document.querySelector('#injected-check-item')) return;

  // Get the open dropdown list (when it's visible)
  const listbox = document.querySelector('tp-yt-iron-dropdown:not([aria-hidden]) ytd-menu-popup-renderer tp-yt-paper-listbox');
  if (!listbox) return;

  // Create the main wrapper
  const newItem = document.createElement('ytd-menu-service-item-renderer');
  newItem.setAttribute('class', 'style-scope ytd-menu-popup-renderer');
  newItem.setAttribute('role', 'menuitem');
  newItem.setAttribute('tabindex', '-1');
  newItem.setAttribute('id', 'injected-check-item');

  // Use innerHTML to inject everything inside
  newItem.innerHTML = `
    <tp-yt-paper-item class="style-scope ytd-menu-service-item-renderer" role="option" tabindex="0" aria-disabled="false">
      <yt-icon class="style-scope ytd-menu-service-item-renderer">
        <span class="yt-icon-shape style-scope yt-icon ytSpecIconShapeHost">
          <div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
              <path d="M3 12l18-12v24z"></path>
            </svg>
          </div>
        </span>
      </yt-icon>
      <span class="style-scope ytd-menu-service-item-renderer">Go to Check Page</span>
    </tp-yt-paper-item>
  `;

  // Add a click event
  newItem.addEventListener('click', () => {
    // Navigate to your extension's page (change if needed)
    window.location.href = chrome.runtime.getURL('checkout.html');
  });

  // Add the item to the list
  listbox.appendChild(newItem);
}

// Observe changes to detect when dropdown menu appears
const menuObserver = new MutationObserver(() => {
  const dropdown = document.querySelector('tp-yt-iron-dropdown:not([aria-hidden])');
  if (dropdown) {
    createInjectedMenuItem();
  }
});
alert("injected");
// Start observing the DOM
menuObserver.observe(document.body, {
  childList: true,
  subtree: true
});
