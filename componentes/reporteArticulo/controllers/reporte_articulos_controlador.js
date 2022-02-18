const path = require("path");
const allowed = require('../../inicio/views/script');

module.exports = {
  home: (req, res) => {
    if (allowed) {
      res.sendFile(path.join(__dirname, "../views/index.html"));
    } else {
      alert('No tienes permiso para visitar esta pagina, necesitas iniciar sesion.');
      window.location.replace("../../inicio/views/index.html");
    }
  },
};
