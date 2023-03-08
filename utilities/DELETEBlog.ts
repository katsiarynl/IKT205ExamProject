function DELETEBlog(id) {
  fetch("http://10.229.0.131:5000/blogs/" + id, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Handle the returned data here
    })
    .catch((error) => {
      console.error(error);
      // Handle any errors here
    });
}

export default DELETEBlog;
