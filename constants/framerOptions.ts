export const viewport = {
  once: true,
  margin: "0% 0% -45% 0%"  
}
export const parentVariant = {
  visible: { opacity:1,transition:{staggerChildren:.3} },
  hidden: {opacity:0}
}
export const slideUpVariant = {
  visible: {opacity:1,y:0},
  hidden: { opacity:0, y:100},
  transition: {
    duration:.5
  }
}
export const slideRightVariant = {
  visible: {opacity:1,x:0},
  hidden: { opacity:0, x:-300}
}

export const slideLeftVariant = {
  visible: {opacity:1,x:0},
  hidden: { opacity:0, x:300}
}
