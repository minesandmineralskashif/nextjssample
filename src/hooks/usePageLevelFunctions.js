export const useScrollToElement = (
  idOfElementToScrollTo,
  verticalOffset = 100
) => {
  const scrollToElement = () => {
    if (idOfElementToScrollTo) {
      const element = document.getElementById(idOfElementToScrollTo);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - verticalOffset,
          behavior: 'smooth',
        });
      }
    }
  };

  return { scrollToElement };
};

export const useScrollToByExactPixels = (
  idOfParentContainer,
  idOfElementToScrollTo,
  verticalOffset = 100
) => {
  const scrollToElementByExactPixels = () => {
    if (idOfParentContainer && idOfElementToScrollTo) {
      const parentContainer = document.getElementById(idOfParentContainer);
      const element = document.getElementById(idOfElementToScrollTo);
      console.log('Dump of id of parent container:', idOfParentContainer);
      console.log('Dump of id of element to scroll to:', element.id);
      console.log('Dum of element.offsetTop:', element.offsetTop);
      console.log('Dump of verticalOffset:', verticalOffset);
      if (parentContainer && element) {
        console.log('Parent container and element found, scrolling...');
        // window.scrollTo({
        //   // top: 2950,
        //   top: element.offsetTop,
        //   behavior: 'smooth',
        // });
        window.scrollTo({
          top: 2950, // Adjust for the vertical offset
          behavior: 'smooth',
        });
      }
    }
  };

  return { scrollToElementByExactPixels };
};
