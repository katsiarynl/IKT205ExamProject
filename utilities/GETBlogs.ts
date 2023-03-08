// function GETBlogs() {
//   fetch("10.229.0.131")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       //Unhandled promise
//       return data;
//     })
//     .catch((error) => {
//       console.error(error);
//       // Handle any errors here
//     });
// }

import axios from "axios";

async function GETBlogs() {
  const response = await axios.get("https://cook2go.herokuapp.com/blogs/");
  const values = await response.data;
  console.log(values);
  return Object.values(values);
}

//curl http://localhost:5000/users/ --include

export default GETBlogs;
