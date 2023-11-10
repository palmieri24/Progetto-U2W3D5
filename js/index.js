const row = document.getElementById("row");

fetch("https://striveschool-api.herokuapp.com/api/product", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWMxNTI1NGU4ODAwMTgzZjE4N2EiLCJpYXQiOjE2OTk2MDU1MjUsImV4cCI6MTcwMDgxNTEyNX0.4GedZJx2Bdp4WT-kQodecxPw4uTELmTO0pDCy5WwrPg"
  }
})
  .then((resp) => {
    if (resp.ok) return resp.json();
    else throw new Error("Errore nel salvataggio del prodotto");
  })
  .then((resourceObj) => {
    resourceObj.forEach((element) => {
      const col = document.createElement("div");
      col.className = "card m-2 p-0 border border-dark ";
      col.style.width = "18rem";
      col.innerHTML = `<img src="${element.imageUrl}" 
      class="card-img-top w-100" 
      style="object-fit: cover"
      alt="image" 
      height="300">
     <div class="card-body">
       <h4 class="card-title">${element.name}</h4>
       <p class="card-text">${element.description}</p>
       <p> ${element.price}€ </p>
       <a href="./details.html?id=${element._id}" class="btn ">Scopri di più</a>
       <a href="./backOffice.html?id=${element._id}" class="btn  btn-secondary">Modifica</a>
     </div>`;

      row.appendChild(col);
    });
  })
  .catch((err) => console(err));
