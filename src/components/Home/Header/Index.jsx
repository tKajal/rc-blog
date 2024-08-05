import React from 'react';
import './Styles.css'
import TopNav from '../../Common/TopNav/Index';
import 'animate.css';
const Header = () =>

    <header className='home-header'>
        <div className='top-nav'>
            <TopNav />
        </div>

        <div className='banner-wrap' >
            <div className='banner-content'>
            <h1>Connecting <span> People, Projects and Products </span> worldwide</h1>
            <p>Get the email newsletter and unlock access to members-only content and updates</p>
            </div>
           
        </div>

    </header>


export default Header