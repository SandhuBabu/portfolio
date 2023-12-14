import React, { useState } from 'react'
import TextAnimated from '../Animations/TextAnimated'
import Thumbnails from './Thumbnails'
import { AiOutlineClose } from "react-icons/ai";
import { FromBottom } from '../../reveal/FromBottom';


const Card = ({ handleClose, project }) => {

  const [img, setImage] = useState(project?.images[0] || '')

  return (
    <div className="project-card-wrapper">
      <div className='project-card'>
        <div className="head">
          <FromBottom delay={0.35} duration={0.5}>
            <h2>{project?.title.split('')?.map((i, k) => <TextAnimated key={k} children={i} />)}</h2>
          </FromBottom>
          <AiOutlineClose title='Close' onClick={handleClose} />
        </div>

        <div className="content">
          <div className='left'>
            <FromBottom delay={0.5} duration={0.75}>
              <p className="desc">{project?.desc}</p>

              <h4 className='sub-head'>Tech Stack</h4>
              <ul>
                {
                  project?.tech?.map((tech, k) => (
                    <li key={k} className='small-text'>{tech}</li>
                  ))
                }
              </ul>

              <h4 className='sub-head'>Links</h4>
              {
                project?.links?.map((link, k) => (
                  <p key={k}>
                    <a href={link?.url} className='link' target="_blank" rel="noopener noreferrer">
                      {link?.title}
                    </a>
                  </p>
                ))
              }
            </FromBottom>
          </div>

          {
            project?.images?.length > 0 &&
            <div className="right">
              <FromBottom delay={0.5} duration={0.75}>
                <div>
                  <img src={img} className='project-img' alt="" />
                </div>

                <Thumbnails images={project?.images} setImage={setImage} />
              </FromBottom>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Card