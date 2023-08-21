paceOptions = {
    ajax: true,      //checks for ajax server side returns are true or not
    document: true   //checks if the document is loaded or not
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
