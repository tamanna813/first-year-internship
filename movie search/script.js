const API_KEY = "4b865a99";

async function searchMovie() {

    const movieName =
        document.getElementById("searchInput").value;

    const url =
        `https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    const movieContainer =
        document.getElementById("movieContainer");

    movieContainer.innerHTML = "";

    if(data.Search){

        data.Search.forEach(async (movie)=>{

            const detailResponse = await fetch(
                `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
            );

            const detailData =
                await detailResponse.json();

            movieContainer.innerHTML += `
                <div class="movie-card">
                    <img src="${movie.Poster}">
                    <h3>${movie.Title}</h3>
                    <p>Year: ${movie.Year}</p>
                    <p>⭐ Rating: ${detailData.imdbRating}</p>
                </div>
            `;
        });
    }
    else{
        movieContainer.innerHTML =
            "<h2>No Movies Found 😢</h2>";
    }
}