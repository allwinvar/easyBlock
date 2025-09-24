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
  
  
  
    // === ITEM 2 === Wikipedia Link
  const item2 = document.createElement('ytd-menu-service-item-renderer');
  item2.setAttribute('class', 'style-scope ytd-menu-popup-renderer');
  item2.setAttribute('role', 'menuitem');
  item2.setAttribute('tabindex', '-1');
  item2.setAttribute('id', 'injected-wiki-item');

  item2.innerHTML = `
    <tp-yt-paper-item class="style-scope ytd-menu-service-item-renderer" role="option" tabindex="0" aria-disabled="false">
      <yt-icon class="style-scope ytd-menu-service-item-renderer">
        <span class="yt-icon-shape style-scope yt-icon ytSpecIconShapeHost">
          <div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 17h2v-2h-2v2zm0-4h2V7h-2v6z"></path>
            </svg>
          </div>
        </span>
      </yt-icon>
      <span class="style-scope ytd-menu-service-item-renderer">Visit Wikipedia</span>
    </tp-yt-paper-item>
  `;

  item2.addEventListener('click', () => {
    window.open('abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2Fkbinani%2Fadblock-wikipedia%2Fmaster%2Fsigned.txt&title=adblock-wikipedia', '_blank');
  });

  listbox.appendChild(item2);
  
  
  
  
  
      // === ITEM 3 === Wikipedia Link
  const item3 = document.createElement('ytd-menu-service-item-renderer');
  item3.setAttribute('class', 'style-scope ytd-menu-popup-renderer');
  item3.setAttribute('role', 'menuitem');
  item3.setAttribute('tabindex', '-1');
  item3.setAttribute('id', 'injected-wiki-item');

  item3.innerHTML = `
    <tp-yt-paper-item class="style-scope ytd-menu-service-item-renderer" role="option" tabindex="0" aria-disabled="false">
      <yt-icon class="style-scope ytd-menu-service-item-renderer">
        <span class="yt-icon-shape style-scope yt-icon ytSpecIconShapeHost">
          <div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 17h2v-2h-2v2zm0-4h2V7h-2v6z"></path>
            </svg>
          </div>
        </span>
      </yt-icon>
      <span class="style-scope ytd-menu-service-item-renderer">Visit Wikipedia</span>
    </tp-yt-paper-item>
  `;

  item3.addEventListener('click', () => {
    window.location.href = 'abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2Fkbinani%2Fadblock-wikipedia%2Fmaster%2Fsigned.txt&title=adblock-wikipedia';
  });

  listbox.appendChild(item3);
  
  
  
  
  
  
        // === ITEM 4 === Wikipedia Link
  const item4 = document.createElement('ytd-menu-service-item-renderer');
  item4.setAttribute('class', 'style-scope ytd-menu-popup-renderer');
  item4.setAttribute('role', 'menuitem');
  item4.setAttribute('tabindex', '-1');
  item4.setAttribute('id', 'injected-wiki-item');

  item4.innerHTML = `
    <tp-yt-paper-item class="style-scope ytd-menu-service-item-renderer" role="option" tabindex="0" aria-disabled="false">
      <yt-icon class="style-scope ytd-menu-service-item-renderer">
        <span class="yt-icon-shape style-scope yt-icon ytSpecIconShapeHost">
          <div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 17h2v-2h-2v2zm0-4h2V7h-2v6z"></path>
            </svg>
          </div>
        </span>
      </yt-icon>
      <span class="style-scope ytd-menu-service-item-renderer"><a href="abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2Fkbinani%2Fadblock-wikipedia%2Fmaster%2Fsigned.txt&title=adblock-wikipedia">Visit Wikipedia</a></span>
    </tp-yt-paper-item>
  `;

  /*item4.addEventListener('click', () => {
    window.location.href = 'abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2Fkbinani%2Fadblock-wikipedia%2Fmaster%2Fsigned.txt&title=adblock-wikipedia';
  });*/

  listbox.appendChild(item4);
  
  
  
  
  
    
        // === ITEM 5 === Wikipedia Link
  const item5 = document.createElement('ytd-menu-service-item-renderer');
  item5.setAttribute('class', 'style-scope ytd-menu-popup-renderer');
  item5.setAttribute('role', 'menuitem');
  item5.setAttribute('tabindex', '-1');
  item5.setAttribute('id', 'injected-wiki-item');

  item5.innerHTML = `
    <tp-yt-paper-item class="style-scope ytd-menu-service-item-renderer" role="option" tabindex="0" aria-disabled="false">
      <yt-icon class="style-scope ytd-menu-service-item-renderer">
        <span class="yt-icon-shape style-scope yt-icon ytSpecIconShapeHost">
          <div style="width: 100%; height: 100%; display: block; fill: currentcolor;">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 17h2v-2h-2v2zm0-4h2V7h-2v6z"></path>
            </svg>
          </div>
        </span>
      </yt-icon>
      <span class="style-scope ytd-menu-service-item-renderer"><a href="abp:subscribe?location=moz-extension://681c68c0-fab4-4502-a225-bb7249c16590/signed.txt&title=adblock-wikipedia">Visit Wikipedia</a></span>
    </tp-yt-paper-item>
  `;
    listbox.appendChild(item5);

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
