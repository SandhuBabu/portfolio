import React from 'react'

const Thumbnails = ({ images, setImage }) => {
    return (
        <div className="thumbnails">
            {
                images?.map((src, k) => (
                    <img
                        src={src}
                        key={k}
                        className='project-img-thumbnails'
                        onClick={() => setImage(src)}
                        alt="" />
                ))
            }
        </div>
    )
}

export default Thumbnails