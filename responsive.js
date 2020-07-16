let imageDog = document.getElementById('imageDog');
let imageCat = document.getElementById('imageCat');
let imagesToggle = document.getElementById('imagesToggle');
let color = document.getElementById('color'); 

images.addEventListener('click', toggleImages);
color.addEventListener('click', toggleColor);

function toggleImages() {
    let imageDog = document.getElementById('imageDog');
    let imageCat = document.getElementById('imageCat');

    if(imageDog.style.display === 'block') {
        // console.log('hello');
        imageCat.src = 'https://www.goodfreephotos.com/albums/vector-images/black-cat-with-big-head-vector-clipart.png';
        imageCat.style.display = "block";
        imageDog.style.display = "none";
    }
    else {
        // console.log('goodbye');
        imageDog.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Dog_silhouette.svg/1034px-Dog_silhouette.svg.png'; 
        imageCat.style.display = "none";
        imageDog.style.display = "block";
    }
}

function toggleColor() {
    // console.log('working');

    if(color.style.backgroundColor === 'aqua') {
        // console.log('hello');
        color.style.backgroundColor = 'lightblue';
    }
    else {
        // console.log('goodbye');
        color.style.backgroundColor = 'aqua';
    }
}