//URL e ID
const URL = "https://striveschool-api.herokuapp.com/api/product";
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
//miei input
const names = document.getElementById("name");
const description = document.getElementById("description");
const brand = document.getElementById("brand");
const img = document.getElementById("img");
const price = document.getElementById("price");

const details = function () {
  const divContainer = document.getElementById("dContainer");
  fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWMxNTI1NGU4ODAwMTgzZjE4N2EiLCJpYXQiOjE2OTk2MDU1MjUsImV4cCI6MTcwMDgxNTEyNX0.4GedZJx2Bdp4WT-kQodecxPw4uTELmTO0pDCy5WwrPg",
      "Content-Type": "application/json"
    }
  })
    .then((resp) => resp.json())
    .then((detailObj) => {
      divContainer.innerHTML = `
    <h2>${detailObj.names}</h2>
    <p>${detailObj.description}</p>
    <p>${detailObj.brand}</p>
    <img>${detailObj.img}/>
    <p>${detailObj.price}€</p>
    <button class="btn btn-dark mt-4">Modifica</button>
`;
    })
    .catch((err) => console.log(err));
};
details();
