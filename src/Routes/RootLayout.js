import React from 'react'
import Header from '../Component/Header'
import Sidebar from '../Component/Sidebar'
import { Outlet } from 'react-router-dom'
import "./RootLayout.css"

function RootLayout() {
    return (
        <>
            <section>
                <Header />
            </section>
            <section>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='vvvv'>

                </div>
            </section>

            <Outlet />
        </>)
}

export default RootLayout