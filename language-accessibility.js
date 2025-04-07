// Mejoras de accesibilidad para el selector de idiomas
document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.querySelector('.language-selector');
    const selectedLanguage = document.querySelector('.selected-language');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageOptions = document.querySelectorAll('.language-dropdown li');
    
    if (languageSelector && selectedLanguage && languageDropdown) {
        // Añadir atributos ARIA para accesibilidad
        languageSelector.setAttribute('role', 'combobox');
        languageSelector.setAttribute('aria-haspopup', 'listbox');
        languageSelector.setAttribute('aria-expanded', 'false');
        languageSelector.setAttribute('aria-label', 'Sprache auswählen');
        
        selectedLanguage.setAttribute('aria-live', 'polite');
        
        languageDropdown.setAttribute('role', 'listbox');
        languageDropdown.id = 'language-options';
        languageSelector.setAttribute('aria-controls', 'language-options');
        
        // Añadir soporte de teclado
        languageSelector.tabIndex = 0;
        
        languageOptions.forEach((option, index) => {
            option.setAttribute('role', 'option');
            option.id = `lang-option-${index}`;
            option.tabIndex = -1;
            
            if (option.classList.contains('active')) {
                option.setAttribute('aria-selected', 'true');
                languageSelector.setAttribute('aria-activedescendant', option.id);
            } else {
                option.setAttribute('aria-selected', 'false');
            }
        });
        
        // Manejar eventos de teclado
        languageSelector.addEventListener('keydown', function(e) {
            switch (e.key) {
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    const isExpanded = languageSelector.getAttribute('aria-expanded') === 'true';
                    languageSelector.setAttribute('aria-expanded', !isExpanded);
                    languageDropdown.style.display = isExpanded ? 'none' : 'block';
                    break;
                case 'Escape':
                    languageSelector.setAttribute('aria-expanded', 'false');
                    languageDropdown.style.display = 'none';
                    break;
            }
        });
        
        // Actualizar atributos al abrir/cerrar el menú
        languageSelector.addEventListener('click', function() {
            const isExpanded = languageSelector.getAttribute('aria-expanded') === 'true';
            languageSelector.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Actualizar atributos al seleccionar un idioma
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                languageOptions.forEach(opt => {
                    opt.setAttribute('aria-selected', 'false');
                });
                
                this.setAttribute('aria-selected', 'true');
                languageSelector.setAttribute('aria-activedescendant', this.id);
            });
            
            // Soporte de teclado para opciones
            option.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                    languageSelector.focus();
                }
            });
        });
    }
});
