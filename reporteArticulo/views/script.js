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

//Displays the component for the general performance of the article
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

//Displays the component for the monthly performance
// showing the weekly and daily performance of
// the period
// TODO: FINISH DISPLAYING API RESPONSE
function displayMonthComponent(dailyData, containerId) {
    const container = document.getElementById(containerId);

    const dailyTitle = document.createElement("h2");
    dailyTitle.textContent = 'Resumen Diario/Semanal';

    const calendarContainer = document.createElement('div');
    calendarContainer.className = 'calendar--container';

    for (let i = 0; i < dailyData.length; i++) {
        if (i == 0) {
            var weekContainer = document.createElement('div');
            weekContainer.className = 'calendar-weeks--container';

            const dayContainer = document.createElement('div');
            dayContainer.className = 'calendar-days--container';
            const day = document.createTextNode(`${i + 1}`);
            const sales = document.createTextNode(dailyData[0].ventas_diarias);
            dayContainer.append(day, sales);
            weekContainer.append(dayContainer);
        }
        if (i > 0 && i < 6) {
            const dayContainer = document.createElement('div');
            dayContainer.className = 'calendar-days--container';
            const day = document.createTextNode(`${i + 1}`);
            const sales = document.createTextNode(dailyData[0].ventas_diarias);
            dayContainer.append(day, sales);
            weekContainer.append(dayContainer);
        }
        if (i == 6) {
            var weekContainer2 = document.createElement('div');
            weekContainer2.className = 'calendar-weeks--container';

            const dayContainer = document.createElement('div');
            dayContainer.className = 'calendar-days--container';
            const day = document.createTextNode(`${i + 1}`);
            const sales = document.createTextNode(dailyData[0].ventas_diarias);
            dayContainer.append(day, sales);
            weekContainer2.append(dayContainer);
        }
        if (i > 6 && i < 12) {
            const dayContainer = document.createElement('div');
            dayContainer.className = 'calendar-days--container';
            const day = document.createTextNode(`${i + 1}`);
            const sales = document.createTextNode(dailyData[0].ventas_diarias);
            dayContainer.append(day, sales);
            weekContainer2.append(dayContainer);
        }
        if (i == 12) {
            var weekContainer3 = document.createElement('div');
            weekContainer3.className = 'calendar-weeks--container';

            const dayContainer = document.createElement('div');
            dayContainer.className = 'calendar-days--container';
            const day = document.createTextNode(`${i + 1}`);
            const sales = document.createTextNode(dailyData[0].ventas_diarias);
            dayContainer.append(day, sales);
            weekContainer3.append(dayContainer);
        }
        if (i > 12 && i < 18) {
            const dayContainer = document.createElement('div');
            dayContainer.className = 'calendar-days--container';
            const day = document.createTextNode(`${i + 1}`);
            const sales = document.createTextNode(dailyData[0].ventas_diarias);
            dayContainer.append(day, sales);
            weekContainer3.append(dayContainer);
        }
        if (i == 18) {
            var weekContainer4 = document.createElement('div');
            weekContainer4.className = 'calendar-weeks--container';

            const dayContainer = document.createElement('div');
            dayContainer.className = 'calendar-days--container';
            const day = document.createTextNode(`${i + 1}`);
            const sales = document.createTextNode(dailyData[0].ventas_diarias);
            dayContainer.append(day, sales);
            weekContainer4.append(dayContainer);
        }
        if (i > 18 && i < 24) {
            const dayContainer = document.createElement('div');
            dayContainer.className = 'calendar-days--container';
            const day = document.createTextNode(`${i + 1}`);
            const sales = document.createTextNode(dailyData[0].ventas_diarias);
            dayContainer.append(day, sales);
            weekContainer4.append(dayContainer);
        }
        if (i == 24) {
            var weekContainer5 = document.createElement('div');
            weekContainer5.className = 'calendar-weeks--container';

            const dayContainer = document.createElement('div');
            dayContainer.className = 'calendar-days--container';
            const day = document.createTextNode(`${i + 1}`);
            const sales = document.createTextNode(dailyData[0].ventas_diarias);
            dayContainer.append(day, sales);
            weekContainer5.append(dayContainer);
        }
        if (i > 24 && i < 30) {
            const dayContainer = document.createElement('div');
            dayContainer.className = 'calendar-days--container';
            const day = document.createTextNode(`${i + 1}`);
            const sales = document.createTextNode(dailyData[0].ventas_diarias);
            dayContainer.append(day, sales);
            weekContainer5.append(dayContainer);
        }

    }
    calendarContainer.append(weekContainer, weekContainer2, weekContainer3, weekContainer4, weekContainer5);
    container.append(dailyTitle, calendarContainer);
}

