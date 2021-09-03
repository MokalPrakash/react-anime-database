import AnimeCard from './AnimeCard'
function MainContent({getQuery,getAnime,animeList}) {
    return (
        <main>
            <div className="main-head">
                <form className = 'search-box'
                onSubmit={getAnime}>
                    <input 
                    type="text" required
                    placeholder="Enter anime name"
                    onChange={getQuery}
                    />
                </form>
                {/* <button className="button"
                
                >
                    Search
                </button> */}
            </div>
            <div className="anime-list">
                {animeList.map((anime)=>{
                    return(
                    <AnimeCard
                    key = {anime.mal_id} 
                    title={anime.title}
                    url = {anime.url}
                    image_url = {anime.image_url}
                    synopsis = {anime.synopsis}
                    score = {anime.score}
                    />
                )})}
                
                
            </div>
        </main>
    )
}

export default MainContent