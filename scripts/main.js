 var today = new Date();
 var isId = document.getElementById('time');

// document.getElementById('time').innerHTML=today;

 if (isId !== null) {
document.getElementById('time').innerHTML=today;
}




var xtoday = new Date(); // date d'aujourd'hui en millisecondes
var christmas = new Date('2016-12-25'); // Date de Noel en millisecondes

var rebours = christmas.getTime() - xtoday.getTime(); //rebours en millisecondes

var reboursDays = Math.floor(rebours / (1000 * 60 * 60 * 24)); // rebours en jours

countDown = function(){
  if(reboursDays >30){
    return(reboursDays +" days to Christmas !");
  }

  else{
    return("Christmas is approaching fast");
  }

};

var finalCountDown = countDown(reboursDays);
var isFinalCountDown = document.getElementById('finalcountdown'); // checking id the #finalcountdown is here to execute the code

if (isFinalCountDown !== null){
  document.getElementById('finalcountdown').innerHTML=finalCountDown;
}


// Random display of Background images
var totalCount = 5;
function ChangeIt()
{
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'images/background/'+num+'.jpg';
document.body.style.backgroundSize = "cover";// Background cover
}

ChangeIt();
