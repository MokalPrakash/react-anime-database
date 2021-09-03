function AnimeCard({url,image_url,title,synopsis,score}) {
    return (
        <article className="anime-card">
            <a 
            href={url} 
            target='_blank'
            rel='noreferrer'>
            
            <figure>
                <img src={image_url} alt="anime"/>
            </figure>
            <h3>{title}</h3>
            <p>{synopsis}</p>
            <h4>Score: {score}</h4>

            </a>

        </article>
    )
}

export default AnimeCard

