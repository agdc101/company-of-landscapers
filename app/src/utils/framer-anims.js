const framerAnimations = {
    // Define your framer animations here
    slideDown: {
        initial: { y: -100 },
        animate: { y: 0 },
        transition: { duration: 0.7, delay: 1.5 }
    },

    mobileNav: {
        initial: { x: -800 },
        animate: { x: 0 },
        exit: { x: -800 },
        transition: { type: "tween", duration: 0.6 }
    },

    slideRightFadeIn: {
        initial: { x: -25, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { delay: 0.7, duration: 0.8, ease: "easeInOut" }
    }
}

export default framerAnimations;
