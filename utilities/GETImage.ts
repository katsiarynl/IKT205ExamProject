import { storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";
async function GETImage(path) {
  try {
    const url = await getDownloadURL(ref(storage, path));
    return url;
  } catch (error) {
    console.error(error);
  }
}

export default GETImage;
