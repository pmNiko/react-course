(
  () => {
    const nombre = 'Niko'
    const apellido = 'Paneblanco'

    const nombreCompleto = `
      ${nombre}
      ${apellido}
      ${ 1 + 1}
    `;

    console.info(nombreCompleto);
  }
)()