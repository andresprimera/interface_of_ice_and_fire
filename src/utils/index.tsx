export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };


  export const extractCharacterNumber = (url: string = '')=>{

    const match = url.match(/(\d+)(?=\/*$)/);
    
    if (match) {
      const lastNumber = match[0];
      return lastNumber;
    } else {
      return 0;
    }
  }