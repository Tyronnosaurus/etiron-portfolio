import React from 'react'


const Layout = ({children, className,}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark ${className}
                     p-8 md:p-12 lg:p-16 xl:p-24}`}>
        {children}
    </div>
  )
}

export default Layout