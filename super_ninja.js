class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        console.log("Mi nombre es: " + this.nombre);
    }

    showStats() {
        console.log(
            "Nombre:",
            this.nombre,
            "Fuerza:",
            this.fuerza,
            "Velocidad:",
            this.velocidad,
            "Salud:",
            this.salud
        );
    }

    drinkShake() {
        this.salud += 10;
        console.log("Salud aumentada!");
    }
}

const ninja1 = new Ninja("Ricardo", 100, 50, 200);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkShake();
console.log(ninja1.salud);
