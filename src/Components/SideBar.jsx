function SideBar({animeList}) {
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {animeList.map((anime)=>{
                    return(
                        <a 
                href={anime.url}
                target='_blank'
                rel="noreferrer"
                key = {anime.mal_id}
                >
                    {anime.title}
                </a>
                    )
                })}
            </nav>
        </aside>
    )
}

export default SideBar
