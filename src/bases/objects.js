(
  () => {
    const persona = {
      nombre: 'Tony',
      apellido: 'Stark',
      zip: 5546798,
      lat: 14.325567,
      lng: 19.325567,

      sayHello: function() {
        return `Hello my name is ${this.nombre}`;
      },

      getLocation: () => `My location is ${persona.lat} and ${persona.lng}`
    }

    console.info(persona.sayHello());
    
    
    persona.nombre = 'Niko';
    console.info(persona.sayHello());

    console.info(persona.getLocation());
  }
)()