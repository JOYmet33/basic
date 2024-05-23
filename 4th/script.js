fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
})
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
