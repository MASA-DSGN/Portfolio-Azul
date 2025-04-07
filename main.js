// Funciones principales del portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar efectos visuales
    initCursorEffect();
    createParticles();
    
    // Configurar formulario de contacto
    setupContactForm();
    
    // Añadir clases para animaciones
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
    });
});

// Efecto de cursor personalizado
function initCursorEffect() {
    const cursor = document.querySelector('.cursor-effect');
    
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
        return;
    }
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Efecto de zoom al pasar sobre elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .project-item, .language-selector');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.width = '34px';
            cursor.style.height = '34px';
        });
    });
}

// Crear partículas flotantes
function createParticles() {
    const particleCount = 20;
    const colors = ['rgba(58, 134, 255, 0.2)', 'rgba(131, 56, 236, 0.2)', 'rgba(255, 0, 110, 0.2)'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posición aleatoria
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Tamaño aleatorio
        const size = Math.random() * 5 + 2;
        
        // Color aleatorio
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Aplicar estilos
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        
        // Animación
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        document.body.appendChild(particle);
    }
}

// Configurar formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Aquí normalmente enviarías los datos a un servidor
            // Por ahora, solo mostraremos un mensaje de éxito
            alert(`Mensaje enviado correctamente.\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);
            
            // Limpiar formulario
            contactForm.reset();
        });
    }
}
