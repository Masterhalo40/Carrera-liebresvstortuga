var Jugar = document.querySelector("#btnJugar").addEventListener("click", ()=> {

    class Jugador {
        constructor(nombre, numero) {
            this._nombre = nombre;
            this._numero = numero;
        }
    }

    class Tortuga extends Jugador {
        constructor(nombre, numero, edad) {
            super(nombre, numero);
            this._sumaTor = 0;
            this._edad = edad;
        }

        get suma() {
            return this._sumaTor;
        }

        correr() {
        var t = Math.trunc(Math.random()*10 + 1);
		if (t < 6 ) {
			this._sumaTor += 3; 
		}
		else if (t > 5 && t < 8) {
			this._sumaTor -= 6; 
		}
		else {
			this._sumaTor += 1; 
		}
	}
}

class Liebre extends Jugador {
    constructor(nombre, numero, color) {
        super(nombre, numero)
        this._color = color;
        this._suma = 0;
    }
    get suma() {
        return this._suma;
    }

    saltoLiebre(){
        var l = Math.trunc(Math.random()*100 + 1);;
	
		if ( l < 21) {
			this._suma += 0;
		}
		else if ( l > 20 && l < 41) {
			this._suma += 9;
		}
		else if (l > 40 && l < 51) {
			this._suma -= 12;
		}
		else if(l > 50 && l < 86) {
			this._suma += 1;
		}
		else {
			this._suma -= 2;
		}
    }
}

class Operación {
    constructor() {
    }
    lugar() {
        var tortuga = new Tortuga();
        var liebre = new Liebre();

        while(tortuga._sumaTor < 90 && liebre._suma < 90) {
            tortuga.correr();
            liebre.saltoLiebre();
        }
        console.log('Tortuga hizo ' + tortuga._sumaTor);
        console.log('Liebre  hizo ' + liebre._suma);

        if(tortuga._sumaTor > 90) {
            console.log("La carrera la gano la tortuga");
        }
        else if(liebre._suma > 90) {
            console.log("La carrera la gano la liebre");
        }
        else if(liebre._suma> 90 && tortuga._sumaTor > 90) {
            console.log("La carrera termino en Empate");
        }   
    }
}

var operación = new Operación();
operación.lugar();
});
