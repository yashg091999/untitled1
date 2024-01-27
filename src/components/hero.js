import React from 'react';
import img from'@/components/gb1.png'
import img1 from '@/images/yashgupta (2).png'
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import First from "@/components/first";
import Second from "@/components/second";
import Third from "@/components/third";
import Navbar from "@/components/navbar";
const Hero = () => {
    return (
        <div className="main-div"id="md" >
            <Navbar />
            <div className="first-div">
            <First />
            </div>
            <div className="toggle">
                <div className="second-div">
                    <Second/>
                </div>
                <div className="third-div">
                    <Third/>
                </div>
            </div>
        </div>
    );
};

export default Hero;