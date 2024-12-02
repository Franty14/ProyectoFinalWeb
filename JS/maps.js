let map, marker1, marker2, directionsService, directionsRenderer;

        function initMap() {
            
            const localCoords = { lat: 9.9762371, lng: -84.0097345, };

            
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 13,
                center: localCoords
            });

            
            directionsService = new google.maps.DirectionsService();
            directionsRenderer = new google.maps.DirectionsRenderer();
            directionsRenderer.setMap(map);

            
            marker2 = new google.maps.Marker({
                position: localCoords,
                map,
                title: "Mi Local",
            });

            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const clientCoords = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    
                    marker1 = new google.maps.Marker({
                        position: clientCoords,
                        map,
                        title: "Mi Ubicación"
                    });

                    
                    traceRoute(clientCoords, localCoords);

                }, () => {
                    alert("No se pudo obtener la ubicación.");
                });
            } else {
                alert("La geolocalización no está soportada por este navegador.");
            }
        }

        function traceRoute(origin, destination) {
            const request = {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            };

            directionsService.route(request, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(result);
                } else {
                    alert("No se pudo encontrar una ruta.");
                }
            });
        }