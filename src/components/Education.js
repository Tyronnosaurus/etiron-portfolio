import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({type, time, place, info}) => {

    const ref = useRef(null)

    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center justify-between
                                 w-[80%] lg:w-[60%]'>
            <LiIcon reference={ref}/>

            <motion.div initial={{y:50}}
                        whileInView={{y:0}}
                        transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-lg sm:text-xl md:text-2xl'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75
                                 text-sm sm:text-base'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full text-sm md:text-base'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}


const Education = () => {

    const ref = useRef(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]   //https://www.framer.com/motion/use-scroll/##scroll-offsets
    })


    return (
        <div className='my-64'>
            <h2 className='font-bold w-full text-center
                           text-4xl md:text-6xl lg:text-8xl
                           mb-16 lg:mb-32'>
                Education
            </h2>
        
            <div ref={ref} className='mx-auto relative w-full lg:w-[90%] xl:w-[75%]'>

                {/* Vertical line */}
                <motion.div style={{scaleY: scrollYProgress}}
                            className='absolute top-0 h-full origin-top bg-dark dark:bg-primaryDark
                                       w-[2px] lg:w-[4px]
                                       left-[20px] sm:left-[30px] lg:left-9'/>

                {/* List of past studies */}
                <ul className='w-full flex flex-col items-start justify-between ml-2 sm:ml-4'>
                    <Details type="Bachelor Of Science In Computer Science"
                             time="2016-2020"
                             place="Massachusetts Institute Of Technology (MIT)"
                             info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                             Intelligence."/>
                    <Details type="Master Of Computer Science"
                             time="2020-2022"
                             place="Stanford University"
                             info="Completed a master's project on deep learning, developing a new neural network architecture for natural 
                             language understanding."/>
                    <Details type="Online Coursework"
                             time="2016-2020"
                             place="Coursera And EdX"
                             info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
                             Learning Engineering."/>
                </ul>

            </div>

        </div>

    )
}

export default Education