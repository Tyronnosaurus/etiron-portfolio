import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'


const CustomLink = ({href, title, className=""}) => {

    const router = useRouter();

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            {/* Underline appears on hover, stays while on corresponding page */}
            <span className={`h-[1px] inline-block absolute left-0 -bottom-0.5
                              bg-dark dark:bg-light
                              group-hover:w-full transition-[width] ease duration-300
                              ${router.asPath===href ? 'w-full' : 'w-0' }`}>
                &nbsp;
            </span>
        </Link>
    )
}

/* Same as CustomLink, but ensures the hamburger button closes on page change */
const CustomLinkMobile = ({href, title, className="", toggle}) => {

    const router = useRouter();

    const handleClick = () => {
        toggle()          // Close hamburger menu
        router.push(href) // Change page
    }

    return(
        <button href={href} className={`${className} relative group my-2 text-light dark:text-dark`} onClick={handleClick}>
            {title}

            {/* Underline appears on hover, stays while on corresponding page */}
            <span className={`h-[1px] inline-block absolute left-0 -bottom-0.5
                              bg-light dark:bg-dark
                              group-hover:w-full transition-[width] ease duration-300
                              ${router.asPath===href ? 'w-full' : 'w-0' }`}>
                &nbsp;
            </span>
        </button>
    )
}



const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher()
    const [hamburgerIsOpen, sethamburgerIsOpen] = useState(false)

    const handleHamburgerClick = () => {
        sethamburgerIsOpen(!hamburgerIsOpen)
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative
                           dark:text-light'>

            {/* Hamburger menu button. On click, middle bar disappears and the other two rotate 45º to form an X */}
            <button className='flex flex-col justify-center items-center lg:hidden' onClick={handleHamburgerClick}>

                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm
                                  ${hamburgerIsOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>

                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm m-0.5
                                  ${hamburgerIsOpen ? 'opacity-0' : 'opacity-100'}`}>
                </span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm
                                 ${hamburgerIsOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>


            {/* Navbar */}
            <div className='w-full justify-between items-center hidden lg:flex '>
                <nav>
                    <CustomLink href="/"         title="Home"     className='mr-4'/>
                    <CustomLink href="/about"    title="About"    className='mx-4'/>
                    <CustomLink href="/projects" title="Projects" className='mx-4'/>
                    <CustomLink href="/articles" title="Articles" className='ml-4'/>
                </nav>
            </div>


            {/* Collapsable hamburger menu for small screens */}
            {hamburgerIsOpen &&
                <motion.div initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                            animate={{scale:1, opacity:1}}
                            className='min-w-[70vw] flex flex-col items-center justify-between z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                       rounded-lg backdrop-blur-md py-32
                                       bg-dark/90 dark:bg-light/75'>
                    <nav className="flex items-center flex-col justify-center">
                        <CustomLinkMobile href="/"         title="Home"     className='' toggle={handleHamburgerClick}/>
                        <CustomLinkMobile href="/about"    title="About"    className='' toggle={handleHamburgerClick}/>
                        <CustomLinkMobile href="/projects" title="Projects" className='' toggle={handleHamburgerClick}/>
                        <CustomLinkMobile href="/articles" title="Articles" className='' toggle={handleHamburgerClick}/>
                    </nav>

                    {/* Socials & dark mode button */}
                    <nav className='flex items-center flex-wrap justify-center mt-2'>
                        <motion.a href="https://twitter.com"
                                target={"_blank"}
                                className='w-6 sm:mr-3 mr-1'
                                whileHover={{y:-2}}
                                whileTap={{scale:0.9}}>
                            <TwitterIcon />
                        </motion.a>
                        <motion.a href="https://linkedin.com/in/eduardtiron/?locale=en_US"
                                target={"_blank"}
                                className='w-6 sm:mx-3 mx-1'
                                whileHover={{y:-2}}
                                whileTap={{scale:0.9}}>
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a href="https://github.com/Tyronnosaurus"
                                target={"_blank"}
                                className='w-6 sm:ml-3 mx-1 text-light dark:text-dark'
                                whileHover={{y:-2}}
                                whileTap={{scale:0.9}}>
                            <GithubIcon />
                        </motion.a>

                        <button className='sm:ml-3 ml-1 flex items-center justify-center rounded-full p-1'
                                onClick={() => setMode(mode==="light" ? "dark" : "light")}>
                            {mode==="dark" ? <SunIcon className="text-dark"/>
                                           : <MoonIcon className="text-white"/>}
                        </button>
                    </nav>


                </motion.div>
            }


            {/* Logo in the middle of the header */}
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                    <Logo/>
                </div>


            {/* Socials & dark mode button */}
            <nav className='hidden lg:flex items-center justify-center '>
                <motion.a href="https://twitter.com"
                        target={"_blank"}
                        className='w-6 mr-3'
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}>
                    <TwitterIcon />
                </motion.a>
                <motion.a href="https://linkedin.com/in/eduardtiron/?locale=en_US"
                        target={"_blank"}
                        className='w-6 mx-3'
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}>
                    <LinkedInIcon />
                </motion.a>
                <motion.a href="https://github.com/Tyronnosaurus"
                        target={"_blank"}
                        className='w-6 ml-3'
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}>
                    <GithubIcon />
                </motion.a>

                <button className='ml-3 flex items-center justify-center rounded-full p-1'
                        onClick={() => setMode(mode==="light" ? "dark" : "light")}>
                    {mode==="dark" ? <SunIcon className="fill-dark"/>
                                   : <MoonIcon className="fill-dark"/>}
                </button>
            </nav>


        </header>
    )
}

export default NavBar