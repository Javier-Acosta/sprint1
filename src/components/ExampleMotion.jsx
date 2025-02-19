import React from 'react'
import { motion } from 'framer-motion'

const ExampleMotion = () => {

    const animate={
        animate:{
            rotate:-360,
        transitions:{
            duration:1
        }
    } 
    }


  return (
    <div className='flex flex-col items-center justify-center'>


    <motion.div
        className='w-[100px] h-[100px] bg-amber-500 rounded-xl mb-1'
        animate={animate.animate}
        transition={animate.animate.transitions}
        
    >

    </motion.div>
    <motion.div
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#ff0088",
                    borderRadius: 5,}}
                animate={{ rotate: 360 }}
                exit={{ opacity: 0, y:20 }}
                transition={{ duration: 1 }}
            />

            {/* Ejemplo 2 */}
           
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y:20 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }
        }
        style={ {
            width: 100,
            height: 100,
            backgroundColor: "#dd00ee",
            borderRadius: "50%",
        }}
        />
       
    </div>
  )
}

export default ExampleMotion

 