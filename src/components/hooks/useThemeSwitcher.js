import React, { useEffect, useState } from 'react'


// Checks user's local preferences to select the initial theme
const useThemeSwitcher = () => {

    const [mode, setMode] = useState("")

    useEffect(() => {

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)") // To check user's preference in the browser's settings (for all websites)

        const handleChange = () => {
            const userPref = window.localStorage.getItem("theme")            // To check previously saved value (for this website)

            if(userPref){

                let check = (userPref==="dark") ? "dark" : "light"
                setMode(check)
                // window.localStorage.setItem("theme", check)
            }else{
                let check = mediaQuery.matches ? "dark" : "light"
                setMode(check)
            }
        }

        handleChange() // Do it once on page load

        mediaQuery.addEventListener("change", handleChange)       

        return( () => mediaQuery.removeEventListener("change", handleChange) ) // Optional cleanup, runs every time the component unmounts
    }, [])



    // Save selected theme on local storage whenever user changes it
    useEffect(() => {
        console.log("mode:", mode)

        if(mode==="dark"){
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark")
        }
        else if(mode==="light"){        // We use 'else if' instead of 'else' because there is a 3rd condition (mode==="") 
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark")
        }
        
    }, [mode])



    return ( [mode, setMode] )
}


export default useThemeSwitcher