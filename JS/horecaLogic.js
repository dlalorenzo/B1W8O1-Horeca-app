var qtyfris, qtybier, qtywijn
var qtyfris = 0
var qtywijn = 0
var qtybier = 0
var qtysnacks = 0

const BIER=2.75
const WIJN=3.75
const FRIS=2
const SNACKS=2.50

    function order(doosje){
   qtyOrder = prompt("hoeveel " + doosje + ' wilt u bestellen');
    console.log(naam + qtyOrder);

	    if(doosje = 'fris'){
	    	frisname = doosje;
	    	qtyfris = qtyfris + qtyOrder;

	   }else if(doosje == 'bier'){
	        biername = doosje;
	    	qtybier = qtybier + qtyOrder;

	   }else if(doosje == 'bier'){
	        wijnname = doosje;
	    	qtywijn = qtywijn + qtyOrder;
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

