import React from 'react'
import { motion } from 'framer-motion'


const Skill = ({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold shadow-dark cursor-pointer absolute
                         bg-dark text-light dark:bg-light dark:text-dark
                           text-sm lg:text-base
                           py-1.5 lg:py-2 xl:py-3 
                           px-3 lg:px-4 xl:px-6'
                whileHover={{scale:1.05}}
                initial={{x:0, y:0}}
                whileInView={{x:x, y:y, transition:{duration:1, ease:"easeInOut"}}}
                viewport={{once:true}}>
        {name}
    </motion.div>
  )
}



const Skills = () => {
  return (
    <>
        <h2 className='font-bold w-full text-center
                       text-6xl lg:text-8xl
                       mt-32 lg:mt-64'>
          Skills
        </h2>

        {/* bg-circularLight defined in tailwind.config.js (created with https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-radial-gradient) */}
        <div className='w-full relative flex items-center justify-center rounded-full
                        bg-circularLight dark:bg-circularDark
                        h-[50vh] sm:h-[60vh] lg:h-[80vh] xl:h-screen'>

            <Skill name="Web"        x="0vw"   y="0vw" />
            <Skill name="HTML"       x="-25vw" y="2vw" />
            <Skill name="CSS"        x="-5vw"  y="-10vw" />
            <Skill name="Javascript" x="20vw"  y="6vw" />
            <Skill name="ReactJS"    x="0vw"   y="12vw" />
            <Skill name="NextJS"     x="-20vw" y="-15vw" />
            <Skill name="GatsbyJS"   x="15vw"  y="-12vw" />
            <Skill name="Web Design" x="32vw"  y="-5vw" />
            <Skill name="Figma"      x="0vw"   y="-20vw" />
            <Skill name="Firebase"   x="-25vw" y="18vw" />
            <Skill name="Tailwind"   x="19vw"  y="18vw" />

        </div>
    </>
  )
}

export default Skills