// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      // Detects Delfi's Adblock layer
      if (mutation.addedNodes !== undefined && mutation.addedNodes.length > 0 && mutation.addedNodes[0].classList !== undefined && mutation.addedNodes[0].classList.contains("C-ad-block-layer")) {
        // and removes it
        mutation.addedNodes[0].remove();
      }
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(document, config);
