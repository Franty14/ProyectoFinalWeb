document.getElementById('language-selector').addEventListener('change', translatePage);

async function translatePage() {
    const targetLanguage = document.getElementById('language-selector').value;

    const url = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyDlkYy5TP0TRKQlY468zvwFk7Ir4wG6wIA";


    // Seleccionar todos los elementos con texto que quieres traducir
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, .translatable'); // Elementos con texto visible
    let textsToTranslate = [];

    textElements.forEach(element => {
        if (element.textContent.trim() !== "") {
            textsToTranslate.push(element.textContent.trim());
        }
    });

    // Preparar el cuerpo de la solicitud
    const body = {
        q: textsToTranslate,
        target: targetLanguage,
    };

    try {
        // Llamada a la API de Google Translate
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (data && data.data && data.data.translations) {
            let translatedTexts = data.data.translations.map(translation => translation.translatedText);
            let index = 0;
            // Actualizar el texto de cada elemento con la traducción
            textElements.forEach(element => {
                if (element.textContent.trim() !== "") {
                    element.textContent = translatedTexts[index++];
                }
            });
        } else {
            alert("Error en la traducción");
        }
    } catch (error) {
        console.error('Error:', error);
        alert("Error al conectar con la API");
    }
}