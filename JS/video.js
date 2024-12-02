// Selecciona el botón de reproducción
const playBtn = document.querySelector('.glightbox.play-btn');

// Crear y configurar el overlay
const videoOverlay = document.createElement('div');
videoOverlay.id = 'videoOverlay';

// Crear botón de cierre
const closeBtn = document.createElement('button');
closeBtn.id = 'closeVideoBtn';
closeBtn.innerHTML = 'X';

// Función para crear el iframe del video
function createIframe() {
  const iframe = document.createElement('iframe');
  iframe.width = '560';
  iframe.height = '315';
  iframe.src = 'https://www.youtube.com/embed/D0qd70hkwM0?autoplay=1';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  return iframe;
}

// Agregar evento al botón de reproducción
playBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Evita la acción predeterminada
  videoOverlay.style.display = 'flex'; // Mostrar el overlay

  // Agregar el iframe dinámicamente
  if (!videoOverlay.querySelector('iframe')) {
    const iframe = createIframe();
    videoOverlay.appendChild(iframe);
  }
});

// Evento para cerrar el video
closeBtn.addEventListener('click', () => {
  videoOverlay.style.display = 'none'; // Ocultar el overlay
  const iframe = videoOverlay.querySelector('iframe');
  if (iframe) {
    iframe.remove(); // Eliminar el iframe para detener el video
  }
});

// Agregar el botón de cierre y el overlay al DOM
videoOverlay.appendChild(closeBtn);
document.body.appendChild(videoOverlay);
