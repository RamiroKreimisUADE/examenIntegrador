// scripts.js - Toggle de tema oscuro/claro

// Obtener el botón y el body
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Cargar preferencia guardada o usar modo claro por defecto
const currentTheme = localStorage.getItem('theme') || 'light';
body.className = currentTheme + '-mode';

// Actualizar el ícono según el tema actual
function updateIcon() {
    const isDark = body.classList.contains('dark-mode');
    const icon = themeToggle.querySelector('svg path');
    
    if (isDark) {
        // Ícono de sol para modo oscuro (cambiar a claro)
        icon.setAttribute('d', 'M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-17v2m0 14v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42');
    } else {
        // Ícono de luna para modo claro (cambiar a oscuro)
        icon.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
    }
}

// Inicializar ícono
updateIcon();

// Event listener para el botón
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    }
    
    updateIcon();
});