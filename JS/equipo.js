
$(document).ready(function () {
  const dataUrl = 'https://kristelmena.github.io/Json/PersonalColab.json'; // Ruta del archivo JSON.

  // Consumir el JSON
  $.getJSON(dataUrl, function (data) {
    const equipo = data.equipo;

    // Crear las tarjetas dinámicamente
    equipo.forEach((miembro, index) => {
      const tarjeta = `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${miembro.imagen}" class="card-img-top" alt="${miembro.nombre}" data-index="${index}">
            <div class="card-body info">
              <h5 class="card-title">${miembro.nombre}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${miembro.rol}</h6>
              <p class="card-text">${miembro.descripcion}</p>
            </div>
          </div>
        </div>
      `;
      $('#equipo-container').append(tarjeta);
    });

    // Evento de clic para desplegar solo la tarjeta seleccionada
    $('#equipo-container').on('click', '.card-img-top', function () {
      const infoElement = $(this).next('.info'); // Selecciona la información relacionada.
      const allInfoElements = $('.info'); // Selecciona todas las secciones de información.

      
      allInfoElements.not(infoElement).slideUp();
      
      
      infoElement.slideToggle();
    });
  }).fail(function () {
    console.error('Error al cargar el archivo JSON.');
  });
});



