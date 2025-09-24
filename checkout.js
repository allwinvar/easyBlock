    const abpUrl = "abp:subscribe?location=https%3A%2F%2Fraw.githubusercontent.com%2Fkbinani%2Fadblock-wikipedia%2Fmaster%2Fsigned.txt&title=adblock-wikipedia";

    document.getElementById("subscribeBtn").addEventListener("click", function () {
      if (typeof chrome !== "undefined" && chrome.tabs) {
        chrome.tabs.create({ url: abpUrl });
      } else if (typeof browser !== "undefined" && browser.tabs) {
        // Firefox compatibility (WebExtension API)
        browser.tabs.create({ url: abpUrl });
      } else {
        alert("Your browser doesn't support the tabs API.");
      }
    });
