async function fetchImage(callback, callback2, url) {
  const image = await callback(url);
  callback2(image);
  return image;
}

export default fetchImage;
