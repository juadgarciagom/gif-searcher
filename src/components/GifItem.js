import React from 'react'
import { GrFavorite } from "react-icons/gr";

export const GifItem = ( { id, url, title } ) => {
    
    return (
        <div className="gif_container">
            <img className="gif" variant="top" src={ url } alt={title} />
            <button className="fv_button"><GrFavorite className="fv_icon" /></button>
         
        </div>
    )
}
