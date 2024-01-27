'use client';
import React from 'react';
import First from "@/components/first";
import '@/app/globals.css'
import Navbar from "@/components/navbar";
import Second from "@/components/second";
import ContactMeThird from "@/components/contactMeThird";
import ContactForm from "@/components/contactForm";
const Page = () => {
    return (
        <div>
            <div className="main-div" id="md">
                <Navbar/>
                <div className="first-div">
                    <First/>
                </div>
                <div className="toggle">
                    <div className="second-div">
                     <ContactForm />
                    </div>
                    <div className="third-div">
                        <ContactMeThird />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;