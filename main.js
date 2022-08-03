//creating conatiners for each section of the page
const audioContainer = document.querySelector('#audiocontianer')

const searchContainer = document.querySelector('#searchcontainer')

const mediaContainer = document.querySelector('#mediacontainer')

let resultsDiv = document.querySelector('#results')
console.log('results div', resultsDiv)

let searchBaseUrl = 'https://itunes.apple.com/search?term='

//search bar div and type bar and search button
let searchForm = document.querySelector('#search-form')
searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('Submitted!')
    let searchBox = document.querySelector("#search-box")
    let searchUrl = `${searchBaseUrl}${searchBox.value}`
    console.log(searchBox.value)
    getSearchResults(searchUrl)
})
function getSearchResults(url){
    fetch(url, {
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
            
            let audioTag = document.createElement("audio");
            audioTag.classList.add('audio');
            audioTag.src = song.previewUrl;
            audioTag.controls = true;


    //append
            mediaDiv.appendChild(albumCoverDiv);
            mediaDiv.appendChild(songTitleDiv);
            mediaDiv.appendChild(artistNameDiv);
            mediaDiv.appendChild(audioTag);
            mediaContainer.appendChild(mediaDiv);
        }
    
    })
   

}
// let searchBox = document.createElement('div');
// searchBox.classList.add('searchbar')

// let searchBar = document.createElement('input');
// searchBar.classList.add('searchbar');

// let searchButton = document.createElement('button');
// searchButton.innerText = 'Search'

// //append
// searchBox.appendChild(searchBar);
// searchBox.appendChild(searchButton);

// searchContainer.appendChild(searchBox);








//identify the containr for all seach results
//const searchResults = document.querySelector('#sresults')
// create function for search results
//function showSearchData(searchResults) {
//    for (let searchResult of searchResults)
//}