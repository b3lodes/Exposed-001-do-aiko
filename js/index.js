$(document).ready(function () {
    window.addEventListener('load', function () {
        var audio = document.getElementById('abc');
        audio.muted=false;
        audio.addEventListener('canplaythrough', function() {
            audio.play();
        });
    });
});

$(document).ready(function () {
    document.body.addEventListener('mouseover', function () {
        document.body.style.zoom = "100%";
        if (window.scrollY > document.body.scrollHeight-2100) {
            window.scrollTo(0, document.body.scrollHeight);
        }
        if (window.scrollY > document.body.scrollHeight-800) {
            var audio = document.getElementById('abc');
            audio.currentTime = 14;
            audio.muted = false;
            audio.play();
        }
    });
});

function getCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function mudarCor() {
    const elementos = document.querySelectorAll('.mainfake');
    elementos.forEach(elemento => {
        elemento.style.color = getCorAleatoria();
    });
}

function virarDeCabecaParaBaixo() {
    document.body.style.transform = 'rotate(180deg)';
    document.body.style.transformOrigin = 'center';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    //document.body.style.backgroundImage = 'url(https://conteudo.imguol.com.br/c/noticias/3c/2020/07/03/homem-observa-estrelas-no-ceu-a-noite-1593802511360_v2_3x4.jpg)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundColor = 'black';
    document.body.style.backgroundImage = 'none';
}

// $(document).ready(function () {
//     window.onload = function() {
//         window.scrollTo(0, document.body.scrollHeight);
//     };
// });
