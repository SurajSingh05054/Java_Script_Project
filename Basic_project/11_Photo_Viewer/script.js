// /*
// Steps
// 1.sabse pahle pata karo ke mouse rectangle per aaya and move hua ya nahi
// 2.ab ye calculate karo ke hm center sa left ya right per hai.
// 3.ab ye calculate karo ke hm center sa kitna left ya right per hai,
//  jitna left ya right per hai utna intensity sa color karo.

// 4.


// */

//     let rectangle = document.querySelector(".container");
//     console.log(rectangle);
//     let image = document.querySelector("#myimg");
//     console.log(image);


//     // // step 1
//     rectangle.addEventListener("mousemove", function (e) {
//     // console.log("h");

//     // // step 2
//     let rectangle_location = rectangle.getBoundingClientRect();
//     // console.log(rectangle_location);
//     // //The Element.getBoundingClientRect() method returns a DOMRect object
//     // // providing information about the size of an element and its position relative to the viewport.
        
//     //  rectangle kaa kitna ander hu
//     let inside_rectangle=Math.floor(e.clientX - rectangle_location.left);
//     // console.log(inside_rectangle);
//     // console.log(typeof(inside_rectangle));

//     // if (inside_rectangle < 75) {
//     //     // code to execute if inside_rectangle is less than 75
//     //     image.src="Images/one.jpg";
//     //   } else if ( inside_rectangle <150){
//     //     // code to execute if inside_rectangle is greater than or equal to 150
//     //     image.src="Images/three.jpg";
//     //   }
//     //   else if (inside_rectangle <300){
//     //     image.src="Images/four.jpg";
//     //   }
//     //   else if (inside_rectangle <375){
//     //     image.src="Images/five.jpg";
//     //   }
//     //   else if (inside_rectangle <450){
//     //     image.src="Images/six.jpg";
//     //   }
//     //   else if (inside_rectangle <525){
//     //     image.src="Images/seven.jpg";
//     //   }
//     //   else if (inside_rectangle <600){
//     //     image.src="Images/eight.jpg";
//     //   }
//     //   else if (inside_rectangle <675){
//     //     image.src="Images/nine.jpg";
//     //   }
//     //   else if (inside_rectangle <750){
//     //     image.src="Images/ten.jpg";
//     //   }
      


//     // Short ways to write the above code

//     const imageSources = [
//         "Images/one.jpg",
//         "Images/two.jpg",
//         "Images/three.jpg",
//         "Images/four.jpg",
//         "Images/five.jpg",
//         "Images/six.jpg",
//         "Images/seven.jpg",
//         "Images/eight.jpg",
//         "Images/nine.jpg",
//         "Images/ten.jpg",
//         "Images/eleven.jpg",
//         "Images/twelve.jpg",
//         "Images/thirteen.jpg",
//         "Images/fourteen.jpg",
//         "Images/fifteen.jpg",
//         "Images/sixteen.jpg",
//         "Images/seventeen.jpg",
//         "Images/eighteen.jpg",
//         "Images/nineteen.jpg",
//         "Images/twenty.jpg",
//       ];

//     //   for (let i = 0; i < imageSources.length; i++) {
//     //     if (inside_rectangle <= (i + 1) * (rectangle_location.left - rectangle_location.right)){
//     //       image.src = imageSources[i];
//     //       break;
//     //     }
//     //   }
      

      
//     const threshold = (rectangle_location.right - rectangle_location.left) / imageSources.length;
//     console.log(threshold);

//     for (let i = 0; i < imageSources.length; i++) {
//       const value = (i + 1) * threshold;
//       if (inside_rectangle <= value) {
//         image.src = imageSources[i];
//         break;
//       }
//     }
      



//     rectangle.addEventListener("mouseleave", function(e){
//        image.src="Images/main.jpg";
//         });

//     })




//     // gsap maprange    mapRange(inMin, inMax, outMin, outMax,valueToMap)















let rectangle = document.querySelector(".container");
let image = document.querySelector("#myimg");
const imageSources = [
  "Images/one.jpg",
  "Images/two.jpg",
  "Images/three.jpg",
  "Images/four.jpg",
  "Images/five.jpg",
  "Images/six.jpg",
  "Images/seven.jpg",
  "Images/eight.jpg",
  "Images/nine.jpg",
  "Images/ten.jpg",
  "Images/eleven.jpg",
  "Images/twelve.jpg",
  "Images/thirteen.jpg",
  "Images/fourteen.jpg",
  "Images/fifteen.jpg",
  "Images/sixteen.jpg",
  "Images/seventeen.jpg",
  "Images/eighteen.jpg",
  "Images/nineteen.jpg",
  "Images/twenty.jpg",
];

rectangle.addEventListener("mousemove", function (e) {
  let rectangle_location = rectangle.getBoundingClientRect();
  let inside_rectangle = Math.floor(e.clientX - rectangle_location.left);

  const threshold = (rectangle_location.right - rectangle_location.left) / imageSources.length;

  for (let i = 0; i < imageSources.length; i++) {
    const value = (i + 1) * threshold;
    if (inside_rectangle <= value) {
      image.src = imageSources[i];
      break;
    }
  }
});

rectangle.addEventListener("mouseleave", function(e){
  image.src="Images/main.jpg";
});
