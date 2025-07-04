// scrollCue
scrollCue.init();

// Swiper animation control
document.addEventListener('DOMContentLoaded', function () {
    const swiper = document.querySelector('.swiper');
    if (swiper) {
        // Initialize animations for the first slide
        setTimeout(() => {
            const firstSlide = swiper.querySelector('.swiper-slide-active');
            if (firstSlide) {
                const heading = firstSlide.querySelector('.animate-heading');
                if (heading) {
                    heading.style.animation = 'none';
                    heading.offsetHeight; // Trigger reflow
                    heading.style.animation = null;
                }
            }
        }, 100);

        // Handle slide changes
        swiper.addEventListener('slideChange', function () {
            const activeSlide = swiper.querySelector('.swiper-slide-active');
            if (activeSlide) {
                // Reset and trigger animation for the new active slide
                const heading = activeSlide.querySelector('.animate-heading');
                if (heading) {
                    // Reset animation
                    heading.style.animation = 'none';
                    heading.offsetHeight; // Trigger reflow

                    // Re-enable animation with delay
                    setTimeout(() => {
                        heading.style.animation = 'slideInFromTop 1s ease-out 0.3s forwards';
                    }, 50);
                }
            }
        });
    }
});
