// search your favorite songs 
const searchSongs = () => {
    const searchText = document.getElementById('search-song').nodeValue;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySongs(data.data))
}

// find song 
const displaySongs = songs => {
    const songContainer = document.getElementById('song-container');
    songs.forEach(song => {
        const songDetail = document.createElement('div');
        songDetail.className = 'single-result row align-items-center my-3 p-3';
        songDetail.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success">Get Lyrics</button>
        </div>`;
        songContainer.appendChild(songDetail);
    });
}