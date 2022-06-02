

export const getGifs = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=GhWMXXNQKy00eLT03Uqal74psWfjUZ2C`

    const respuesta = await fetch(url)

    const {data} = await respuesta.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }))


    return gifs
}