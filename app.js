const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// ease: CustomEase.create("custom", "M0,0,C0.084,0.61,0.214,0.802,0.28,0.856,0.356,0.918,0.374,1,1,1"), 

let tlhero = gsap.timeline();

tlhero.to(".innovating", { left: "5%", duration: 1,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1")})
tlhero.to(".safety", { right: "10%", duration: 1,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1")},"-=1")
tlhero.to(".hero-cover3", { y: "-100%", duration: 1,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1")},"0.5")
tlhero.to(".hero-cover2", { y: "-100%", duration: 1 ,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1")})
tlhero.to(".safety", { autoAlpha: 0, color:"white", duration: 1 ,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1")},"-=1")
tlhero.to(".innovating", { color:"white", duration: 1 ,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1")},"-=1")
tlhero.to(".transport", { autoAlpha: 1,color:"white", duration: 1 ,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1")},"-=1")
tlhero.to(".hero-img-wrap", { zIndex:2, duration: 0.1,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1") })
tlhero.to(".hero-img-wrap", { width: "100vw",height:"100vh", duration: 1,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1") })
tlhero.to(".innovating", { autoAlpha: 0, duration: 1 ,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1")},"-=1")
tlhero.to(".transport", { autoAlpha: 0, duration: 1 ,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1")},"-=1")
tlhero.to(".hero-cover", { clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%,0 0,0.01% 99.99%, 99.99% 99.99%, 99.99% 0.01%,0.01% 0.01%,0.01% 99.99%)", duration: 1,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1") },"-=0.8")
tlhero.to(".overlay-img", { zIndex: 7, duration: 0.5},"-=0.5")
tlhero.to(".introducing", { autoAlpha: 1, duration: 0.5 ,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1")},"-=0.5")
tlhero.to(".unite", { autoAlpha: 1, duration: 0.5 ,ease: CustomEase.create("custom", "M0,0,C0.29,0,0.294,0.018,0.365,0.103,0.434,0.186,0.466,0.362,0.498,0.502,0.518,0.592,0.552,0.77,0.615,0.864,0.69,0.975,0.704,1,1,1")})