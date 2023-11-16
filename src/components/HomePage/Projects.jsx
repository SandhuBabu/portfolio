import React from 'react'
import { FromBottom } from '../../reveal/FromBottom'
import Heading from './Heading'
import { Link } from 'react-router-dom'
import ShoppingCart1 from '../../assets/shopping-cart-1.png'
import ShoppingCart2 from '../../assets/shopping-cart-2.png'

const mainProjects = [
    {
        title: 'Shoppng Cart UI',
        img: ShoppingCart1.toString(),
        tech: 'ReactJS, Redux, DaisyUI, Tailwind',
        link: 'https://github.com/SandhuBabu/shopping-cart-frontend'
    },
    {
        title: 'Shoppng Cart Backend',
        img: ShoppingCart2.toString(),
        tech: 'Java, Spring Boot',
        link: ''
    },
    {
        title: 'Twitter Clone',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnI0Fh4cV_CJU_Hj5aoI1ysrQxruQYDLU8Pw',
        tech: 'ReactJS, Spring Boot, MUI',
        link: 'https://github.com/SandhuBabu/twitter-clone'
    },
    {
        title: 'Shoppng Cart UI',
        img: 'https://cdn.dribbble.com/userupload/11077538/file/original-5844534c68da9ece83fb323ce6d36d2e.png?resize=400x0',
        tech: 'ReactJS, Spring Boot',
        link: ''
    },
    {
        title: 'Shoppng Cart UI',
        img: 'https://cdn.dribbble.com/userupload/11077538/file/original-5844534c68da9ece83fb323ce6d36d2e.png?resize=400x0',
        tech: 'ReactJS, Spring Boot',
        link: ''
    },
    {
        title: 'Shoppng Cart UI',
        img: 'https://cdn.dribbble.com/userupload/11077538/file/original-5844534c68da9ece83fb323ce6d36d2e.png?resize=400x0',
        tech: 'ReactJS, Spring Boot',
        link: ''
    },
    {
        title: 'Shoppng Cart UI',
        img: 'https://cdn.dribbble.com/userupload/11077538/file/original-5844534c68da9ece83fb323ce6d36d2e.png?resize=400x0',
        tech: 'ReactJS, Spring Boot',
        link: ''
    },
]

const Projects = () => {
    return (
        <div className='md:mt-0 mt-[4em]'>
            <FromBottom delay={0.5} duration={0.5}>
                <Heading
                    text="Projects I Have Completed"
                    size="2em"
                    customClass='mb-6'
                />
            </FromBottom>
            <div className='project-wrap'>
                {
                    mainProjects.map((item, k) => (
                        <FromBottom
                            key={k}
                            delay={0.35}
                            duration={0.75}
                            classNames={'md:mt-[3em] flex gap-3 bg-[#242427] md:w-[22em] rounded-md overflow-hidden p-[1em]'}
                        >
                            <img
                                src={item?.img}
                                alt={item?.title + ' image'}
                                className='h-[5em] w-[5em] mb-3  rounded'
                            />
                            <div >
                                <Heading text={item?.title} customClass='text-start' />
                                <p className='my-1 text-[13px]'>{item?.tech}</p>
                                <Link
                                    target='_blank'
                                    to={item?.link}
                                    className='bg-[#fafa1f] text-black px-3 py-1 text-[13px] rounded'
                                >
                                    Source Code
                                </Link>
                            </div>
                        </FromBottom>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects