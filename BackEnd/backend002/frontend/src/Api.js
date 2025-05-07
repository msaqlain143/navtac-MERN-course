fetch("http://localhost:4040/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Handle the data received from the backend
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
