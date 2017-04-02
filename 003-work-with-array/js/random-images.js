
// creating array with animals pictures - start -
let images = [
    { src: 'img/bird.png'},
    { src: 'img/deer.png'},
    { src: 'img/elephant.png'},
    { src: 'img/flamingo.png'},
    { src: 'img/lion.png'},
    { src: 'img/monkey.jpg'},
    { src: 'img/panda.png'},
    { src: 'img/rhino.jpg'},
    ]
// creating array with animals pictures - end -

let imgContainer = document.getElementById("img-container");

setInterval(() => {
    //returns value of each object property in the "images" array, sorts and rips out commas
    let animalNode = images.map( (animal) => {return '<img src="' + animal.src + '">'})
                           .sort( () => { return Math.random() - 0.5 } )
                           .join("")
    //places in the "img-container" filled "<img>" nodes
    imgContainer.innerHTML = animalNode;
 }, 2500)


//UGLY CODE

// function reorderImg() {

//    var oldCounter = [0];

//    for (var i = 0; i < images.length; i++) {
//        var counter = Math.floor(Math.random() * images.length);

//        for (var y = 0; y < oldCounter.length; y++) {
//            var index = oldCounter.indexOf(counter)
//            if (index != -1) {
//                counter = Math.floor(Math.random() * images.length)
//            }
//        }
//        var currentImageElement = allImageElements[i];
//        currentImageElement.setAttribute('src', images[counter]);
//        oldCounter.push(counter);
//    }
// }

//  setInterval(function () {
//           reorderImg()
// }, 4000)
