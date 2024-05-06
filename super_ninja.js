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
            "Salud:",
            this.salud,
            "Velocidad:",
            this.velocidad,
            "Fuerza:",
            this.fuerza
        );
    }

    drinkSake() {
        this.salud += 10;
        console.log("Salud aumentada!");
    }
}

const ninja1 = new Ninja("Ricardo", 100, 50, 200);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1.salud);

class Sensei extends Ninja {
    constructor(
        nombre,
        salud = 200,
        velocidad = 10,
        fuerza = 10,
        sabiduria = 10
    ) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom() {
        this.drinkSake();
        console.log(
            '"Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."'
        );
    }
}

const superSensei = new Sensei("Antonio");
console.log(superSensei);
superSensei.speakWisdom();
superSensei.showStats();
