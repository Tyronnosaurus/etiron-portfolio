import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import ProfilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useMotionValue, useInView, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'



const AnimatedNumbers = ({value}) => {
    
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration:3000})
    const isInView = useInView(ref, {once:true})

    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', (latest) => {
            if(ref.current && latest.toFixed(0) <= value ){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return(<span ref={ref}></span>)
}


const AnimatedCounter = ({text, value}) => {

    return(
        <div className='flex flex-col justify-center items-center md:items-end xl:items-center
                        text-center md:text-right xl:text-center my-2'>

            <span className='inline-block font-bold
                             text-4xl xs:text-5xl sm:text-6xl md:text-7xl'>
                <AnimatedNumbers value={value} />+
            </span>

            <h2 className='text-xl font-medium capitalize'>{text}</h2>

        </div>
    )

}



const about = () => {
  return (
    <>
        <Head>
            <title>Eduard Tiron | About Page</title>
            <meta name="description" content="About me page"/>
        </Head>

        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText className='mb-8 md:mb-16 
                                         !text-3xl md:!text-5xl lg:!text-6xl'
                              text="Passion Fuels Purpose!" />

                <div className='grid w-full grid-cols-8 gap-8 md:gap-16'>
                    
                    <div className='flex flex-col items-start justify-startxxx
                                    col-span-8 md:col-span-3 xl:col-span-5 order-2 md:order-1 '>
                        <h2 className='mb-4 text-lg font-bold uppercase w-[100%] text-center md:text-left'>Biography</h2>
                        <p className='font-medium'>
                        Hi, I&apos;m Eduard Tiron, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                        and user-centered digital experiences. With 4 years of experience in the field. I&apos;m always looking for 
                        new and innovative ways to bring my clients&apos; visions to life.
                        </p>
                        <p className='font-medium my-4'>
                        I believe that design is about more than just making things look pretty - it&apos;s about solving problems
                        and creating intuitive, enjoyable experiences for users.
                        </p>
                        <p className='font-medium'>
                        Whether I&apos;m working on a website, mobile app, or other digital products,
                        I bring my commitment to design excellence and user-centered thinking to every project I work on.
                        I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>


                    <div className='relative h-min rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
                                    col-span-8 md:col-span-3 order-1 md:order-2 mx-2 xs:mx-8 md:mx-2'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] bg-dark dark:bg-light
                                        rounded-[2rem] rounded-br-2xl'/>
                        <Image src={ProfilePic} alt="Eduard Tiron" className='w-full h-auto rounded-2xl' priority
                               sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" />
                    </div>


                    <div className='flex flex-col xs:flex-row md:flex-col xl:flex-row
                                    items-center sm:items-end xl:items-center
                                    justify-between
                                    col-span-8 md:col-span-2 xl:col-span-8 order-3'>
                        <AnimatedCounter value={50} text="satisfied clients" />
                        <AnimatedCounter value={40} text="projects completed" />
                        <AnimatedCounter value={5}  text="years of experience" />
                    </div>

                </div>

                <Skills />
                <Experience />
                <Education />

            </Layout>
            
        </main>
    </>
  )
}

export default about