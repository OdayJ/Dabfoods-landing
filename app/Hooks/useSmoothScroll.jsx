import { animate } from "framer-motion";

const useSmoothScroll = () => {
  const scrollToSection = (sectionId) => {
    // Check if the 'top' id was passed
    if (sectionId === "top") {
      // Animate scrolling to the top of the page
      animate(window.scrollY, 0, {
        type: "tween",
        ease: "easeInOut",
        duration: 1,
        onUpdate: (value) => window.scrollTo(0, value),
      });
    } else {
      // Otherwise, try to find the element and scroll to it
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.offsetTop - 200;
        animate(window.scrollY, top, {
          type: "tween",
          ease: "easeInOut",
          duration: 1,
          onUpdate: (value) => window.scrollTo(0, value),
        });
      }
    }
  };

  return scrollToSection;
};

export default useSmoothScroll;
