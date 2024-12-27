export default async function handler(req, res) {
  const { movie, year } = req.query;
  const apiKey = process.env.OMDB_API_KEY;
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
    movie
  )}${year ? `&y=${year}` : ""}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.Error) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
