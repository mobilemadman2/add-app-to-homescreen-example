const insultElem = document.querySelector('.insult');
const playElem = document.querySelector('.play');

function showInsult(insultObj) {
	insultElem.innerHTML = insultObj.insult;
	playElem.innerHTML = ' - ' + insultObj.play;
}

async function getInsult() {
	const url = 'https://shakespeare-insults-generator.herokuapp.com/getInsult';

    const response = await fetch(url);
    const data = await response.json();
    
    showInsult(data);
}


document.addEventListener('touchstart', event => {
    setTimeout(() => {
        if (document.querySelector('body').scrollTop < 0) {
            getInsult();
        }
    }, 1000);
})

getInsult();

/*window.addEventListener('load', () => {
    if (navigator.standalone) {
      console.log('Launched: Installed (iOS)');
    } else if (matchMedia('(display-mode: standalone)').matches) {
      console.log('Launched: Installed');
    } else {
      console.log('Launched: Browser Tab');
    }
});*/