var today = new Date();
var christmas = new Date('2016-12-25');

var rebours = christmas.getTime() - today.getTime();
console.log( Math.floor(rebours / (1000 * 60 * 60 * 24)) );

countDown = function(rebours){
  if(rebours>=31){
    console.log("Il reste Plus de 30 jours avant Noel!");
  };

  else(){
    console.log("Il est temps de préparer les cadeaux!");
  };

}
