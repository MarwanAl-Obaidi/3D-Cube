const uploadInput = document.getElementById('upload');
const cube = document.getElementById('cube');
const faces = cube.getElementsByClassName('face');
let rotateX = 0;
let rotateY = 0;

function updateCubeRotation() {
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function animateCubeRotation() {
    rotateX += 1;
    rotateY += 1;
    updateCubeRotation();
    requestAnimationFrame(animateCubeRotation);
}

animateCubeRotation();

uploadInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const image = new Image();
        image.src = e.target.result;
        for (let i = 0; i < faces.length; i++) {
            faces[i].style.backgroundImage = `url('${image.src}')`;
        }
    }

    reader.readAsDataURL(file);
});