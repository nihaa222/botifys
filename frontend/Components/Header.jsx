import React, { useEffect } from 'react'

function Header() {
    useEffect(() => {
        const testFn = async () => {
            try {
                const response = await fetch("http://localhost:3000")

                const data = await response.json();  // or response.text() depending on the response format
                console.log(data);

            } catch (error) {
                console.error("Error fetching data", error)
            }
        }
        testFn();
    }, [])
    return (
        <div>
            <p className='font-bold font-mono text-3xl'>Botify</p>

            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Organisation</li>
                <li>Integration</li>
            </ul>
            <p>SignUp</p>


        </div>
    )
}

export default Header