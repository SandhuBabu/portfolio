import React, { useCallback, useRef } from 'react'
import TextAnimated from '../components/Animations/TextAnimated'
import { MdSend } from "react-icons/md"
import emailjs from 'emailjs-com'
import './styles/Contact.scss'
import { useNavigate } from 'react-router-dom'
import { FromBottom } from '../reveal/FromBottom'

const heading = 'Contact Me'

const Contact = () => {
    const navigate = useNavigate()

    const formRef = useRef();
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        emailjs.sendForm('service_ogryok8', 'template_c5jgxoe', formRef.current, 'A1SpFl49ST7oMu2GN')
            .then(res => {
                console.log(res);
            }).catch(() => {
                alert('failed to send message')
            })
        e.target.reset()
        navigate('/')
    }, [])

    return (
        <div>
            <FromBottom delay={0.5} duration={0.5}>
                <h1 className='heading'>{heading.split('').map((ele, i) => (
                    <TextAnimated key={i}>{ele}</TextAnimated>
                ))}</h1>
            </FromBottom>


            <FromBottom duration={0.5} delay={0.75}>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" name='name' required />
                        <label htmlFor="name">Name</label>
                    </div>

                    <div className="input-group">
                        <input type="text" name='email' required />
                        <label htmlFor="email">Email Address</label>
                    </div>

                    <div className="input-group message">
                        <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                        <label htmlFor="email">Message here</label>
                    </div>

                    <button>
                        <span>Send Message</span>
                        <MdSend />
                    </button>
                </form>
            </FromBottom>
        </div>
    )
}

export default Contact