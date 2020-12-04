import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";


export const useFetchGifs = ( keyword ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGif( keyword )
        .then( gifs => {
            setTimeout(() => {
            setState({
                    data: gifs,
                    loading: false
                })
            }, 1000)
        })
    }, [keyword])

    return state;
};