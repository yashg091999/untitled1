'use client';
import React from 'react';
import Link from "next/link";
import ResumePDF from './Yash_Gupta_resume_S.pdf';

const Navbar = () => {
    const closeNav = () =>{
       const element = document.getElementById('mySidenav');
        const element1 = document.getElementById('md');
       if(element){
           element.style.width = '0px'
           element1.style.marginLeft = '0px'
           element1.style.transition = '0.5s'
           element1.style.backgroundColor = "white";
       }
    }
    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <Link href='http://localhost:3000/' legacyBehavior>
                    <a href="">Home</a>
                </Link>
                <Link href='/about' legacyBehavior>
                    <a href="../app/about">About</a>
                </Link>
                <Link href='/contact' legacyBehavior>
                    <a href="../app/contact">Contact</a>
                </Link>
                <a href={ResumePDF} download="Yash_Gupta.pdf">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;