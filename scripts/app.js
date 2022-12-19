//Sacar titulo y año; 
console.log('2');

const arrayPelis = [];
const arrayFechas =[];




async function starWars() {

    const resultado = await fetch(`https://swapi.dev/api/films/`);
    const baseDatos = await resultado.json();
    let listaPeliculas = baseDatos.results;

    for (let i = 0; i < listaPeliculas.length; i++) {

        arrayPelis.push(listaPeliculas[i].title)
        arrayFechas.push((listaPeliculas[i].release_date.slice(0,4)));
        
    }

    console.log(arrayPelis,arrayFechas)
      const data = {
        labels: [arrayPelis],
        series:[arrayFechas],
    }

    const options = {
        width: '100%',
        height: '70%'
    
      };



  
    new Chartist.Line('.ct-chart', data, options);
    console.log(arrayPelis,arrayFechas)

 

} 
starWars()




// Pediremos los personajes de Star Wars y pintaremos una gráfica de barras en la que podamos ver
// En el eje X el nombre del personaje
// En el eje Y el número de películas en las que ha participado.


const arrayActor = [];
const arrayFilms = [];

async function personajesStarWars (){
  const resultado2 = await fetch(`https://swapi.dev/api/people/`);
  const baseDatos2 = await resultado2.json();
  let elencoActor = baseDatos2.results;

for (let i = 0; i < elencoActor.length; i++){
  arrayActor.push(elencoActor[i].name)
  arrayFilms.push(elencoActor[i].films.length)
}
 console.log(arrayActor,arrayFilms)

 const data = {
  labels: [arrayActor],
  series: [arrayFilms],
};
const options = {
  width: '100%',
  height: '70%'

};
new Chartist.Bar('.ct-chart2', data, options);

}



personajesStarWars();



