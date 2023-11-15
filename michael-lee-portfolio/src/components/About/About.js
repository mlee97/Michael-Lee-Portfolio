import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss';
import '../Layout/Layout.scss'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import profile from '../../assets/img/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const word = "About Me".split("")

    useEffect(() => {

        setTimeout (() => {
            setLetterClass('text-animate-hover')
        }, 4000)

    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={word}
                            idx={15}
                        />
                    </h1>
                    <p>
                        In Spring of 2022 I graduated from Concordia University in Montreal, Canada with a Bachelor of Engineering in Software Engineering.
                        During my capstone project, I worked in a team of 11 to create a mobile application using React Native. Our idea was to create an 
                        application that helps users identify waste and instructs them how to dispose of it by utilizing the camera on their mobile device. 
                        By leading the testing/QA team, as well as actively participating in the front-end implementation, we were able to successfully deliver
                        the app. Feel free to check out some of my other projects on <a target="_blank" href="https://github.com/mlee97">GitHub.</a>
                    </p>
                    <br/>
                    <p>
                        During my studies, I completed two internships both at Matrox in Dorval, Canada.
                    </p>
                </div>
                <div className='image-container'>
                    <div className='content'>
                        <img src={profile} />
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mleemtl/">
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
            <Loader type='line-scale' />
        </>
    )

}

export default About