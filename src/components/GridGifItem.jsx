import React from 'react'

export const GridGifItem = ({ id, title, url, category }) => {
    const cat = category.toUpperCase()
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title} />
            <p>{cat}</p>
        </div>
    )
}
