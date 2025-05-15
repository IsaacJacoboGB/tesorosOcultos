// footer.js
const footerHTML = `
<footer class="footer" id="contacto">
    <div class="footer-container">
        <!-- Información de contacto -->
        <div class="footer-section contact">
            <h4>Contacto</h4>
            <p>Email: info@tesorosocultos.com</p>
            <p>Teléfono: +52 123 456 7890</p>
            <p>Dirección: Calle Falsa 123, Morelos, MX</p>
        </div>

        <!-- Redes Sociales y Aviso Legal -->
        <div class="footer-section social-media">
            <h4><a href="/html/avisoLegal.html" class="legal-link" target="_blank" rel="noopener noreferrer">Aviso Legal</a></h4>
            <!--
            <a href="https://www.facebook.com" target="_blank">Facebook</a>
            <a href="https://www.twitter.com" target="_blank">Twitter</a>
            <a href="https://www.instagram.com" target="_blank">Instagram</a>
            <p>&copy; 2024 Tesoros Ocultos. Todos los derechos reservados.</p>
            -->
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
	document.body.insertAdjacentHTML('beforeend', footerHTML);
});
