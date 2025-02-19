import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromSide } from './utility/animation'

const Body = () => {
  return (
    <div className='flex justify-center mt-36 md:mt-20'>
    
    <motion.div 
     
    variants={slideInFromSide("right",0.5)}
    initial="initial "
    animate={["animate"]}
    
    className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>

    <img src="./assets/LogoNavbar.png"
    className='w-46'
     />

    </motion.div>
    </div>
    
  )
}

export default Body


