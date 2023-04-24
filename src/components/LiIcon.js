import React from 'react'
import { motion, useScroll } from 'framer-motion'


const LiIcon = ({reference}) => {

    const {scrollYProgress} = useScroll({
        target: reference,
        offset: ["center end", "center center"]   //https://www.framer.com/motion/use-scroll/##scroll-offsets
    })

  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
        <svg className='-rotate-90' width="75" height="75" viewBox='0, 0, 100, 100'>
            <circle cx="75" cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none'/>   {/* Thin circle */}
            <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-light dark:fill-dark'        
                           style={{pathLength:scrollYProgress}}/>                              {/* Thick progress circle */}
            <circle cx="75" cy="50" r="10" className='stroke-1 fill-primary dark:fill-primaryDark animate-pulse'/> {/* Interior pulsating circle */}
        </svg>
    </figure>
  )
}

export default LiIcon