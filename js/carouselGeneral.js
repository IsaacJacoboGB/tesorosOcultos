document.addEventListener('DOMContentLoaded', function () {
	new Splide('.splide', {
		type: 'loop', // Carrusel infinito
		perPage: 1, // Muestra 1 slide a la vez
		fixedHeight: '800px', // Ancho fija
		fixedHeight: '500px', // Altura fija
		cover: true, // No recortar imágenes (usa 'contain' sino se cambie a true)
		gap: '20px', // Espacio entre slides
		autoplay: true, // Reproducción automática
		interval: 3000, // Cambio cada 3 segundos
		pauseOnHover: true, // Pausa al pasar el mouse
		pauseOnFocus: true, // Pausa al interactuar
		arrows: true, // Flechas de navegación
		pagination: true, // Puntos indicadores
		breakpoints: {
			// Responsive
			640: {
				perPage: 1,
				height: '300px',
			},
		},
	}).mount();
});
