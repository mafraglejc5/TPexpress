const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync(__dirname + '/../data/concesionarias.json', 'utf-8'));
const homeController = {

    index: function (req, res)  {
      res.set({ 'content-type': 'text/plain; charset=utf-8' });
      res.write("------------------------------------------------"+ '\n');
      res.write("Bienvenidos a Automotores DIGITAL HOUSE - FORMAR"+ '\n');     
      res.write("------------------------------------------------"+ '\n');
      res.write('\n');
      res.write("----------------------------"+ '\n');
      res.write("Estas son nuestras sucursales"+ '\n');     
      res.write("----------------------------"+ '\n');
      concesionarias.forEach(consecionaria => {
      res.write('\n');
      res.write("*" + " " + consecionaria.sucursal + '\n')
    });
      res.end()
    }
  
}
module.exports = homeController