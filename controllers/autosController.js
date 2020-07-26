const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync(__dirname + '/../data/concesionarias.json', 'utf-8'));
const autosController = {
    
    index: function(req, res){
     res.set({ 'content-type': 'text/plain; charset=utf-8' });
       res.write("----------------------------------"+ '\n');
        res.write("Automotores DIGITAL HOUSE - FORMAR"+ '\n');     
        res.write("----------------------------------"+ '\n');
        res.write("------------------------------------------"+ '\n');
        res.write("ESTOS SON LOS AUTOS DE NUESTRAS SUCURSALES:"+ '\n');  
        res.write("------------------------------------------"+ '\n');
        res.write('\n'); 
   
      
        concesionarias.forEach(concesionaria => {
      
            res.write("SUCURSAL:"+ '\n');  
            res.write("---------"+ '\n');
            res.write(concesionaria.sucursal +'\n'); 
            res.write('\n');    
            res.write("MARCA   -    MODELO");
            res.write('\n');   
            concesionaria.autos.forEach (auto =>{
         
            res.write(auto.marca +'  -  '+auto.modelo);
          res.write('\n');       
               
            }) ;
        });
        res.end()
    },
    marca:(req, res)=>{
      let idMarca = req.params.id;
      res.set({'content-type':'text/plain;charset=utf-8'})
      res.write("Automotores DIGITAL HOUSE - FORMAR"+ '\n');     
      res.write("----------------------------------"+ '\n');
      res.write('\n'+'\n'); 
      res.write('Seleccionaste la Marca: ' + idMarca + '\n\n')
      res.write("----------------------------------"+ '\n');
      let autosM = []
      let sumaAutos = 0;
      concesionarias.forEach((movil)=>{
        movil.autos.forEach(movil=>{
            autosM.push(movil)
          })
      })
      autosM.forEach(movil=>{
          if(movil.marca.toLowerCase() == idMarca.toLowerCase()){
              res.write('Modelo: ' + movil.modelo + '\n')
              res.write('Año: ' + movil.anio + '\n')
              res.write('Color: ' + movil.color + '\n')
              res.write('----------------------------------' + "\n")
              sumaAutos++;

          }
 
      })
      res.write('------------------------------------------'+'\n\n')
      res.write('Tenemos: '+ sumaAutos + " "  +'Autos' +" " + idMarca +" " +'disponibles de esa marca' +'\n\n')    
      res.write('-----------------------------------------' + '\n\n')
      res.end()
  },
  dato:(req, res) => {
    let idDatos = req.params.id;
    res.set({'content-type':'text/plain;charset=utf-8'})
    res.write('Datos Especificos: ' + idDatos + '\n\n')
    let datos = [];
    let cantidad = 0;


    concesionarias.forEach(marc=>{
        marc.autos.forEach(marc=>{
            datos.push(marc)
        })
    }) 

    datos.forEach(marc => {
        if(idDatos == marc.anio){
            res.write('Marca: ' + marc.marca + '\n\n')
            res.write('Modelo: ' + marc.modelo + '\n\n')
            res.write('Color: ' + marc.color + '\n\n')
            res.write('-----------------------------------'+'\n\n')
            cantidad++
        }
        if(idDatos == marc.color){
            res.write('Marca: ' + marc.marca + '\n\n')
            res.write('Modelo: ' + marc.modelo + '\n\n')
            res.write('Año: ' + marc.anio + '\n\n')
            res.write('----------------------------------'+ '\n\n')
            cantidad++
        }
    }) 
    res.write('--------------------------------------------------------------'+'\n\n')
    res.write('Tenemos'+" "+  +cantidad +" "+ "vehiculos"+ " "+  idDatos +" " + "con esas caracteristicas"+ '\n\n')    
    res.write('------------------------------------------------------------' + '\n\n')
    res.end()
}

}
    module.exports = autosController