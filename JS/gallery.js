document.addEventListener("DOMContentLoaded", function() {
    fetch('/JSON/gallery.json')
        .then(response => response.json()) 
        .then(data => {
            const gallery = document.querySelector('.gallery'); 
            data.forEach(item => {
                const li = document.createElement('li'); 
                const img = document.createElement('img'); 
                img.src = item.src; 
                li.appendChild(img);
                gallery.appendChild(li);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});