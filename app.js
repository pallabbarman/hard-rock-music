// search your favorite songs 
const searchSongs = async () => {
    const searchText = document.getElementById('search-song').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displaySongs(data.data);
    } catch (error) {
        alert("Somethings went wrong! Please try again later!");
    }
    document.getElementById('search-song').value = "";
}

// display song 
const displaySongs = songs => {
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML = "";
    songs.forEach(song => {
        const songDetail = document.createElement('div');
        songDetail.className = 'single-result row align-items-center my-3 p-3';
        songDetail.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
                <source src="${song.preview}" type="audio/mpeg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>`;
        songContainer.appendChild(songDetail);
    });
}

// get songs lyric 
const getLyric = async (artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayLyrics(data.lyrics);
    } catch (error) {
        alert("Somethings went wrong! Please try again later!");
    }
}

// display lyric 
const displayLyrics = lyrics => {
    const fullLyrics = document.getElementById('song-lyrics');
    fullLyrics.innerText = lyrics;
}