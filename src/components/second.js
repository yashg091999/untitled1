'use client';
import React from 'react';
import Image from "next/image";
import {useEffect} from "react";
import img1 from "@/images/yashgupta (2).png";
import { IoLocationOutline } from "react-icons/io5";
import {gsap} from "gsap";
const Second = () => {




    return (
        <div className="second">
            <div className="email" id="em">
                <div className="email-h">
                    <h4 className="h4" id="h4"><span className="email-span">EMAIL: </span> YASHG091999@GMAIL.COM</h4>
                </div>
            </div>
            <div className="info">
                <div className="info-h" id="info-h">
                    <h3 className="info-head">HELLO, I’M YASH.
                        STUDENT
                        AT <span className="facebook">JIMS.</span>
                    </h3>
                </div>
                <div className="info-p">
                    <p className="info-para">

                        As a fresh web developer, I come equipped with a strong foundation in C++ programming and a keen interest in web development. My skills extend beyond mere technical proficiency; I possess a deep passion for creating engaging digital experiences and a drive to continuously learn and adapt in this ever-evolving field.
                    </p>
                </div>

                <div className="info-sign">
                    <Image src={img1} width={125} height={125}/>
                </div>
            </div>
            <div className="location">
                <div className="location-logo">
                        <IoLocationOutline size={40} />
                </div>
                <div className="location-info">
                    <p className="location-para">currently in <br/> <span className="span1">Delhi</span></p>
                </div>
            </div>
        </div>
    );
};

export default Second;