'use client';
import React from 'react';
import Image from "next/image";
import img from "@/components/gb1.png";
import {IoIosMenu} from "react-icons/io";
import imgL from '@/fotor-2024012710514.jpg'

const First = () => {

    const handleClick = () => {
        const element = document.getElementById('mySidenav');
        const element1 = document.getElementById('md');
        if (element) {
            element.style.width = '250px';
            element1.style.marginLeft = '250px';
            element1.style.transition = '0.5s'
            element1.style.backgroundColor = "rgba(0,0,0,0.4)";
            console.log("hogya")
        }else {
            console.log("htt bsdke")
        }
    }
    return (
        <div className="first">
            <div className="logo">
                <Image src={imgL} width={55} height={55}/>
            </div>
            <div className="details" id="ysh">
               <h2 className="yg">Yash Gupta</h2>
            </div>
            <div className="menu-icon">
                <a href="#" onClick={handleClick}><span> <IoIosMenu size={33}/></span></a>
            </div>
        </div>
    );
};

export default First;