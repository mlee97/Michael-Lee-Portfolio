import './Projects.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import '../Layout/Layout.scss'
import Loader from 'react-loaders';
import lionDanceWebsite from '../../assets/img/lion-dance-website.png';

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const word = "Projects".split("")

    const slides = [
        {
            url: "../../assets/img/lion-dance-website.png"
        },
        {
            url: "../../assets/img/lion-dance-website.png"
        },
    ]

    useEffect(() => {

        setTimeout (() => {
            setLetterClass('text-animate-hover')
        }, 4000)

    }, [])

    return (
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={word}
                        idx={15}
                    />
                </h1>
                <p>
                    Take a look at some of the projects I have worked on in the past
                </p>

                <div className='image-slider' style={{backgroundImage:`url(${slides[0].url})`}}>
                    <div className='gallery' />
                </div>
            </div>
            <Loader type='line-scale' />
        </div>
    )

}

export default Projects