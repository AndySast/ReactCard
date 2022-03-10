import React from 'react'

import './styles.scss'
const Card = (props) => {
    return(
        <article className="characterCard__Wrapper">
            <div className="characterCard__ImgWrapper-sc-1ejywvi-1 gzCUdp">
                <img src="https://rickandmortyapi.com/api/character/avatar/126.jpeg" alt="Fleeb"/>
            </div>
            <div className="characterCard__ContentWrapper-sc-1ejywvi-2 hOxzhF">
                <div className="section">
                    <a href="https://rickandmortyapi.com/api/character/126" rel="nofollow noopener noreferrer" target="_blank" className="externalLink__ExternalLink-sc-1lixk38-0 bQJGkk">
                        <h2>Fleeb</h2>
                    </a>
                    <span className="status">
                        <span className="status__icon"></span> 
                        unknown - Alien
                        </span>
                </div>
            <div className="section">
                <span className="text-gray">Last known location:</span>
                <a href="https://rickandmortyapi.com/api/location/6" rel="nofollow noopener noreferrer" target="_blank" className="externalLink__ExternalLink-sc-1lixk38-0 bQJGkk">
                    Interdimensional Cable
                    </a>
                    </div>
                <div className="section">
                    <span className="text-gray">First seen in:</span>
                    <a href="https://rickandmortyapi.com/api/episode/19" rel="nofollow noopener noreferrer" target="_blank" className="externalLink__ExternalLink-sc-1lixk38-0 bQJGkk">
                    Interdimensional Cable 2: Tempting Fate
                    </a>
                </div>
            </div>
        </article>
    )
}

export default Card