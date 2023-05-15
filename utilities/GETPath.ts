import axios from "axios";

async function GETPath(path: string) {
  const path_object = { path: path };

  const { data } = await axios.post(
    "http://cook2go.herokuapp.com/image",
    path_object,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await data;
}

//curl http://localhost:5000/users/ --include

export default GETPath;
