import React from 'react'
import { FromBottom } from '../../reveal/FromBottom'
import { MAIN_COLOR, colors } from '../../utils'
import Heading from './Heading'

const frontend = [
    {
        title: 'ReactJS',
        img: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
        link: ''
    },
    {
        title: 'ReduxJS',
        img: 'https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png',
        link: ''
    },
    {
        title: 'SASS/SCSS',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png',
        link: ''
    },
    {
        title: 'Firebase',
        img: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
        link: ''
    },
    {
        title: 'TailwindCSS',
        img: 'https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu',
        link: ''
    },
    {
        title: 'Bootstrap',
        img: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png',
        link: ''
    },
    {
        title: 'MUI',
        img: 'https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png',
        link: ''
    },
    {
        title: 'Daisy UI',
        img: 'https://raw.githubusercontent.com/saadeghi/daisyui/master/src/docs/static/images/daisyui-logo/favicon-192.png',
        link: ''
    },
]

const backend = [
    {
        title: 'Spring Boot',
        img: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
        link: ''
    },
    {
        title: 'Java 8',
        img: 'https://archive.org/download/java_logo/java_logo.png',
        link: ''
    },
    {
        title: 'NodeJS',
        img: 'https://static-00.iconduck.com/assets.00/node-js-icon-909x1024-ig4gm9k7.png',
        link: ''
    },
    {
        title: 'PostgreSQL',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png',
        link: ''
    },
    {
        title: 'MySQL',
        img: 'https://pngimg.com/d/mysql_PNG35.png',
        link: ''
    },
    {
        title: 'MongoDB',
        img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
        link: ''
    },
    {
        title: 'PostMan',
        img: 'https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png',
        link: ''
    },
    {
        title: 'VS Code',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
        link: ''
    },
]

const Tech = () => {
    return (
        <section className='relative min-h-screen'>
            <FromBottom delay={0.5} duration={0.5}>
                <Heading text="Technologies I Use" size={'2em'} />
            </FromBottom>
            <div className='w-full md:flex flex-col md:flex-row justify-center md:items-start items-center gap-[2em] mt-[2em] px-[2em]'>
                <FromBottom
                    duration={0.75}
                    delay={0.5}
                    classNames='w-full md:w-[30em]  border-solid border-[1px] border-[#fafa1f] p-4 rounded-md'>
                    <h4 className={`text-center text-xl my-[1em] text-[#fafa1f]`}>FrontEnd</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {
                            frontend.map((item, k) => (
                                <a key={k} href={item.link} target="_blank">
                                    <div className={`flex items-center gap-2 my-4 p-2 rounded hover:bg-[#fafa1f] hover:text-black`}>
                                        <img
                                            src={item.img}
                                            alt="react"
                                            className=' h-[2.5em]'
                                        />
                                        <p>{item.title}</p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </FromBottom>
                <FromBottom
                    duration={0.85}
                    delay={0.75}
                    classNames='w-full md:w-[30em]  border-solid border-[1px] border-[#fafa1f] p-4 rounded-md mt-6 md:mt-0'>
                    <h4 className={`text-center text-xl my-[1em] text-[#fafa1f]`}>Backend</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        {
                            backend.map((item, k) => (
                                <a key={k} href={item.link} target="_blank">
                                    <div className={`flex items-center gap-2 my-4 p-2 rounded hover:bg-[#fafa1f] hover:text-black`}>
                                        <img
                                            src={item.img}
                                            alt="react"
                                            className=' h-[2.5em]'
                                        />
                                        <p>{item.title}</p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </FromBottom>

            </div>
        </section>
    )
}

export default Tech