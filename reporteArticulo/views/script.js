//Properly gives format for this use case, to a date as a string
function manageDate(date) {
    var finalDate = '';
    var dateFormat = date.toString();
    var year = dateFormat.slice(0, 4);
    var month = dateFormat.slice(4, 6);
    var day = dateFormat.slice(6, 8);
    finalDate = +day;
    switch (month) {
        case '01':
            finalDate += ' de Enero';
            break;
        case '02':
            finalDate += ' de Febrero';
            break;
        case '03':
            finalDate += ' de Marzo';
            break;
        case '04':
            finalDate += ' de Abril';
            break;
        case '05':
            finalDate += ' de Mayo';
            break;
        case '06':
            finalDate += ' de Junio';
            break;
        case '07':
            finalDate += ' de Julio';
            break;
        case '08':
            finalDate += ' de Agosto';
            break;
        case '09':
            finalDate += ' de Septiembre';
            break;
        case '10':
            finalDate += ' de Octubre';
            break;
        case '11':
            finalDate += ' de Noviembre';
            break;
        case '12':
            finalDate += ' de Diciembre';
            break;
    }
    return finalDate;
}

function generalDataModel(data, startingDate, finalDate) {
    const infoContainer = document.getElementById("generalInfo--container");

    const title = document.createElement('h3');
    title.textContent = `Rendimiento del ${manageDate(startingDate)} al ${manageDate(finalDate)}`;
    const name = document.createElement('p');
    name.textContent = data.nombre;
    const code = document.createElement('p');
    code.textContent = data.clave;
    const stock = document.createElement('p');
    stock.textContent = data.inventario + ' en existencia';
    const dailySales = document.createElement('p');
    dailySales.textContent = data.ventas_diarias + ' ventas diarias';
    const daysLeft = document.createElement('p');
    daysLeft.textContent = data.dias_aproximados + ' dias restantes';

    infoContainer.append(title, name, code, stock, dailySales, daysLeft);
}

//Reestructures the DOM with native object manipulation
// and displays a button representing a month
function displayButton(date) {
    const infoContainer = document.getElementById("periodInfo");
    for (let i = 0; i < date.length; i++) {
        const button = document.createElement('button');
        button.textContent = date[i];
        button.className = "monthButton";
        infoContainer.append(button)
    }
}

//Manages the conection with the API, retrieves data from a html form 
// for the query parameters, and redirects the html response in json format
// for processing data through the logic() function
function getData(auth, startingDate, finalDate) {
    //Generates the url for the API query
    //Name or Code bar Input
    var searchData = document.getElementById("searchBar").value;
    const url = `http://127.0.0.1:8000/matriz/reporte/articulos/?clave=${searchData}&fecha_inicial=${startingDate}&fecha_final=${finalDate}`;
    //Prevents form from reloading page on submit
    event.preventDefault();
    //Sending Fetch Request (GET)
    fetch(url, { headers: auth })
        .then((respuesta) => respuesta.json())
        .then((data) => {
            generalDataModel(data, startingDate, finalDate)
        }).catch(function(err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
}

//On windows load adds and event listener to a form button for sumbiting a
// query to an API
window.onload = function() {
    let myButton = document.getElementById("sendButton");
    myButton.addEventListener('click', () => {
        //Managing auth credentials for API
        var user = 'mrvapes';
        var password = '?bW86hmTDC`)9w*('
        var credentials = btoa(`${user}:${password}`)
        var auth = { "Authorization": `Basic ${credentials}` };

        var startingDate = document.getElementById("startingDate").value.replace(/-/g, '');
        var startingDate2 = document.getElementById("startingDate").value;
        var finalDate = document.getElementById("finalDate").value.replace(/-/g, '');
        var finalDate2 = document.getElementById("finalDate").value;

        //Creates a request for each day between the starting
        // and the final date
        var start = new Date(startingDate2);
        var end = new Date(finalDate2);

        //Performance whitin a given period of time
        getData(auth, startingDate, finalDate);

        //Creates the buttons to display the summary of 
        // performance of the month within the given
        // period of time
        var start = startingDate2
        var end = finalDate2
        var startYear = parseInt(start.substring(0, 4));
        var endYear = parseInt(end.substring(0, 4));
        var dates = [];

        for (var i = startYear; i <= endYear; i++) {
            var endMonth = i != endYear ? 11 : (parseInt(end.substring(5, 7)) - 1);
            var startMon = i === startYear ? (parseInt(start.substring(5, 7)) - 1) : 0;
            for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
                var month = j + 1;
                var displayMonth = month < 10 ? '0' + month : month;
                dates.push([i, displayMonth, '01'].join('-'));
            }
        }
        displayButton(dates);
    });
}