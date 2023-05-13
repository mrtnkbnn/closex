// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  // Find all modals and remove
  const modals = document.getElementsByClassName("tp-modal");
  for (let i = 0; i < modals.length; ++i) {
    modals[i].remove();
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(document, config);
