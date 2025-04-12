export const smoothScrollTo = (targetId) => {
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 100, // Adjust offset as needed
      behavior: 'smooth'
    });
  }
};