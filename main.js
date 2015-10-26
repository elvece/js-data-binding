// ** globals ** //

var scope = {};
var classNamesArray = ['name', 'age'];

// ** functions ** //
function getElements() {
  /*
  1. iterate thoguht classNamesArray
  2. grab dom elements assocaited with each class
  3. return an array of dom elements
  */
  var outputArray = [];
  for (var i = 0; i < classNamesArray.length; i++) {
    outputArray.push(document.getElementsByClassName(classNamesArray[i]));
  }
  return outputArray;
}

function domBinding(elements){
  /*
  1. iterate through the dom elements
  2. attach onkeyup event to each
  3. perform *some* sort of action to bind the two inputs
  */
  //assign value of input box to second input box
  //map?
  for (var index in elements) {
    elements[index].onkeyup = function(){
      for (var index in elements){
        //what happens here?
        elements[index].value = this.value;
      }
    };
  }
}

function modelBinding(elements){
  /*
  1. iteratre through dom elements
  2. object.defineproperty(object, property, callback) use a set function
  3. scope.name = 'something' => updates the DOM
  */
  for (var i = 0; i < classNamesArray.length; i++) {
    Object.defineProperty(scope, classNamesArray[i], {
      //new value is value assigned to the name
      set: function(newValue){
        for (var index in elements){
          elements[index].value = newValue;
        }
      }
    });
  }
}

// ** function calls ** //
var domElements = getElements();
domBinding(domElements[0]);
modelBinding(domElements[0]);


