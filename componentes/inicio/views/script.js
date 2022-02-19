// TODO:  APPLY VALIDATION, IF NOT LOGGED IN NOT ALLOWED TO OPEN ANY FILE BUT INICIO FOLDER
var allowed = false;

//Helps with validating that all form data is filled
// before being able to send the request
function validateForm(user, pass) {
  if (user == "") {
    alert("Ingresa un usuario, porfavor.");
    event.preventDefault();
    return false;
  } else if (pass == "") {
    alert("Ingresa una clave, porfavor.");
    event.preventDefault();
    return false;
  }
  event.preventDefault();
  return true;
}

try {
  console.log(allowed);
  //Sets an event listener on the login button,
  // sends a request to the api and manages the response.

  //Managing auth credentials for API
  var user = "mrvapes";
  var password = "?bW86hmTDC`)9w*(";
  var credentials = btoa(`${user}:${password}`);
  var auth = { Authorization: `Basic ${credentials}` };

  const loginButton = document.getElementById("login-button");

  loginButton.addEventListener("click", () => {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (validateForm(user, pass)) {
      const url = `http://127.0.0.1:8000/herramientasgrupomr/acceso/?usuario=${user}&clave=${pass}`;
      event.preventDefault();

      fetch(url, { headers: auth })
        .then((respuesta) => respuesta.json())
        .then((data) => {
          if (data) {
            allowed = true;
            const blur = document.getElementById("section--blur");
            const form = document.getElementById("form--container");
            form.style.display = "none";
            blur.style.filter = "blur(0px)";
            blur.style.pointerEvents = "all";
            console.log(allowed);
          } else {
            alert("Datos incorrectos, intente denuevo.");
          }
        })
        .catch(function (err) {
          // There was an error
          console.warn("Something went wrong.", err);
        });
    }
  });
} catch (e) {
  console.log(e.message);
}

module.exports = allowed;
