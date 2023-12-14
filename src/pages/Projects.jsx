import React, { useCallback, useState } from 'react'
import { FromBottom } from '../reveal/FromBottom'
import './styles/Projects.scss'
import TextAnimated from '../components/Animations/TextAnimated'
import Card from '../components/Projects/Card'
import { projects } from './ProjectDetails'


const headings = 'These Are My Projects'

const Projects = () => {
    const [projectModal, setProjectModal] = useState(null)

    const closeProjectCard = useCallback(() => {
        setProjectModal(null)
    }, [])
    return (
        <div className='projects'>
            <FromBottom delay={0.5} duration={0.5}>
                <h1>{headings.split('').map((ele, i) => (
                    <TextAnimated key={i}>{ele}</TextAnimated>
                ))}</h1>
            </FromBottom>

            <div className='message-list'>
                {
                    projects.map((item, i) => (
                        <FromBottom
                            duration={0.5}
                            key={i}
                        >
                            <div
                                key={i}
                                className='message-list-item'
                                onClick={() => setProjectModal(item)}
                            >
                                {item.title}
                            </div>
                        </FromBottom>
                    ))
                }
            </div>

            {
                projectModal &&
                <Card project={projectModal} handleClose={closeProjectCard} />
            }

        </div>
    )
}

export default Projects