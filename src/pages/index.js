import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import ProfilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'


export default function Home() {
  return (
    <>
      <Head>
        <title>Eduard Tiron</title>
        <meta name="" content="" />
      </Head>
      
      <main className='flex items-center w-full min-h-screen text-dark dark:text-light'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            
            <div className='w-1/2'>
              <Image src={ProfilePic} alt="Eduard Tiron" className='w-full h-auto' priority
                     sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
            </div>

            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left' />
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>


              {/* Buttons */}
              <div className='flex items-center self-start mt-2'>

                <Link href="/" target="_blank"
                      className='flex items-center p-2.5 px-6 rounded-lg font-semibold
                               bg-dark text-light hover:bg-light hover:text-dark
                                 border-2 border-solid border-dark hover:border-dark
                               dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light'>
                  Resume <LinkArrow className='w-6 ml-1' />
                </Link>

                <Link href="mailto:abcd@gmail.com" target="_blank"
                      className='ml-4 text-lg font-medium capitalize underline text-dark dark:text-light'>
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
