const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync(__dirname + '/../data/concesionarias.json', 'utf-8'));
const sucursalesController = {

        index: function (req, res)  {
          res.set({ 'content-type': 'text/plain; charset=utf-8' });
          res.write("------------------------------------------------"+ '\n');
          res.write("Automotores DIGITAL HOUSE - FORMAR"+ '\n');     
          res.write("------------------------------------------------"+ '\n');
          res.write("-----------------------------"+ '\n');
          res.write("Estas son nuestras sucursales"+ '\n');     
          res.write("-----------------------------"+ '\n');
          concesionarias.forEach(consecionaria => {
          res.write('\n');
          res.write("*" + " " + consecionaria.sucursal + '\n' + "-" + consecionaria.direccion + '\n' + "-" + consecionaria.telefono + '\n')
          });
      
          res.end()
          },

       
        detalle: (req, res) => {
            let idConcesionaria = req.params.id;
          res.set({ 'content-type': 'text/plain; charset=utf-8' });
          concesionarias.forEach(consecionaria=> {
          if(consecionaria.sucursal.toLowerCase() == idConcesionaria.toLowerCase()){
          res.write("------------------------------------------------"+ '\n');
          res.write("Automotores DIGITAL HOUSE - FORMAR"+ '\n');     
          res.write("------------------------------------------------"+ '\n');
          res.write("-----------------------------"+ '\n');
          res.write("ÉSTA ES LA INFO DE LA SUCURSAL:"+ '\n');     
          res.write("-----------------------------"+ '\n');
          res.write('\n');
          res.write (consecionaria.sucursal +'\n');
          res.write("-----------------------------"+ '\n');
          res.write('\n');
          res.write('\n');
          res.write (consecionaria.direccion +'\n');
          res.write (consecionaria.telefono +'\n\n');
          res.write("------------------------------------"+ '\n');
          res.write ('ESTOS SON NUESTROS AUTOS DISPONIBLES'+'\n')
          res.write("------------------------------------"+ '\n');
          res.write('\n');
          res.write('\n');
          consecionaria.autos.forEach(auto =>{
          res.write("*" + " " + auto.marca + ' - ' + auto.modelo+ ' - ' +auto.anio + '\n')
          })
          res.write('\n');
          res.end ("Tenemos" +" " + consecionaria.autos.length+ " Autos Disponibles en la sucursal " + consecionaria.sucursal )
          }
              
          })
          res.set({ 'content-type': 'text/plain; charset=utf-8' });
          res.write("----------------------------------"+ '\n');
          res.write("Automotores DIGITAL HOUSE - FORMAR"+ '\n');     
          res.write("----------------------------------"+ '\n');
          res.write("----------------------------------"+ '\n');
          res.write("----------------------------------"+ '\n');
          res.end ('No tenemos sucursales en ese lugar')

          }
          }
    module.exports = sucursalesController