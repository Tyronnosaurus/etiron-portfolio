import React, { useEffect, useState } from 'react'


// Checks user's local preferences to select the initial theme
const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme: dark)"   // To check user's preference to select initial mode
    const [mode, setMode] = useState("")

    useEffect(() => {

        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPref = window.localStorage.getItem("theme")

        const handleChange = () => {
            if(userPref){
                let check = (usePref==="dark") ? "dark" : "light"
                setMode(check)
                if(check==="dark") document.documentElement.classList.add("dark")
                else               document.documentElement.classList.remove("dark")
            }else{
                let check = mediaQuery.matches ? "dark" : "light"
                setMode(check)
                if(check==="dark") document.documentElement.classList.add("dark")
                else               document.documentElement.classList.remove("dark")
            }
        }

        mediaQuery.addEventListener("change", handleChange)

    }, [])



    // Save selected theme on local storage whenever user changes it
    useEffect(() => {
        if(mode==="dark"){
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark")
        }else{
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark")
        }
    }, [mode])



    return (
        [mode, setMode]
    )
}





export default useThemeSwitcher