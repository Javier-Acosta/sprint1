export  const animateForLogo=(direction= 'left')=>{
    return {
      initialLogo:{
        x:direction === 'left' ? -100 : 100,
        opacity:0
        
        // slideInFromSide("right",0.5)
    },
    entryAnimate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
      delay:0.5,
    }
    },
    animateFloating:{
      y:[0, -20, 0, 20, 0 ],
      transition:{
        duration:5,
        repeat:Infinity
      }
    }
  }
}




// export const slideInFromSide = (direction, delay) => {
//     return {
//         initial: {
//             x: direction === "left" ? -100 : 100,
//             opacity: 0
//         },
//         animates: {
//             x: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.5,
//                 delay
//             }
//         }

//     }
// }