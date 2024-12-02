$(document).ready(function () {
  const dataUrl = '/JSON/talleres.json';

  // Consumir el JSON
  $.getJSON(dataUrl, function (data) {
    const oferta = data.oferta;
    const introduccionText = oferta.introduccion;

    $('#introduccion').html(`<p>${introduccionText}</p>`);

    oferta.areas.forEach((area) => {
      const areaSection = `
        <div class="col-12 mb-4">
          <h3>${area.nombre}</h3>
          <div class="row" id="area-${area.nombre.replace(/\s+/g, '-').toLowerCase()}"></div>
        </div>
      `;
      $('#cursos-container').append(areaSection);

      area.cursos.forEach((curso) => {
        const cursoCard = `
          <div class="col-12 col-md-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${curso.nombre}</h5>
                <p class="card-text">${curso.descripcion}</p>
                <ul>
                  ${curso.contenidos.map(contenido => `<li>${contenido}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `;
        $(`#area-${area.nombre.replace(/\s+/g, '-').toLowerCase()}`).append(cursoCard);
      });
    });
  }).fail(function () {
    console.error('Error al cargar el archivo JSON.');
  });
});
