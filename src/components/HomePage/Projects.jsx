import React from 'react'
import { FromBottom } from '../../reveal/FromBottom'
import { colors } from '../../utils'

const mainProjects = [
    {
        title: 'Shoppng Cart UI',
        img: 'https://cdn.dribbble.com/userupload/11077538/file/original-5844534c68da9ece83fb323ce6d36d2e.png?resize=400x0',
        tags: ['ReactJS', 'Redux', 'DaisyUI', 'TailwindCSS'],
        link: ''
    },
    {
        title: 'Shoppng Cart UI',
        img: 'https://cdn.dribbble.com/userupload/11077538/file/original-5844534c68da9ece83fb323ce6d36d2e.png?resize=400x0',
        tags: ['ReactJS', 'Redux', 'DaisyUI', 'TailwindCSS'],
        link: ''
    },
    {
        title: 'Shoppng Cart UI',
        img: 'https://cdn.dribbble.com/userupload/11077538/file/original-5844534c68da9ece83fb323ce6d36d2e.png?resize=400x0',
        tags: ['ReactJS', 'Redux', 'DaisyUI', 'TailwindCSS'],
        link: ''
    },
    {
        title: 'Shoppng Cart UI',
        img: 'https://cdn.dribbble.com/userupload/11077538/file/original-5844534c68da9ece83fb323ce6d36d2e.png?resize=400x0',
        tags: ['ReactJS', 'Redux', 'DaisyUI', 'TailwindCSS'],
        link: ''
    },
]

const Projects = () => {
    return (
        <div>
            <FromBottom delay={0.5} duration={0.5}>
                <h1 className={`text-center text-${colors.main} text-[2em] font-bold tracking-[1px] mb-5`}>
                    Projects I Have Completed
                </h1>
            </FromBottom>
            <div
                className='px-3 mb-16 md:grid'
                style={{gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr))'}}
            >
                {
                    mainProjects.map((item, k) => (
                        <FromBottom classNames={'mt-[3em] bg-[#242427] w-[20em] rounded-md overflow-hidden p-[1em]'}>
                            <img
                                src={item?.img}
                                alt={item?.title + ' image'}
                                className='h-[10em] w-[100%] mb-3 object-cover rounded'
                            />
                            <h3 className='text-xl my-1 text-center'>{item?.title}</h3>
                            <div className='flex gap-1'>
                                {
                                    item?.tags.map((tag, k) => (
                                        <span key={k} className={`bg-${colors.main} rounded-xl px-2 text-xs`}>{tag}</span>
                                    ))
                                }
                            </div>
                            <button className={`bg-${colors.main} px-4 py-2 rounded mt-4 float-right`}>Source Code</button>
                        </FromBottom>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects