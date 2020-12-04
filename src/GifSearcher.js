// FC = Functional components
import React, { useState } from 'react';

import { AddKeyword } from './components/AddKeyword';
import { GifContainer } from './components/GifContainer';
import { Button } from 'react-bootstrap';
import { GifFavorites } from './components/GifFavorites';
import { GifTrending } from './components/GifTrending';

const GifSearcher = ( ) => {

    const [keywords, setKeywords] = useState([]);

    return (
        <>
            <GifFavorites setKeywords={setKeywords} keywords={keywords}/>
            <h2>Busca los mejores Gif's, guardalos y diviertete!!</h2>
            <AddKeyword setKeywords={setKeywords} keywords={keywords}/>
            <hr />
            
            <ul style={{padding: "0 40px"}}>
                {
                    keywords.map( keyword => {
                        return <GifContainer 
                            key={keyword}
                            keyword={keyword} />
                    })
                }
            </ul>

            <GifTrending />

        </>
    )
};

export default GifSearcher;