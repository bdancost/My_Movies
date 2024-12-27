const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");
const movieListContainer = document.getElementById("movie-list");

//let movieList = [];
let movieList = JSON.parse(localStorage.getItem("movieList")) ?? [];

async function searchButtonClickHandler() {
  try {
    let url = `/api/fetchMovie?movie=${formattedMovieName()}&year=${formattedMovieYear()}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
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
  movieListContainer.innerHTML += `<article id="movie-card-${movieObject.imdbID}">
          <img
            src="${movieObject.Poster}"
            alt="Poster de ${movieObject.Title}"
          />
          <button class="remove-button" onclick="{removeFilmFromList('${movieObject.imdbID}')}">
            <i class="bi bi-trash"></i> Remover
          </button>
        </article>`;
}

function removeFilmFromList(id) {
  notie.confirm({
    text: "Tem certeza que deseja remover esse filme da sua lista?",
    submitText: "Sim",
    cancelText: "Não",
    position: "top",
    submitCallback: function removeMovie() {
      movieList = movieList.filter((movie) => movie.imdbID !== id);
      document.getElementById(`movie-card-${id}`).remove();
      updateLocalStorage();
    },
  });
}

function updateLocalStorage() {
  localStorage.setItem("movieList", JSON.stringify(movieList));
}

for (const movieInfo of movieList) {
  updateUI(movieInfo);
}

searchButton.addEventListener("click", searchButtonClickHandler);
