const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync(__dirname + '/../data/concesionarias.json', 'utf-8'));
const marcasController = {
    
     index:(req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("------------------------------------------"+ '\n');
          res.write("Automotores DIGITAL HOUSE - FORMAR"+ '\n');     
          res.write("------------------------------------------"+ '\n');
          res.write("---------------------------------"+ '\n');
          res.write("ÉSTAS SON LAS MARCAS DISPONIBLES:"+ '\n');     
          res.write("---------------------------------"+ '\n');
          res.write('\n');
  
        
        let marcaA = [];

        concesionarias.forEach(marc=>{
            marc.autos.forEach(marc=>{
                marcaA.push(marc.marca)
            })
        }),
        marcaA = marcaA.filter((a, b) =>marcaA.indexOf(a) === b),
        marcaA.forEach(marcas=>{
            res.write('*** ' + marcas +"\n\n")
        }),
        res.end()
    },
    marca:(req,res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        let marcaB = [];
        let id = req.params.id;
        let cantidadAutosPorMarca = 0;
        res.write("------------------------------------------------"+ '\n');
        res.write("Bienvenidos a Automotores DIGITAL HOUSE - FORMAR"+ '\n');     
        res.write("------------------------------------------------"+ '\n');
        res.write('\n');
        res.write('Seleccionaste la marca: ' + id + '\n\n')

        concesionarias.forEach(marc=>{
            marc.autos.forEach(marc=>{
                marcaB.push(marc)
            })
        })
        
        
        marcaB.forEach(marc => {
            if(marc.marca == id ) {
                res.write('Modelo: ' + marc.modelo + '\n\n')
                res.write('Año: ' + marc.anio + '\n\n')
                res.write('****************'+'\n')
                cantidadAutosPorMarca++;
            } 
        
        }),
        res.write('-------------------------------------'+'\n\n')
        res.write('Tenemos '+cantidadAutosPorMarca +" " + "autos"+" " + id+" " + "disponibles" + '\n\n')    
        res.write('-------------------------------------' + '\n\n')
        res.end()

    },
    
}
    
    module.exports = marcasController