const searchContainer = document.querySelector('#searchcontainer')
const mediaContainer = document.querySelector('#container')

let resultsDiv = document.querySelector('#results')
console.log('results div', resultsDiv)

let searchUrl = 'https://itunes.apple.com/search?term=masego'

//search bar div and type bar and search button
let searchBox = document.createElement('div');
searchBox.classList.add('searchbar')

let searchBar = document.createElement('input');
searchBar.classList.add('searchbar');

let searchButton = document.createElement('button');
searchButton.innerText = 'Search'

//append
searchBox.appendChild(searchBar);
searchBox.appendChild(searchButton);

searchContainer.appendChild(searchBox);



fetch(searchUrl, {
    method: 'GET',
    headrs: {'Content-Type': 'application/json'}
})
//response is whatever the fetch returns
.then(function (response){
    return response.json()
})
//data is whatever the above code returns, in this case response.json()
.then(function (data){
    let songs = data.results
    console.log(songs)
    for (let song of songs){
    //add div and class
        let mediaDiv = document.createElement('div');
        mediaDiv.classList.add('media')

        let albumCoverDiv = document.createElement('img');
        albumCoverDiv.classList.add('albumcover');
        albumCoverDiv.src = `${song.artworkUrl100}`
        let songTitleDiv = document.createElement('div');
        songTitleDiv.classList.add('songtitle');
        songTitleDiv.innerText = `${song.trackName}`
        let artistNameDiv = document.createElement('div');
        artistNameDiv.classList.add('artist');
        artistNameDiv.innerText = `${song.artistName}`

//append
        mediaDiv.appendChild(albumCoverDiv);
        mediaDiv.appendChild(songTitleDiv);
        mediaDiv.appendChild(artistNameDiv);
        mediaContainer.appendChild(mediaDiv);
    }

})





//identify the containr for all seach results
//const searchResults = document.querySelector('#sresults')
// create function for search results
//function showSearchData(searchResults) {
//    for (let searchResult of searchResults)
//}