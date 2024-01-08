function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}


function setTitleStyle() {
  const navbar_title = document.querySelector('.navbar__title');

  if (navbar_title) {
    navbar_title.classList.add('bg-clip-text', 'text-transparent', 'bg-gradient-to-r', 'from-blue-700', 'to-green-300');
  } else {
    // hack for title color style, try infinity times in case of slow loading.😂
    requestAnimationFrame(() => {
      setTitleStyle();
    });
  }
}

docReady(setTitleStyle);

let previousUrl = location.href;
const observer = new MutationObserver(function (mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    setTitleStyle();
  }
});
const config = { subtree: true, childList: true };
observer.observe(document, config);
