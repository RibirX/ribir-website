function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function setTitleStyle() {
  // hack for title color style, try infinity times in case of slow loading.😂
  const max = Infinity;
  let run_times = 0;

  const ret = function () {
    const navbar_title = document.querySelector('.navbar__title');
    run_times += 1;

    if (navbar_title) {
      navbar_title.classList.add('bg-clip-text', 'text-transparent', 'bg-gradient-to-r', 'from-blue-700', 'to-green-300');
    } else {
      if (run_times < max) {
        requestAnimationFrame(() => {
          ret();
        });
      }
    }
  };

  return ret;
}

docReady(setTitleStyle());

let previousUrl = location.href;
const observer = new MutationObserver(function (mutations) {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    setTitleStyle()();
  }
});
const config = { subtree: true, childList: true };
observer.observe(document, config);
