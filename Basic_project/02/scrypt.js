// loomotive js -smooth scrolling
// gsap to animate
// shery js to animate images  according



// step 1:

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// step 2:
gsap.from(".nlink",{
    stagger: .2,
    y:10,
    duration:1,
    ease:Power2,
    opacity:0
})

// step 3:

Shery.textAnimate("#heading h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2",{
    y:50,
    stagger:.3,
    duration:2,
    ease:Expo,
    opacity:0
  })

// BIg image middle
Shery.imageEffect("#imgtxt img",{
    style: 3,
    config:{"uFrequencyX":{"value":20.61,"range":[0,100]},"uFrequencyY":{"value":17.56,"range":[0,100]},"uFrequencyZ":{"value":19.08,"range":[0,100]},"geoVertex":{"range":[1,64],"value":4.37},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75000508789687},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":-0.030612244897959107}},"shapeScale":{"value":{"x":1,"y":1}},"shapeEdgeSoftness":{"value":0.25,"range":[0,0.5]},"shapeRadius":{"value":1.59,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.82,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug: true
});
Shery.imageEffect(".imgsmall",{
    style: 5,
    config:{"a":{"value":1.83,"range":[0,30]},"b":{"value":0.24,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.85,"y":0.88}},"shapeEdgeSoftness":{"value":0.21,"range":[0,0.5]},"shapeRadius":{"value":0.53,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug: true
});

gsap.from("#imgtxt img",{
    y:"100",
    opacity: 0,
    duration: 2,
    ease:Expo,
    
});

Shery.imageEffect("#bimg",{
    style:5,
    // debug:true,
    config:{"a":{"value":1.6,"range":[0,30]},"b":{"value":-0.69,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.8918796507448872},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.55,"y":0.5}},"shapeEdgeSoftness":{"value":0.16,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":2.39,"range":[1,15]},"durationOut":{"value":1.07,"range":[0.1,5]},"durationIn":{"value":0.66,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.15,"range":[0,10]},"metaball":{"value":0.24,"range":[0,2]},"discard_threshold":{"value":0.26,"range":[0,1]},"antialias_threshold":{"value":0.04,"range":[0,0.1]},"noise_height":{"value":0.23,"range":[0,2]},"noise_scale":{"value":29.01,"range":[0,100]}},
    gooey:true
});



// video

document.querySelector("#ftxt button")
.addEventListener("mouseover",function() {
    gsap.to("#future video",{
        opacity:1,
        duration:1.5,
        ease:Power4
    })
})
document.querySelector("#ftxt button")
.addEventListener("mouseleave",function() {
    gsap.to("#future video",{
        opacity:0,
        duration:1.5,
        ease:Power4
    })
})