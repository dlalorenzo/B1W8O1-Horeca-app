var qtyfris, qtybier, qtywijn
var qtyfris = 0
var qtywijn = 0
var qtybier = 0
var qtysnacks = 0

const BIER=250 / 100
const WIJN=375 / 100
const FRIS=200 / 100
const BIT8=450 / 100
const BIT16=800/ 100

    function order(menu){
   qtyOrder = prompt("hoeveel " + menu + ' wilt u bestellen');
    console.log(naam + qtyOrder);

	    if(menu = 'fris'){
	    	frisname = menu;
	    	qtyfris = qtyfris + qtyOrder;

	   }else if(menu == 'bier'){
	        biername = menu;
	    	qtybier = qtybier + qtyOrder;

	   }else if(menu == 'bier'){
	        wijnname = menu;
	    	qtywijn = qtywijn + qtyOrder;
	      }else{
	      	alert('dit is geen geldige keuzen')
	      	prompt(qtyOrder)
	      }
    }
 question = true; 
 function start(){
	  while(question == true){
	    naam = prompt('welke besteling wilt u toevoegen(bier,wijn,fris)');
			  if(naam == 'stop'){
			   	question = false;
			   	document.write("stop");
			   	order('price');
			     }else{
			  order(naam);
			         }
	      }
   }
   start();

