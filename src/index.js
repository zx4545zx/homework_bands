import bandsCollection from './bands.json'

import './main.scss'

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementById('card')
    const bands = bandsCollection.data
    console.log(bandsCollection);

    bands.forEach(band => {
        let cardDOM = buildCardDOM(band)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })
})

function buildCardDOM(band) {
    let photos = bandsCollection.image_base_url

    return (
        `<div class="cards">

            <img src="${photos.replace(`xxxARTIST-IDxxx`, `${band.art_id}`)}" alt="#" />

            <div class="bands-info">
                <div class="album_title">${band.album_title}</div>
                <div class="artist_title">${band.artist_title}</div>
                <div class="genre_text">${band.genre_text}</div>
            </div>

        </div>`

    )
}