const bgVideo = document.getElementById('bgVideo')

// let scrollProgress = 0
// let delay = 0

// function updateProgress(progress) {
//     scrollProgress = progress
//     delay = (scrollProgress * 100)
//     bgVideo.seek(delay.toFixed(0)+'%')
// }

// let st = ScrollTrigger.create({
//     trigger: '.scrollSequence',
//     start:'top 150px',
//     end: '100% 100%',
//     pin:true,
//     markers: true,
//     onUpdate: self => updateProgress(self.progress)
// })
gsap.from(
        ['.heroHeadline', '.heroSubheadline', bgVideo], {
        opacity: 0,
        duration: 4
    }
)


let scrollProgress = 0
let delay = 0

function updateProgress1(progress) {
    scrollProgress = progress
    delay = (scrollProgress * 100)*0.93
    bgVideo.seek(delay.toFixed(0)+'%')
}



let lottieTimeline = gsap.timeline()

lottieTimeline
    .to(
            bgVideo, {
                scrollTrigger: {
                    trigger: 'hero',
                    start: 'top top',
                    end: '17% top',
                    onUpdate: self => updateProgress1(self.progress)
                }
            }
        )

// Text 1 Animation

let t1 = gsap.timeline()

t1
    .fromTo(
        '.text-1', {
            opacity: 0
        },{
            opacity: 1,
            scrollTrigger: {
                trigger: 'hero',
                start: '20% top',
                end: '25% top',
                scrub: true
            }
        }
    )
    .fromTo(
        '.text-1',{
            opacity: 1
        },{
            opacity: 0, 
            scrollTrigger: {
                trigger: 'hero',
                start: '35% top',
                end: '40% top',
                scrub: true
            }
        }
    )


    gsap.set(
        '.text-1',{
            opacity: 0,
            scrollTrigger: {
                trigger: 'hero',
                start: 'top top',
                end: '20% top',
            }
        }
    )
    
    gsap.fromTo(
        '.text-1',{
            translateY: 40
        },{
            translateY: -40,
            scrollTrigger: {
                trigger: 'hero',
                start: '20% top',
                end: '40% top',
                scrub: true
            }
        }
    )



// Text 2 Animation

let t2 = gsap.timeline()

t2
    .fromTo(
        '.text-2', {
            opacity: 0
        },{
            opacity: 1,
            scrollTrigger: {
                trigger: 'hero',
                start: '40% top',
                end: '45% top',
                scrub: true
            }
        }
    )
    .fromTo(
        '.text-2',{
            opacity: 1
        },{
            opacity: 0, 
            scrollTrigger: {
                trigger: 'hero',
                start: '55% top',
                end: '60% top',
                scrub: true
            }
        }
    )


    gsap.set(
        '.text-2',{
            opacity: 0,
            scrollTrigger: {
                trigger: 'hero',
                start: 'top top',
                end: '40% top',
            }
        }
    )
    
    gsap.fromTo(
        '.text-2',{
            translateY: 40
        },{
            translateY: -40,
            scrollTrigger: {
                trigger: 'hero',
                start: '40% top',
                end: '60% top',
                scrub: true
            }
        }
    )


// Text 3 Animation

let t3 = gsap.timeline()

t3
    .fromTo(
        '.text-3', {
            opacity: 0
        },{
            opacity: 1,
            scrollTrigger: {
                trigger: 'hero',
                start: '60% top',
                end: '65% top',
                scrub: true
            }
        }
    )
    .fromTo(
        '.text-3',{
            opacity: 1
        },{
            opacity: 0, 
            scrollTrigger: {
                trigger: 'hero',
                start: '75% top',
                end: '80% top',
                scrub: true
            }
        }
    )


    gsap.set(
        '.text-3',{
            opacity: 0,
            scrollTrigger: {
                trigger: 'hero',
                start: 'top top',
                end: '60% top',
            }
        }
    )
    
    gsap.fromTo(
        '.text-3',{
            translateY: 40
        },{
            translateY: -40,
            scrollTrigger: {
                trigger: 'hero',
                start: '60% top',
                end: '80% top',
                scrub: true
            }
        }
    )


// Text 1 Animation

let t4 = gsap.timeline()

t4
    .fromTo(
        '.text-4', {
            opacity: 0
        },{
            opacity: 1,
            scrollTrigger: {
                trigger: 'hero',
                start: '80% top',
                end: '85% top',
                scrub: true
            }
        }
    )
    .fromTo(
        '.text-4',{
            opacity: 1
        },{
            opacity: 0, 
            scrollTrigger: {
                trigger: 'hero',
                start: '95% top',
                end: '100% top',
                scrub: true
            }
        }
    )


    gsap.set(
        '.text-4',{
            opacity: 0,
            scrollTrigger: {
                trigger: 'hero',
                start: 'top top',
                end: '80% top',
            }
        }
    )
    
    gsap.fromTo(
        '.text-4',{
            translateY: 40
        },{
            translateY: -40,
            scrollTrigger: {
                trigger: 'hero',
                start: '80% top',
                end: '100% top',
                scrub: true
            }
        }
    )


gsap.fromTo(
    bgVideo, {
        scaleX: 1,
        scaleY: 1,
    },{
        scaleX:0.85,
        scaleY: 0.85,
        scrollTrigger: {
            trigger: 'hero',
            start: '20% top',
            end: '100% top',
            scrub: true
        }
    }
)