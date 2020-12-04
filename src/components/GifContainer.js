import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGif } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifContainer = ({keyword}) => {

    // const [gifs, setGifs] = useState([]);

    const {data, loading} = useFetchGifs( keyword );

    // useEffect(() => {
    //     getGif( keyword )
    //         .then( gifs => setGifs(gifs)) //Esto es redundante en EM7 usar setGifs(gifs) solo
    // }, [keyword]);


    return (
        <Card className='gif_contain' style={{ margin: "20px auto" }}>
            <Card.Header>Resultados de tu búsqueda: {keyword}</Card.Header>
                <Card.Body>
                    {loading && <Spinner animation='grow' /> }
                    {
                        data.map( ( img ) => {
                            return <GifItem key={img.id} {...img}/>
                        })
                    }
                </Card.Body>
        </Card>
        
    )
}