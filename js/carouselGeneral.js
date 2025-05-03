// document.addEventListener('DOMContentLoaded', function () {
// 	new Splide('.splide', {
// 		type: 'loop', // Carrusel infinito
// 		perPage: 1, // Muestra 1 slide a la vez
// 		fixedHeight: '800px', // Ancho fija
// 		fixedHeight: '500px', // Altura fija
// 		cover: true, // No recortar imágenes (usa 'contain' sino se cambie a true)
// 		gap: '20px', // Espacio entre slides
// 		autoplay: true, // Reproducción automática
// 		interval: 3000, // Cambio cada 3 segundos
// 		pauseOnHover: true, // Pausa al pasar el mouse
// 		pauseOnFocus: true, // Pausa al interactuar
// 		arrows: true, // Flechas de navegación
// 		pagination: true, // Puntos indicadores
// 		breakpoints: {
// 			// Responsive
// 			640: {
// 				perPage: 1,
// 				height: '300px',
// 			},
// 		},
// 	}).mount();
// });

document.addEventListener('DOMContentLoaded', function () {
	new Splide('.splide', {
		type: 'loop',
		perPage: 1,
		height: '550px', // Aumentamos un poco la altura para el pie de foto
		cover: true,
		gap: '20px',
		autoplay: true,
		interval: 3000,
		pauseOnHover: true,
		pauseOnFocus: true,
		arrows: true,
		pagination: true,
		breakpoints: {
			640: {
				perPage: 1,
				height: '350px', // Ajustamos para móviles
			},
		},
	}).mount();
});
