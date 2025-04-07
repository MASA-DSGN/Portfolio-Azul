// Efecto de nebulosa de fondo
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('nebulaCanvas');
    const ctx = canvas.getContext('2d');
    
    // Ajustar tamaño del canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Configuración de la nebulosa
    const particles = [];
    const particleCount = 100;
    const maxSize = 5;
    const colors = [
        { r: 58, g: 134, b: 255 },  // Azul primario
        { r: 131, g: 56, b: 236 },  // Púrpura secundario
        { r: 255, g: 0, b: 110 }    // Rosa acento
    ];
    
    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * maxSize + 1,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
    
    // Animar nebulosa
    function animate() {
        // Limpiar canvas con fondo oscuro semitransparente
        ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Dibujar y actualizar partículas
        particles.forEach(particle => {
            // Dibujar partícula
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.8)`;
            ctx.fill();
            
            // Añadir resplandor
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.2)`;
            ctx.fill();
            
            // Mover partícula
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Rebote en los bordes
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX *= -1;
            }
            
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY *= -1;
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
});
