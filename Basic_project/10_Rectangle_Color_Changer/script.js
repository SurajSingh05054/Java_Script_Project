/*
Steps
1.sabse pahle pata karo ke mouse rectangle per aaya and move hua ya nahi
2.ab ye calculate karo ke hm center sa left ya right per hai.
3.ab ye calculate karo ke hm center sa kitna left ya right per hai,
 jitna left ya right per hai utna intensity sa color karo.

4.


*/

    let rectangle = document.querySelector("#rect");
    // console.log(rectangle);


    // step 1
    rectangle.addEventListener("mousemove", function (e) {
    // console.log("h");

    // step 2
    let rectangle_location = rectangle.getBoundingClientRect();
    // console.log(rectangle_location);
    //The Element.getBoundingClientRect() method returns a DOMRect object
    // providing information about the size of an element and its position relative to the viewport.
        

    let inside_rectangle=Math.floor(e.clientX - rectangle_location.left);
    // console.log(inside_rectangle);

    if(inside_rectangle <rectangle_location.width/2)
    {
        // console.log("left");
        var red_Color = gsap.utils.mapRange(0,rectangle_location.width/2,255,0,inside_rectangle);
        gsap.to(rectangle,{
            backgroundColor: `rgba(${red_Color},0 ,0)`,
            // ease:Power4
        });
    }else{
        console.log("right");
        var blue_Color = gsap.utils.mapRange(rectangle_location.width/2,rectangle_location.width,0,255,inside_rectangle);
        gsap.to(rectangle,{
            backgroundColor: `rgba(0 ,0,${blue_Color})`,
            // ease:Power4
        });
    }

    });


    rectangle.addEventListener("mouseleave", function(e){
        gsap.to(rectangle,{
            backgroundColor: "white",
            // ease:Power4
        });

    })




    // gsap maprange    mapRange(inMin, inMax, outMin, outMax,valueToMap)