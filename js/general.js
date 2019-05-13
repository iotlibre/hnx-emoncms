
	var elem = document.documentElement;
	var corriendo = false;
	var interval;
	var pet = 0;
	var pee = 0;
	var peth = 0;
	var peeh = 0;
	var eet = 0;
	var eee = 0;
	var eeth = 0;
	var eeeh = 0;

	var cantidad = 0;
  var pulsos = 0;
  var pulsos_anterior = 0;
  var pulsos_intervalo = 0;



	function update(){

		peticionDatos();

		document.getElementById("pet").innerText = pet.toFixed(2) + " kWh";
		 document.getElementById("pee").innerText = pee.toFixed(2)  + " kWh";
		 document.getElementById("peth").innerText = peth.toFixed(2)  + " kWh";
		 document.getElementById("peeh").innerText = peeh.toFixed(2)  + " kWh";
		 document.getElementById("eet").innerText = eet.toFixed(2)  + " Tn";
		 document.getElementById("eee").innerText = eee.toFixed(2)  + " Tn";
		 document.getElementById("eeth").innerText = eeth.toFixed(2)  + " Kg";
		 document.getElementById("eeeh").innerText = eeeh.toFixed(2)  + " Kg";
		 document.getElementById("cantidad").innerText = cantidad.toFixed(0);
	}

	function openFullscreen() { // peticion pantalla completa
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) { /* Firefox */
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE/Edge */
			elem.msRequestFullscreen();
		}
	}

	//tomar valores desde Open Energy Monitor

function peticionDatos() {

	//alert("peticion");

   var xmlhttp = new XMLHttpRequest();

   xmlhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
	    //alert("Recibido!");
		var vectorOEM = JSON.parse(this.responseText);

		//pet = vectorOEM[0];
    pulsos = vectorOEM[6];
    pulsos_intervalo = pulsos - pulsos_anterior;
    pet = 111;
    pulsos_anterior = pulsos;
    //alert(pet);

		//pee = vectorOEM[1];
		pee = 222;
		//alert(pee);

		peth = 333;
		//alert(peth);

		//peeh = vectorOEM[2];
    peeh =444
		//alert(peeh);

		eet = 555;
		//alert(eet);

    //eee = vectorOEM[5];
    eee = 666;
		//alert(eee);

		//eeth = vectorOEM[6];
    eeth = 777;
		//alert(eeth);

		eeeh = 888;
		//alert(eeeh);

		// cantidad = vectorOEM[8];
    // cantidad = 18322 + (vectorOEM[6]/10);
		cantidad = 999;
		//alert(cantidad);

   }
   else{
	 //alert("sin conexion");
	 // cantidad = 33333;
   }
 };
 xmlhttp.open("GET", "tomarDatos.php", true);
 xmlhttp.send();
}

function start_page(){
		if(!corriendo){
			update();
			var interval = setInterval(update, 5000); //tiempo para recarga de pagina
			corriendo = true;
			//alert("Javascript ok");
		}
	}
