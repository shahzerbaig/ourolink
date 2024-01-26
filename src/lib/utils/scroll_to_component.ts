const scrollToComponent = (
  ref: React.RefObject<HTMLDivElement>,
  block: ScrollLogicalPosition
) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: "smooth", // Add smooth scrolling effect
      block: block, // Scroll to the top of the target element
    });
  }
};

export default scrollToComponent;
