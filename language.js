// Sistema multilingüe
document.addEventListener('DOMContentLoaded', function() {
    // Configuración de idiomas
    const languages = {
        de: {
            'current-lang': 'Deutsch',
            'hero-title': 'UX/UI Designer Portfolio',
            'hero-subtitle': 'Barrierefreie und responsive Webdesign',
            'about-title': 'Über Mich',
            'about-desc1': 'UX/UI Designer mit Erfahrung in der Gestaltung von benutzerfreundlichen und zugänglichen digitalen Erlebnissen.',
            'about-desc2': 'Spezialisiert auf responsive Webdesign, Prototyping und Usability-Tests.',
            'about-desc3': 'Sprachkenntnisse in Deutsch, Spanisch (Muttersprache) und Englisch.',
            'projects-title': 'Projekte',
            'project1-desc': 'Sketch Projekt für UX/UI Design mit Fokus auf Benutzerfreundlichkeit und visuelle Hierarchie.',
            'project2-desc': 'Figma Projekt mit interaktiven Prototypen und responsivem Design für verschiedene Geräte.',
            'project3-desc': 'HTML und CSS Implementierung mit Fokus auf Barrierefreiheit und semantische Struktur.',
            'links-title': 'Links',
            'contact-title': 'Kontakt',
            'contact-name': 'Name:',
            'contact-email': 'Email: maiberlin@mein.gmx',
            'contact-email-label': 'Email:',
            'contact-message': 'Nachricht:',
            'contact-submit': 'Senden',
            'footer-rights': 'Alle Rechte vorbehalten.'
        },
        es: {
            'current-lang': 'Español',
            'hero-title': 'Portfolio de Diseñador UX/UI',
            'hero-subtitle': 'Diseño web accesible y responsive',
            'about-title': 'Sobre Mí',
            'about-desc1': 'Diseñador UX/UI con experiencia en la creación de experiencias digitales accesibles y fáciles de usar.',
            'about-desc2': 'Especializado en diseño web responsive, prototipado y pruebas de usabilidad.',
            'about-desc3': 'Conocimientos de idiomas en alemán, español (lengua materna) e inglés.',
            'projects-title': 'Proyectos',
            'project1-desc': 'Proyecto Sketch para diseño UX/UI con enfoque en usabilidad y jerarquía visual.',
            'project2-desc': 'Proyecto Figma con prototipos interactivos y diseño responsive para diferentes dispositivos.',
            'project3-desc': 'Implementación HTML y CSS con enfoque en accesibilidad y estructura semántica.',
            'links-title': 'Enlaces',
            'contact-title': 'Contacto',
            'contact-name': 'Nombre:',
            'contact-email': 'Email: maiberlin@mein.gmx',
            'contact-email-label': 'Email:',
            'contact-message': 'Mensaje:',
            'contact-submit': 'Enviar',
            'footer-rights': 'Todos los derechos reservados.'
        },
        en: {
            'current-lang': 'English',
            'hero-title': 'UX/UI Designer Portfolio',
            'hero-subtitle': 'Accessible and responsive web design',
            'about-title': 'About Me',
            'about-desc1': 'UX/UI Designer with experience in creating user-friendly and accessible digital experiences.',
            'about-desc2': 'Specialized in responsive web design, prototyping, and usability testing.',
            'about-desc3': 'Language skills in German, Spanish (native), and English.',
            'projects-title': 'Projects',
            'project1-desc': 'Sketch project for UX/UI design focusing on usability and visual hierarchy.',
            'project2-desc': 'Figma project with interactive prototypes and responsive design for various devices.',
            'project3-desc': 'HTML and CSS implementation focusing on accessibility and semantic structure.',
            'links-title': 'Links',
            'contact-title': 'Contact',
            'contact-name': 'Name:',
            'contact-email': 'Email: maiberlin@mein.gmx',
            'contact-email-label': 'Email:',
            'contact-message': 'Message:',
            'contact-submit': 'Send',
            'footer-rights': 'All rights reserved.'
        }
    };
    
    // Idioma predeterminado
    let currentLanguage = 'de';
    
    // Selector de idioma
    const languageSelector = document.querySelector('.language-selector');
    const selectedLanguage = document.querySelector('.selected-language span');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageOptions = document.querySelectorAll('.language-dropdown li');
    
    // Mostrar/ocultar menú desplegable
    if (languageSelector) {
        languageSelector.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
        });
        
        // Ocultar menú al hacer clic fuera
        document.addEventListener('click', function() {
            languageDropdown.style.display = 'none';
        });
        
        // Cambiar idioma al seleccionar una opción
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-language');
                changeLanguage(lang);
                
                // Actualizar clase activa
                languageOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // Función para cambiar el idioma
    function changeLanguage(lang) {
        if (languages[lang]) {
            currentLanguage = lang;
            
            // Actualizar texto del idioma seleccionado
            if (selectedLanguage) {
                selectedLanguage.textContent = languages[lang]['current-lang'];
            }
            
            // Actualizar todos los textos
            document.querySelectorAll('[data-lang]').forEach(element => {
                const key = element.getAttribute('data-lang');
                if (languages[lang][key]) {
                    element.textContent = languages[lang][key];
                }
            });
        }
    }
    
    // Inicializar con el idioma predeterminado
    changeLanguage(currentLanguage);
});
