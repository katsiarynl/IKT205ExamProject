import React from "react";

async function fetchImage(
  GETPath: (url: string) => Promise<string>,
  setImage: React.Dispatch<React.SetStateAction<string>>,
  url: string
) {
  const image = await GETPath(url);
  setImage(image);

  return image;
}

export default fetchImage;
