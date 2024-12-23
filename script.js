const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");

async function searchButtonClickHandler() {
  try {
    let url = `https://www.omdbapi.com/?apikey=${key}&t=${formattedMovieName()}${formattedMovieYear()}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data);
    if (data.Error) {
      throw new Error("Movie not found");
    }
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

searchButton.addEventListener("click", searchButtonClickHandler);
