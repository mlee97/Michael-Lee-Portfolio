import './Home.scss';
import '../Layout/Layout.scss'
import M from '../../assets/img/M.png'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "ichael".split("")
    const professionArray = "Software Engineer".split("")
    const jobArray = "Java".split("")

    useEffect(() => {

        setTimeout (() => {
            setLetterClass('text-animate-hover')
        }, 4000)

    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={M} alt="M"/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={professionArray} index={21}/>
                    </h1>
                    <h2>Experience in Java / React Native / DevOps</h2>
                    <Link to="/contact" className='flat-button'>Contact Me</Link>
                </div>
                <Logo />
            </div>
            <Loader type='line-scale' />
        </>
    );
}

export default Home