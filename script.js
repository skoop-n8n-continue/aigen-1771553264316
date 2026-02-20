document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();

    tl.to('h1', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out'
    })
    .to('.accent-bar', {
        width: '100px',
        duration: 1,
        ease: 'power2.inOut'
    }, '-=0.5');

    // Subtle pulsing effect for digital signage
    gsap.to('.accent-bar', {
        scaleX: 1.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
});
