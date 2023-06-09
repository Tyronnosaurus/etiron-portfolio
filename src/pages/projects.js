import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import project2 from '../../public/images/projects/portfolio-cover-image.jpg'



const FramerImage = motion(Image);


const FeaturedProject = ({title, summary, img, link, github}) => {

    return(
        <article className='w-full items-center justify-between border border-solid shadow-2xl relative 
                          border-dark bg-light dark:border-light dark:bg-dark
                            flex flex-col xl:flex-row
                            p-4 sm:p-8 xl:p-12
                            rounded-3xl sm:rounded-2xl'>
        
            {/* Box shadow */}
            <div className='absolute top-1 -z-10 h-[101%] w-full bg-dark dark:bg-light
                            -right-2 sm:-right-3
                            rounded-[1.5rem] sm:rounded-3xl sm:rounded-br-2xl'/>

            <Link href={link} target="_blank" className='cursor-pointer overflow-hidden rounded-lg
                                                         w-full xl:w-1/2'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                             whileHover={{scale:1.05}}
                             transition={{duration:0.1}}
                             priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw" />
            </Link>
            
            <div className='flex flex-col items-start justify-between
                            w-full xl:w-1/2
                            pl-0 xl:pl-6
                            pt-3 xl:pt-0'>
                <span className='text-primary dark:text-primaryDark font-medium
                                   text-lg md:text-xl'>
                    Featured project
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left font-bold
                                   text-xl md:text-4xl'>
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-sm md:text-lg'>{summary}</p>
                
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> <GithubIcon/> </Link>
                    <Link href={link} target="_blank"
                          className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 font-semibold
                                     px-4 md:px-6  text-base md:text-lg'>
                        See live
                    </Link>
                </div>
            </div>

        </article>
    )
}


const Project = ({title, img, link, github}) => {
  return (
    <article className='w-full items-center justify-center border border-solid relative shadow-2xl
                      border-dark bg-light dark:border-light dark:bg-dark
                        flex flex-col xl:flex-row
                        p-2 sm:p-4 xl:p-6
                        rounded-2xl sm:rounded-2xl'>
        
        {/* Box shadow */}
        <div className='absolute top-0 -z-10 w-[100%] h-[102%] bg-dark dark:bg-light
                        -right-2 sm:-right-3
                        rounded-[1.5rem] sm:rounded-3xl sm:rounded-br-2xl'/>

        <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className='w-full h-auto'
                         whileHover={{scale:1.05}}
                         transition={{duration:0.1}} />
        </Link>
        
        <div className='w-full flex flex-col items-start justify-between mt-4
                        pl-0 xl:pl-6'>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left font-bold
                               text-lg md:text-3xl'>
                    {title}
                </h2>
            </Link>
            
            <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target="_blank" className='rounded-lg text-lg font-semibold underline'> See live </Link>
                <Link href={github} target="_blank" className='w-10'> <GithubIcon/> </Link>
            </div>
        </div>

    </article>
  )
}




const projects = () => {
  return (
    <>
        <Head>
            <title>Eduard Tiron | Projects Page</title>
            <meta name="Projects Page" content="Portfolio of my professional and personal projects"/>
        </Head>

        <main className='mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!"
                              className='mb-8 md:mb-16 
                                         !text-3xl md:!text-5xl lg:!text-6xl'/>

                <div className='grid grid-cols-6 md:grid-cols-12 
                                gap-x-8 lg:gap-x-16
                                gap-y-8 md:gap-y-16 2xl:gap-y-28'>
                    <div className='col-span-6 md:col-span-12'>
                        <FeaturedProject title="Crypto Screener Application"
                                         summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                                  local currency."
                                         img={project1}
                                         link="/"
                                         github="/"/>
                        
                    </div>
                    <div className='col-span-6'>
                        <Project title="Crypto Screener Application"
                                 img={project1}
                                 link="/"
                                 github="/"/>
                    </div>
                    <div className='col-span-6'>
                        <Project title="Crypto Screener Application"
                                 img={project1}
                                 link="/"
                                 github="/"/>
                    </div>
                    <div className='col-span-6 md:col-span-12'>
                        <FeaturedProject title="React Portfolio Website"
                                         summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                                                  page transitions, cool background effects, unique design and it is mobile responsive." 
                                         img={project2}
                                         link="/"
                                         github="/"/>
                    </div>
                    <div className='col-span-6'>
                        <Project title="React Portfolio Website"
                                 img={project2}
                                 link="/"
                                 github="/"/>
                    </div>
                    <div className='col-span-6'>
                        <Project title="React Portfolio Website"
                                 img={project2}
                                 link="/"
                                 github="/"/>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects