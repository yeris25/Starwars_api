import {Personajes,Vehicles} from '../services/servicioStarwars.js'





let arrayEspecies=document.getElementById("especies")
let arrayPlanetas=document.getElementById("planetas")



    
    Personajes().then(function(respuesta){
        
      console.log(respuesta) 

        respuesta.forEach(function(especie){   
            
             let columna=document.createElement("div")
                columna.classList.add("col")

            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","h-100","shadow")
   
            let nombre=document.createElement("h4")
            nombre.classList.add("text-center","fw-bold")
            nombre.textContent=especie.name


            let lenguaje=document.createElement("p")
            lenguaje.classList.add("bold")
            lenguaje.textContent="Lenguaje: "+especie.language

            let clasificacion=document.createElement("p")
            clasificacion.classList.add("bold")
            clasificacion.textContent="Especie: "+especie.classification

            let promedioVida=document.createElement("p")
            promedioVida.classList.add("bold")
            promedioVida.textContent="Promedio de vida: "+especie.average_lifespan+" Años"

        
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(lenguaje)
            tarjeta.appendChild(clasificacion)
            tarjeta.appendChild(promedioVida)
            columna.appendChild(tarjeta)
            arrayEspecies.appendChild(columna)



        })
})

    Vehicles().then(function(respuesta){

       console.log(respuesta)

        respuesta.forEach(function(planetas){

           
            let columna=document.createElement("div")
            columna.classList.add("col")
            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","h-100","shadow")

            

                let nombre=document.createElement("h4")
                nombre.classList.add("text-center","fw-bold")
                nombre.textContent=planetas.name

           

                let clima=document.createElement("p")
                clima.classList.add("bold")
                clima.textContent="Clima: "+planetas.climate
    
                let poblacion=document.createElement("p")
                poblacion.classList.add("bold")
                poblacion.textContent="Poblacion: "+planetas.population
    
                let terrain=document.createElement("p")
                terrain.classList.add("bold")
                terrain.textContent="Terreno: "+planetas.terrain
    
               
    
                
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(clima)
            tarjeta.appendChild(poblacion)
            tarjeta.appendChild(terrain)
            columna.appendChild(tarjeta)
            arrayPlanetas.appendChild(columna)

        })

     
        
    })

    

