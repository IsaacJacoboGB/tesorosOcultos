document.addEventListener('DOMContentLoaded', function () {
	const currentPath = window.location.pathname;
	const menuItems = document.querySelectorAll('.navbar ul li a');

	menuItems.forEach((item) => {
		const itemPath = new URL(item.href, window.location.origin).pathname;

		if (
			currentPath === itemPath ||
			currentPath.startsWith(itemPath.replace('.html', ''))
		) {
			item.classList.add('active');
			item.parentElement.classList.add('active'); // Añade 'active' al <li>
		}
	});
});
