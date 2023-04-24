import React from 'react'
import "./Header.css"
function Header() {
    return (
        <>
            <div class="container">
                <div class="topbar">
                    <div class="logo">
                        <h2>Brand.</h2>
                    </div>
                    <div class="search">
                        <input type="text" name="search" placeholder="search here" />
                        <label for="search"><i class="fas fa-search"></i></label>
                    </div>
                    <i class="fas fa-bell"></i>
                    <div class="user">
                        <img src="logo192.png" alt="" />
                    </div>
                </div>
            </div>
        </>)
}

export default Header