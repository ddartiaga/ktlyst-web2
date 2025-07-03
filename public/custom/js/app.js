
// swiper
document.addEventListener('DOMContentLoaded', function () {
    // Delay to make sure Swiper is already initialized
    setTimeout(() => {
        // Fallback 1: Use element.swiper if Swiper instance is attached to DOM
        const swiperElements = document.querySelectorAll('.swiper');
        swiperElements.forEach(el => {
            if (el.swiper) {
                el.swiper.params.speed = 7000; // 1000ms = 1 second
                console.log('[Swiper] Speed set to 1000ms for', el);
            }
        });

        // Optional fallback 2: If global Swiper.instances exists (older versions)
        if (window.Swiper && window.Swiper.instances) {
            Object.values(window.Swiper.instances).forEach(swiper => {
                swiper.params.speed = 7000;
                console.log('[Swiper] Speed set to 1000ms from instances');
            });
        }
    }, 100); // Adjust delay if needed
});