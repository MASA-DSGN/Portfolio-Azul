// Controles específicos para videos de YouTube
document.addEventListener('DOMContentLoaded', function() {
    // Cargar la API de YouTube
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script') [0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // Objeto para almacenar las instancias de los reproductores
    window.players = {};
    
    // Función llamada por la API de YouTube cuando está lista
    window.onYouTubeIframeAPIReady = function() {
        // Obtener todos los iframes de YouTube
        document.querySelectorAll('.video-container iframe').forEach((iframe, index) => {
            const videoId = getYouTubeVideoId(iframe.src);
            const container = iframe.closest('.video-container');
            const playPauseBtn = container.querySelector('.play-pause-btn');
            const progressBar = container.querySelector('.progress');
            
            if (videoId) {
                // Actualizar el iframe para usar la API
                iframe.id = 'youtube-player-' + index;
                iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`;
                
                // Crear el reproductor
                window.players[index] = new YT.Player('youtube-player-' + index, {
                    events: {
                        'onStateChange': function(event)  {
                            onPlayerStateChange(event, playPauseBtn, progressBar);
                        }
                    }
                });
                
                // Configurar el botón de reproducción/pausa
                if (playPauseBtn) {
                    playPauseBtn.addEventListener('click', function() {
                        const player = window.players[index];
                        if (player) {
                            const state = player.getPlayerState();
                            if (state === YT.PlayerState.PLAYING) {
                                player.pauseVideo();
                            } else {
                                player.playVideo();
                            }
                        }
                    });
                }
            }
        });
    };
    
    // Manejar cambios de estado del reproductor
    function onPlayerStateChange(event, playPauseBtn, progressBar) {
        const icon = playPauseBtn.querySelector('i');
        
        if (event.data === YT.PlayerState.PLAYING) {
            icon.className = 'fas fa-pause';
            updateProgressBar(event.target, progressBar);
        } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
            icon.className = 'fas fa-play';
        }
    }
    
    // Actualizar la barra de progreso
    function updateProgressBar(player, progressBar) {
        if (!progressBar) return;
        
        const interval = setInterval(function() {
            if (player.getPlayerState() === YT.PlayerState.PLAYING) {
                const duration = player.getDuration();
                const currentTime = player.getCurrentTime();
                const progress = (currentTime / duration) * 100;
                progressBar.style.width = progress + '%';
            } else {
                clearInterval(interval);
            }
        }, 1000);
    }
    
    // Obtener el ID del video de YouTube desde la URL
    function getYouTubeVideoId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        
        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }
});
