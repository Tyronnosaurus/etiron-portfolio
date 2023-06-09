import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import ProfilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import { TransitionEffect } from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>Eduard Tiron</title>
        <meta name="" content="" />
      </Head>

      <TransitionEffect />
      
      <main className='flex items-center w-full min-h-screen text-dark dark:text-light'>
        <Layout className='pt-8 md:pt-16 lg:pt-0'>
          <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
            
            <div className='w-[70%] lg:w-1/2'>
              <Image src={ProfilePic} alt="portrait" priority
                     className='h-auto inline-block lg:w-full'
                     sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
            </div>

            <div className='flex flex-col items-center self-center w-full lg:w-1/2'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design."
                            className='!text-center lg:!text-left
                                       !text-3xl md:!text-5xl lg:!text-6xl xl:!text-5xl' />
              <p className='my-4 font-medium
                            text-xs md:text-sm lg:text-base
                            text-center lg:text-left'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>


              {/* Buttons */}
              <div className='flex items-center mt-2 self-center lg:self-start'>

                <Link href="/" target="_blank"
                      className='flex items-center rounded-lg font-semibold
                                 p-2 px-4 md:p-2.5 md:px-6
                                 text-sm md:text-base
                               bg-dark text-light hover:bg-light hover:text-dark
                                 border-2 border-solid border-dark hover:border-dark
                               dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light'>
                  Resume <LinkArrow className='w-6 ml-1' />
                </Link>

                <Link href="mailto:abcd@gmail.com" target="_blank"
                      className='font-medium capitalize underline text-dark dark:text-light
                                 ml-2 xs:ml-4
                                 text-sm md:text-base'>
                  Email me
                </Link>

              </div>

            </div>

          </div>
        </Layout>
      </main>

    </>
  )
}
