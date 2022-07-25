export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=FFIZ1DtesrCV4xYbajg4q5iXd8u6OLW3&limit=5`

  const resp = await fetch(url)
  const { data = [] } = await resp.json()

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))
  // console.log(gifs)
  return gifs
}
