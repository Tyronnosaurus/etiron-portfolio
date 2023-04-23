import React from 'react'
import Layout from './Layout'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
            <div className='flex items-center'>
                Built with <span className= 'text-2xl px-1'> &#9825; </span> by&nbsp;
                <Link href='https://devdreaming.com' target='_blank'>CodeBucks</Link>, Eduard Tiron
            </div>
        </Layout>
    </footer>
  )
}

export default Footer