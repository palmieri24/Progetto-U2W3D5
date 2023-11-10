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

const changeHtml = function () {
  //Modifica
  document.getElementById("submit").innerText = "Modifica";
  document.getElementById("h6").innerText = "Modifica Prodotto";

  //Cancella
  const btnDiv = document.getElementById("delete");
  btnDiv.classList.toggle("d-none");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger";
  deleteBtn.innerHTML = "Elimina";
  deleteBtn.id = "button-delete";
  btnDiv.appendChild(deleteBtn);
};

const form = function () {
  fetch(URL + "/" + productId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWMxNTI1NGU4ODAwMTgzZjE4N2EiLCJpYXQiOjE2OTk2MDU1MjUsImV4cCI6MTcwMDgxNTEyNX0.4GedZJx2Bdp4WT-kQodecxPw4uTELmTO0pDCy5WwrPg"
    }
  })
    .then((resp) => resp.json())
    .then((formObj) => {
      console.log(formObj);

      names.value = formObj.name;
      description.value = formObj.description;
      brand.value = formObj.brand;
      img.valie = formObj.imageUrl;
      price.value = formObj.price;
    })
    .catch((err) => {
      console.log(err);
    });
};
