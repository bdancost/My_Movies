const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");
const movieListContainer = document.getElementById("movie-list");

let movieList = [];

async function searchButtonClickHandler() {
  try {
    let url = `https://www.omdbapi.com/?apikey=${key}&t=${formattedMovieName()}${formattedMovieYear()}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data);
    if (data.Error) {
      throw new Error("Movie not found");
    }
    createModal(data);
    overlay.classList.add("open");
  } catch (error) {
    notie.alert({ type: "error", text: error.message });
  }
}

function formattedMovieName() {
  if (movieName.value === "") {
    throw new Error("Please enter a movie name");
  }
  return movieName.value.split(" ").join("+").trim();
}

function formattedMovieYear() {
  if (movieYear.value === "") {
    return "";
  }
  if (movieYear.value.length !== 4 || Number.isNaN(Number(movieYear.value))) {
    throw new Error("Please enter a valid year");
  }
  return `&y=${movieYear.value.trim()}`;
}

addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchButtonClickHandler();
  }
});

function addToList(movieObject) {
  movieList.push(movieObject);
}

function isMovieAlreadyOnList(id) {
  function doesThisIdBelongToThisMovie(movieObject) {
    return movieObject.imdbID === id;
  }
  return Boolean(movieList.find(doesThisIdBelongToThisMovie));
}

function updateUI(movieObject) {
  movieListContainer.innerHTML += `<article>
          <img
            src="${movieObject.Poster}"
            alt="Poster de ${movieObject.Title}"
          />
          <button class="remove-button">
            <i class="bi bi-trash"></i> Remover
          </button>
        </article>`;
}

searchButton.addEventListener("click", searchButtonClickHandler);
