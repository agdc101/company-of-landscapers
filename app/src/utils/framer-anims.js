const framerAnimations = {
    // Define your framer animations here
    slideDown: {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.75, delay: 0.75 }
    },

    mobileNav: {
        initial: { x: -800 },
        animate: { x: 0 },
        exit: { x: -800 },
        transition: { duration: 1 }
    },

    slideRightFadeIn: {
        initial: { x: -25, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.75, ease: "easeInOut" }
    },

    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.75, ease: "easeInOut" }
    }   
}

export default framerAnimations;
