

window.addEventListener('keydown', function(evento) {
    const audio = document.querySelector(`audio[data-key=${evento.key}]`);
    const animation = document.querySelector(`.key[data-key=${evento.key}]`);

    if (!audio) {
        return //stop the function from running all together
    }
    audio.currentTime = 0;
    audio.play();
    
    animation.classList.add('playing');
    // animation.style.border = '5px solid #ffc600';

});

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}