//Displays the component for the monthly performance
// summary displaying sales/day and days left
// TODO: FINISH DISPLAYING API RESPONSE
function displayMonthSummaryComponent(generalData, containerId) {
    const container = document.getElementById(containerId);
    const summaryContainer = document.createElement('div');
    summaryContainer.className = 'summary--container';

    const generalTitle = document.createElement("h2");
    generalTitle.textContent = 'General';
    const ventasDiarias = document.createElement("p");
    ventasDiarias.textContent = `${generalData.ventas_diarias} ventas/dia`;
    const diasRestantes = document.createElement("p");
    diasRestantes.textContent = `${generalData.dias_aproximados} dias restantes`;

    summaryContainer.append(generalTitle, ventasDiarias, diasRestantes);
    container.append(summaryContainer);
}

//Reestructures the DOM with native object manipulation
// and displays a button representing to display the
// general performance of a month
//TODO: FIX ASYNCHRONOUS FUNCTION, I HAVE TO WAIT FOR THE FUNCTION TO WORK
function displayButton(date) {

    const infoContainer = document.getElementById("periodInfo");

    for (let i = 0; i < date.length - 1; i++) {
        const container = document.createElement('div');
        container.id = `period-data--container${i}`;
        let containerId = container.id;
        const button = document.createElement('button');
        button.textContent = date[i];
        button.className = "monthButton";

        //Adds an event to the button for calling total sales
        // on certain month
        button.addEventListener('click', () => {
            var user = 'mrvapes';
            var password = '?bW86hmTDC`)9w*('
            var credentials = btoa(`${user}:${password}`)
            var auth = { "Authorization": `Basic ${credentials}` };

            const dailyData = [];
            var searchData = document.getElementById("searchBar").value;
            var startingDate = date[i].replace(/-/g, '');
            var finalDate = date[i + 1].replace(/-/g, '');
            const url = `http://127.0.0.1:8000/matriz/reporte/articulos/?clave=${searchData}&fecha_inicial=${startingDate}&fecha_final=${finalDate}`;

            //Prevents form from reloading page on submit
            event.preventDefault();
            //Sending Fetch Request (GET)
            fetch(url, { headers: auth })
                .then((respuesta) => respuesta.json())
                .then((data) => {
                    displayMonthSummaryComponent(data, containerId);
                }).catch(function(err) {
                    // There was an error
                    console.warn('Something went wrong.', err);
                });

            //The following code iterates through the current month and
            //makes a query for each day
            for (let i = parseInt(startingDate.substring(6, 8)); i < 31; i++) {
                if (i < 10) {
                    var sd = `${startingDate.substring(0,6)}0${i}`

                } else {
                    var sd = `${startingDate.substring(0,6)}${i}`;
                }
                const url = `http://127.0.0.1:8000/matriz/reporte/ventas_diarias/?clave=${searchData}&fecha=${sd}`;
                fetch(url, { headers: auth })
                    .then((respuesta) => respuesta.json())
                    .then((data) => {
                        dailyData.push(data);
                    }).catch(function(err) {
                        // There was an error
                        console.warn('Something went wrong.', err);
                    });
            }
            displayMonthComponent(dailyData, containerId);
        });
        container.append(button);
        infoContainer.append(container);
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
            var endMonth = i != endYear ? 11 : (parseInt(end.substring(5, 7)));
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