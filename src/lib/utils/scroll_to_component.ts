const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: "smooth", // Add smooth scrolling effect
      block: "center", // Scroll to the top of the target element
    });
  }
};

export default scrollToComponent;
