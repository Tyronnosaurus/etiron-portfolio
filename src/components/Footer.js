import React from 'react'
import Layout from './Layout'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='w-full font-medium  dark:text-light
                       text-base md:text-lg
                       border-t-2 border-solid border-dark dark:border-light'>
        
        <Layout className='items-center justify-centerx md:justify-between
                           flex flex-col md:flex-row
                           md:p-8 lg:p-8 xl:p-8'>

            <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>

        </Layout>

    </footer>
  )
}

export default Footer