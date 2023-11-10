//URL e ID
const URL = "https://striveschool-api.herokuapp.com/api/product";
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const method = productId ? "PUT" : "POST";
//miei input
const names = document.getElementById("name");
const description = document.getElementById("description");
const brand = document.getElementById("brand");
const img = document.getElementById("img");
const price = document.getElementById("price");

const changeHtml = function () {
  //Modifica
  document.getElementById("submit").innerText = "Modifica";
  document.getElementById("h6").innerText = "- Modifica Prodotto";

  //Cancella
  const btnDiv = document.getElementById("delete");
  btnDiv.classList.toggle("d-none");
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger";
  deleteBtn.innerHTML = "Elimina";
  deleteBtn.id = "deleteButton";
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

if (productId) {
  changeHtml();
  form();
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const product = {
    name: names.value,
    description: description.value,
    brand: brand.value,
    imageUrl: img.value,
    price: price.value
  };

  fetch(URL, {
    method,
    body: JSON.stringify(product),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWMxNTI1NGU4ODAwMTgzZjE4N2EiLCJpYXQiOjE2OTk2MDU1MjUsImV4cCI6MTcwMDgxNTEyNX0.4GedZJx2Bdp4WT-kQodecxPw4uTELmTO0pDCy5WwrPg",
      "Content-Type": "application/json"
    }
  })
    .then((resp) => resp.json())
    .then((newObj) => {
      if (productId) {
        alert(
          "Prodotto con id: " + newObj._id + "è stato modificato con successo!"
        );
      } else {
        alert(
          "Prodotto con id: " + newObj._id + "è stato aggiunto con successo!"
        );
      }
    })
    .catch((err) => console.log(err));
  console.log(product);

  if (!productId) {
    names.value = "";
    description.value = "";
    brand.value = "";
    img.value = "";
    price.value = "";
  }
});

//reset
document.getElementById("reset").addEventListener("click", function (e) {
  e.preventDefault();
  if (confirm("Sicuro di voler resettare?") == true) {
    names.value = "";
    description.value = "";
    brand.value = "";
    image.value = "";
    price.value = "";
  }
});

//delete
document.getElementById("deleteButton").addEventListener("click", function (e) {
  e.preventDefault();

  if (confirm("Sicuro di voler eliminare il prodotto?") == true) {
    fetch(URL + "/" + productId, {
      method: "DELETE"
    })
      .then((resp) => resp.json())
      .then((delObj) => {
        alert("Prodotto cancellato con successo!");
        console.log(delObj);
        window.location.assign("./index.html");
      });
  }
});
