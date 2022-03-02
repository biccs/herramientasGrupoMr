const path = require("path");
const url = require('url');

var allowed = require("../../inicio/views/script");

//ALLOWS access to file if allowed is true
module.exports = {
  home: (req, res) => {
    //Creates the object that stores the request query parameters
    const queryObject = url.parse(req.url, true).query;

    //Check if validation variables are positive for redirecting
    // to the proper page
    if (req.allowed || queryObject.allow) {
      res.sendFile(path.join(__dirname, "../views/index.html"));
      // res.url = 
      // res.redirect(301, '/reporte_articulos')
    } else {
      res.sendFile(
        path.join(__dirname, "../../inicio/views/unauthorized.html")
      );
    }
  },
};
