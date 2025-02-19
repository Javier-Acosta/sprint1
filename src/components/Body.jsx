import React from 'react'
import {motion} from 'framer-motion'
import { animateForLogo } from './utility/animation'
import terjeta from '../assets/tarjeta.png'

const Body = () => {

 
  return (
    <div className='flex justify-center mt-36 md:mt-20'>
    
    <motion.div 
     className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-1 '
    variants={animateForLogo('right')}
    initial='initialLogo'
    animate={['entryAnimate', 'animateFloating']}
     >
    

    <img 
    src={terjeta}
    className='w-80'
     />

    </motion.div>
    </div>
    
  )
}

export default Body


