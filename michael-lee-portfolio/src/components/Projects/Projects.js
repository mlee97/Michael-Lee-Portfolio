import './Projects.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import '../Layout/Layout.scss'
import Loader from 'react-loaders';

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const word = "Projects".split("")

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
            </div>
            <Loader type='line-scale' />
        </div>
    )

}

export default Projects