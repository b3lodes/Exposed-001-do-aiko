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

// $(document).ready(function () {
//     window.onload = function() {
//         window.scrollTo(0, document.body.scrollHeight);
//     };
// });
