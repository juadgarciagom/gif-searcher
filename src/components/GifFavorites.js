import React from 'react'
import image from '../assets/img/gif.png'

export const GifFavorites = ( {setKeywords, keywords} ) => {

    const addKeyword = () => {
        setKeywords([...keywords, 'naruto']);
    };

    return (
        <header className="head_top">
            
                <img src={ image } alt="Gif"></img>
                <h4>Gif Searcher</h4>
                <button onClick={addKeyword}>Agregar</button>
            
        </header>
    )
}
