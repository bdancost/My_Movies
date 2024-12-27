export default async function handler(req, res) {
  const { movie, year } = req.query;

  // Acessa a chave da API usando a variável de ambiente
  const apiKey = process.env.OMDB_API_KEY;

  if (!movie) {
    return res.status(400).json({ error: "O nome do filme é obrigatório" });
  }

  try {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movie}${
      year ? `&y=${year}` : ""
    }`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.Error) {
      throw new Error(data.Error);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
