//Backend API URL
const url = "http://127.0.0.1:8000/matriz/reporte/articulos/?clave=6970278672787&fecha_inicial=20210901&fecha_final=20210930";
//Managing auth credentials for API
var user = 'mrvapes';
var password = '?bW86hmTDC`)9w*('
var credentials = btoa(`${user}:${password}`)
var auth = { "Authorization": `Basic ${credentials}` };
//Sending Fetch Request (GET)
window
    .fetch(url, { headers: auth })
    .then((respuesta) => respuesta.json())
    .then((data) => {
        console.log(data);
    });