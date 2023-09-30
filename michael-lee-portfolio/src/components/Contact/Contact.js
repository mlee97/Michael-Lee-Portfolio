import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const word = "Contact Me".split("")
    
    useEffect(() => {

        setTimeout (() => {
            setLetterClass('text-animate-hover')
        }, 4000)

    }, [])
    
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'contact_service',
                'template_cn1opvn',
                form.current,
                'pN-TfKYduxx31yyoM'
            )
            .then(
                () => {
                    alert ('Message successfully sent')
                    window.location.reload(false)
                },
                () => {
                    alert ('Failed to send the message. Ensure all fields are properly entered')
                }
            )
    }
    
    return (
        <>
            <div className='container contact-page'>
                <section>
                    <div className='text-zone'>
                        <h1>
                        <AnimatedLetters 
                                letterClass={letterClass}
                                strArray={word}
                                idx={15}
                            />
                        </h1>
                        <p>
                            I am currently looking for opportunities, especially in fast-paced up-and-coming companies. 
                            If my skillset intrigues you or you would just like to ask me a question, feel free to 
                            contact me via the form below.
                        </p>
                        <div className='contact-form'>
                            <form ref={form} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input type='text' name='from_name' placeholder='Name' required />
                                    </li>
                                    <li className='half'>
                                        <input type='email' name='email' placeholder='Email' required />
                                    </li>
                                    <li>
                                        <input type='text' name='subject' placeholder='Subject' required />
                                    </li>
                                    <li>
                                        <textarea name='message' placeholder='Message' required />
                                    </li>
                                    <li>
                                        <input type='submit' className='flat-button' value="SEND" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Loader type='line-scale' />
        </>

    )

}

export default Contact