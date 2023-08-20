paceOptions = {
    ajax: true,
    document: true
}
Pace.on("done", () =>{
    gsap.timeline()
    .add('p')
    .to('.pace',{
        transform:'scale(10,1)',
        duration:4
    },"+=.2")
    .to('.pace',{
        duration:1,
        height:"100%"
    },"-=2.5")

    .to('.title',{
        duration:2,
        delay:.3,
        y:-10,
        opacity:1,
        ease: Expo.easeInOut
    },'-=2.5')
})
