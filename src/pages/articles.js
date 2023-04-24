import React, { useRef } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'

import article1img from '../../public/images/articles/pagination component in reactjs.jpg'
import article2img from '../../public/images/articles/create loading screen in react js.jpg'
import article3img from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import article4img from '../../public/images/articles/smooth scrolling in reactjs.png'
import article5img from '../../public/images/articles/create modal component in react using react portals.png'
import article6img from '../../public/images/articles/todo list app built using react redux and framer motion.png'
import article7img from '../../public/images/articles/What is Redux with easy explanation.png'
import article8img from '../../public/images/articles/What is higher order component in React.jpg'



const FramerImage = motion(Image);





const FeaturedArticle = ({img, title, time, summary, link}) => {
    return(
        <li className='col-span-1 w-full p-4 border border-solid rounded-2xl relative
                     bg-light border-dark dark:bg-dark dark:border-light'>
            
            {/* Box shadow */}
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] bg-dark dark:bg-light
                            rounded-3xl rounded-br-2xl'/>
            
            <Link href={link} target='_blank'
                  className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                             whileHover={{scale:1.05}}
                             transition={{duration:0.1}} />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold mb-2 mt-4 hover:underline'>
                    {title}
                </h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}


const MovingImage = ({title, img, link}) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    // Move image with the cursor
    function handleMouse(event) {
        imgRef.current.style.display = 'inline-block'
        x.set(event.pageX)
        y.set(-10)
    }

    // Hide image when cursor leaves
    function handleMouseLeave(event) {
        imgRef.current.style.display = 'none'
        x.set(0)
        y.set(0)
    }

    return(
            <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
                <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
                <FramerImage ref={imgRef} src={img} alt={title} className='w-96 h-auto absolute rounded-lg z-10 hidden'
                             style={{x:x, y:y}}
                             initial={{opacity:0}}
                             whileInView={{opacity:1, transition:{duration:0.2}}}/>
            </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return(
        <motion.li className='relative w-full px-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark
                              first:mt-0 border border-solid border-dark dark:border-light
                              border-r-4 border-b-4'
                   initial={{y:100}}
                   whileInView={{y:0, transition:{duration:0.3, ease:"easeInOut"}}}
                   viewport={{once:true}}>
            <MovingImage title={title} img={img} link={link}/>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4'>{date}</span>
        </motion.li>
    )
}


const articles = () => {
  return (
    <>
        <Head>
            <title>Eduard Tiron | Articles</title>
            <meta name="" content=""/>
        </Head>

        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText className='mb-16' text="Words Can Change The World!" />

                <ul className='grid grid-cols-2 gap-16'>
                    <FeaturedArticle title="Build A Custom Pagination Component In Reactjs From Scratch"
                                     summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                                     Follow this step-by-step guide to integrate Pagination component in your ReactJS project"
                                     img={article1img}
                                     time="9 min read"
                                     link="/" />

                    <FeaturedArticle title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                                     summary="Learn how to create stunning loading screens in React with 3 different methods. 
                                     Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                                     Improve the user experience."
                                     img={article2img}
                                     time="10 min read"
                                     link="/" />
                </ul>

                <h2 className='font-bold text-4xl w-full text-center my-16 mt-52'>All articles</h2>

                <Article title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                         img={article3img}
                         date="March 22, 2023"
                         link="/" />

                <Article title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                         img={article4img}
                         date="March 22, 2023"
                         link="/" />

                <Article title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                         img={article5img}
                         date="March 22, 2023"
                         link="/" />

                <Article title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
                         img={article6img}
                         date="March 22, 2023"
                         link="/" />

                <Article title="Redux Simplified: A Beginner's Guide For Web Developers"
                         img={article7img}
                         date="March 22, 2023"
                         link="/" />

                <Article title="What Is Higher Order Component (Hoc) In React?"
                         img={article8img}
                         date="March 22, 2023"
                         link="/" />

            </Layout>
        </main>
    </>
  )
}

export default articles