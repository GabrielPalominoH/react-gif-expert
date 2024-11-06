// `https://api.giphy.com/v1/gifs/search?api_key=DKWdAz5g19mweFSpgT7s1zaZ2bmx4mw0&q=${category}&limit=10`
// img.images.downsized_medium.url



export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=DKWdAz5g19mweFSpgT7s1zaZ2bmx4mw0&q=${category}&limit=10`;

  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map( img =>({
    id: img.id,
    title: img.title,
    img: img.images.downsized_medium.url
  }))

  return gifs;
}
