
// creating array with animals pictures - start -
var images = [
    'img/bird.png',
    'img/deer.png',
    'img/elephant.png',
    'img/flamingo.png',
    'img/lion.png',
    'img/monkey.jpg',
    'img/panda.png',
    'img/rhino.jpg',
    ]
// creating array with animals pictures - end -


//checking that array works - start -
//document.write('<img src="' + animals[0] + '" />')
//checking that array works - end -


//getting image imageBox elements from HTML - start -

//you can check this expression in the browser console 
var allImageElements = document.getElementsByTagName("img");
//getting image imageBox elements from HTML - end -


//REORDERING IMAGES 

function reorderImg() {
    debugger;

   //creating an array of indexes for img src
   var oldCounter = [0];

   //we can use "for" to be able to add
   //something to each img element in array
   for (var i = 0; i < images.length; i++) {

       //on the each iteration we have to add NEW counter.
       var counter = Math.floor(Math.random() * images.length);

       //in this step we have to add different number to the counter
       //each time 
       for (var y = 0; y < oldCounter.length; y++) {

           //
           var index = oldCounter.indexOf(counter)

          //if oldCounter array are not empty, we set NEW counter
           if (index != -1) {
               counter = Math.floor(Math.random() * images.length)
           }
       }
       var currentImageElement = allImageElements[i];
       currentImageElement.setAttribute('src', images[counter]);
       oldCounter.push(counter);
   }
}

 setInterval(function () {
          reorderImg()
}, 4000)
