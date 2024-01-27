'use client';
import React, {useState} from 'react';
import axios from "axios";
const ContactForm = () => {

    const [user,setUser] = useState({
        name: "",
        email:"",
        message:""
    });

    const handleCLick = (e) =>{
        const {name,value} = e.target;

        setUser({
            ...user,
            [name]:value
        })
    }
    const register = () => {
        axios.post("http://localhost:9003/details",user)
            .then( res=>console.log(res))
    }

    return (
        <div className="form">
            <div>
                <h1>Contact Me</h1>
            </div>
            <form className="form-content">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" name="name"  value={user.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleCLick}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" name="email"  value={user.email}className="form-control" id="exampleInputPassword1" onChange={handleCLick}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                    <textarea type="text" name="message"  value={user.message}className="form-control" id="exampleInputPassword1" rows={7} onChange={handleCLick}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={register}>Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;