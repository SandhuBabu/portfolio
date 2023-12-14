import React from 'react'
import TextAnimated from '../components/Animations/TextAnimated'
import { FromBottom } from '../reveal/FromBottom'

const heading = `My ${new Date().getFullYear()} Tech Stack`.split('')

const techstack = [
    'JavaScript', 'ReactJS', 'Vite', 'NodeJS',
    'TailwindCSS', 'DaisyUI', 'PrimeReact', 'NPM',
    'Java', 'Spring Boot', 'Maven', 'MySQL'
]

const TechStacks = () => {
    return (
        <div>
            <FromBottom delay={0.5} duration={0.65}>
                <h1 className='heading'>
                    {heading.map((i, k) => <TextAnimated key={k}>{i}</TextAnimated>)}
                </h1>
            </FromBottom>

            <div className="message-list">
                {
                    techstack.map((tech, k) => (
                        <FromBottom key={k} delay={0.75} duration={0.75}>
                            <p className="message-list-item">
                                {tech}
                            </p>
                        </FromBottom>
                    ))
                }
            </div>
        </div>
    )
}

export default TechStacks