window.onload = function () {
  setTimeout(() => {
    const navbar_title = document.querySelector('.navbar__title');
    // hack: title color style
    navbar_title.classList.add('bg-clip-text', 'text-transparent', 'bg-gradient-to-r', 'from-pink-500', 'to-violet-500');
  }, 200);
};
