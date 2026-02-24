/* music-player.js */

// Récupérer l'élément audio
const music = document.getElementById('music');
if (!music) throw new Error("Audio element not found");

// Restaurer l'état précédent depuis sessionStorage
const savedTime = sessionStorage.getItem('musicTime');
const wasPlaying = sessionStorage.getItem('musicPlaying') === 'true';
if (savedTime) music.currentTime = parseFloat(savedTime);

// Fonction pour lancer la musique (au clic)
const startMusic = () => {
    music.play().catch(() => {}); // Tentative lecture
    sessionStorage.setItem('musicPlaying', 'true');
    document.body.removeEventListener('click', startMusic);
};

// Lancer la musique si elle était déjà en cours
if (wasPlaying) {
    document.body.addEventListener('click', startMusic, { once: true });
}

// Ajouter le listener pour le premier clic
document.body.addEventListener('click', startMusic, { once: true });

// Sauvegarder l'état avant de quitter la page
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('musicTime', music.currentTime);
    sessionStorage.setItem('musicPlaying', !music.paused);
});