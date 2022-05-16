//this listens for DOM content loaded just in case
document.addEventListener("DOMContentLoaded", () => {
  //apikey
  const apikey = "371d4d7";
  //search movies from API
  async function loadMovie(search) {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=${apikey}&s=${search}`
      );

      //convert response
      let data = await response.json();
      //log stuff
      console.log("data.Search: ", data.Search);
      console.log("data.totalresults: ", data.totalResults);
      console.log("datatype: ", typeof data);
      //loop over response
      data.Search.forEach((movie) => {
        //create a div
        const movieContainer = document.createElement("div");
        //give it a classname
        movieContainer.classList.add("movie-container");
        //create innerHtml for div
        movieContainer.innerHTML = `
            <h3>${movie.Title}</h3>
            <span">${movie.Year}</span>
            <br>
            <img src="${movie.Poster}" alt="poster" height="300" width="200">
            <br>
            `;
        //add movieContainer to movie-div
        document.getElementById("movie-div").appendChild(movieContainer);
      });
    } catch (error) {
      console.log("Error", error);
    }
  }

  //  add listeners to search button
  document
    .getElementById("search-btn")
    .addEventListener("click", (response) => {
      response.preventDefault();
      //get search term from input
      const search = document.getElementById("text-input").value;
      //goto loadMovie function
      loadMovie(search);
      //console log search term
      console.log("search", search);
    });
});
