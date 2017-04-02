
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

//returns value of each object property in the images array
let animalNode = images.map( (animal) => {return '<img src="' + animal.src + '">'})

//push into "img-container" filled "<img>" node
imgContainer.innerHTML = animalNode.join("");





//getting image imageBox elements from HTML - start -

//you can check this expression in the browser console 
var allImageElements = document.getElementsByTagName("img");
//getting image imageBox elements from HTML - end -


//REORDERING IMAGES 

// function reorderImg() {


//    //creating an array of indexes for img src
//    var oldCounter = [0];

//    //we can use "for" to be able to add
//    //something to each img element in array
//    for (var i = 0; i < images.length; i++) {

//        //on the each iteration we have to add NEW counter.
//        var counter = Math.floor(Math.random() * images.length);

//        //in this step we have to add different number to the counter
//        //each time 
//        for (var y = 0; y < oldCounter.length; y++) {

//            //
//            var index = oldCounter.indexOf(counter)

//           //if oldCounter array are not empty, we set NEW counter
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
