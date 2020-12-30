import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GridGifItem } from './GridGifItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            <br/>
            { loading && 
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <div className="card-grid">
                { images.map( ( img ) => (
                        <GridGifItem category={category} key={img.id} { ...img } />))
                    }

            </div>
        </>
    )
}
