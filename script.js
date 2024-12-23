const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");

async function searchButtonClickHandler() {
  const formattedMovieName = encodeURIComponent(movieName.value.trim());
  const year = movieYear.value.trim();
  let url = `https://www.omdbapi.com/?apikey=${key}&t=${formattedMovieName}&y=${year}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      console.error("Erro: ", data.Error);
      alert(`Erro: ${data.Error}`);
      return;
    }

    console.log("Dados recebidos: ", data);
    overlay.classList.add("open");

    document.getElementById("movie-title").textContent =
      data.Title || "Título não encontrado";
  } catch (error) {
    console.error("Erro ao fazer a requisição: ", error);
    alert("Erro na comunicação com o servidor. Tente novamente.");
  }
}

searchButton.addEventListener("click", searchButtonClickHandler);
