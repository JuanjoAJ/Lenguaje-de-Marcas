fetch("https://dummyjson.com/users")
  .then((result) => {
    return result.json();
  })
  .then((results2) => {
    results2.users.forEach((element) => {
      lista.innerHTML += `<li class="list-group-item" style="background-color:beige;"> ${element.firstName} ${element.lastName} </li> `;
    });
  })
  .catch(() => {
    console.log("Error al consultar la base de datos");
  });

let fila = document.querySelector("#fila");

fetch("https://dummyjson.com/users")
  .then((result) => {
    return result.json();
  })
  .then((results2) => {
    results2.users.forEach((element) => {
      fila.innerHTML += `<div class="col-4> 
      <div class="card" style="width: 18rem;">
      <img src="${element.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.firstName} ${element.lastName}</h5>
        <p class="card-text">${element.address.city}.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
    </div>`;
    });
  })
  .then();
