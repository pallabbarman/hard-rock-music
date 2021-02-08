const searchSongs = () => {
    const searchText = document.getElementById('search-song').nodeValue;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}