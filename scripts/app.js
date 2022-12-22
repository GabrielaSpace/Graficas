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
        labels: arrayPelis,
        series:[arrayFechas],
    }
    const options = {
      width: '30%',
      height: '20%',
      // Don't draw the line chart points
      showPoint: true,
      // Disable line smoothing
      lineSmooth: false,
      // X-Axis specific configuration
      axisX: {
          // We can disable the grid for this axis
          showGrid: true,
          // and also don't show the label
          showLabel: true,
      },
      // Y-Axis specific configuration
      axisY: {
      
          stepSize:2,
          low: 1977,
          high: 2005,
          scaleMinSpace: 10,
          divisor: arrayFechas.length,
          onlyInteger: true,
          ticks: arrayFechas,
          // The label interpolation function enables you to modify the values
          // used for the labels on each axis. Here we are converting the
          // values into million pound.
          // labelInterpolationFnc: function (value) {
          //     return (value);
          // }
      }
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
  labels: arrayActor,
  series: [arrayFilms],
};
const options = {
  width: '30%',
  height: '20%',
  axisY:{onlyInteger: true,}
  


};
new Chartist.Bar('.ct-chart2', data, options);

}



personajesStarWars();



