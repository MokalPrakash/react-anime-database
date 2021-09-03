const url = 'https://api.jikan.moe/v3/search/anime?q='

export const fetchAnime = async(query)=>{
    const data = await fetch(`${url}${query}&order_by=title&sort=asc&limit=10`)
    .then(res=>res.json())
    console.log(data.results)
    return data.results
}