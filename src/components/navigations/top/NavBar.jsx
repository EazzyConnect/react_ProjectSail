import React, { useEffect, useState } from 'react'

const NavBar = () => {

    const [time, setTime] = useState("");

    useEffect(() => {
        showTime()
    }, [])

    const showTime = () => {
        setInterval(() => {
            setTime(new Date().toUTCString())
        }, 1000)
    }

    return (
        <>

            {
                time
            }

        </>
    )
}

export default NavBar
