var today = new Date();
document.getElementById('time').innerHTML=today;

var today = new Date(); // date d'aujourd'hui en millisecondes
var christmas = new Date('2016-12-25'); // Date de Noel en millisecondes

var rebours = christmas.getTime() - today.getTime(); //rebours en millisecondes

var reboursDays = Math.floor(rebours / (1000 * 60 * 60 * 24)); // rebours en jours

countDown = function(reboursDays){
  if(reboursDays >30){
    console.log(reboursDays +" days to Christmas !");
  }

  else{
    console.log("Christmas is approaching fast");
  }

};

finalCountDown = countDown(reboursDays);


document.getElementById('finalCountDown').innerHTML=finalCountDown;
