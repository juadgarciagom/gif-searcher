

export const getGif = async( keyword ) => {
        
    const apiKey = keyword;
    const apiUrl = 'https://api.giphy.com/v1/gifs/search?limit=12&api_key=l1Q6Un9gkxxBl8T9zosmy4DD2ZRjcGYP&q=' + apiKey
    const resp = await fetch(apiUrl);
    const { data } = await resp.json();
    
    const gifs = data.map( gif => {
        return {
            id: gif.id,
            url: gif.images?.downsized_medium?.url,
            title: gif.title
        }
    });

    return gifs;
};