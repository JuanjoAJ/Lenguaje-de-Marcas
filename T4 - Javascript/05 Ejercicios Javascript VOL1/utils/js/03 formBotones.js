let color = document.querySelector("#formBoton");

document.querySelectorAll(".btnColor").forEach((button) => {
  button.addEventListener("click", () => {
    event.preventDefault();
    changeColor(button.value);
  });
});

function changeColor(value) {
  switch (parseInt(value)) {
    case 1:
      document.body.style.backgroundColor = "blue";
      break;
    case 2:
      document.body.style.backgroundColor = "red";
      break;
    case 3:
      document.body.style.backgroundColor = "yellow";
      break;
    case 4:
      document.body.style.backgroundColor = "green";
      break;
    case 5:
      document.body.style.backgroundColor = "purple";
      break;
    default:
      document.body.style.backgroundColor = "";
  }
}
