'use strict';

/* Follow the below instructions to use jQuery to create an interactive
   survey builder.
   Be sure and reference functions in the jQuery API for more details:
      
      http://api.jquery.com/

  Note that a better style would be to use a global `state` variable to keep 
  track of the poll as it is built; but this exercise will represent state
  with the DOM itself to provide more jQuery method practice!
*/

/* BEFORE YOU DO ANYTHING ELSE, modify the HTML so it imports the jQuery script
   Put the <script> tag for jQuery _BEFORE_ the <script> tag for this file! */


/* Start by using jQuery to create some DOM elements that make a nice form */

//Use the jQuery selector function `$()` to select the '#poll-options' element
var pollOption = $("#poll-options");
//You can test that everything works by using console.log to log out the variable
console.log(pollOption);

//Use the jQuery selector function `$()` to create a new `<input>` element
//Remember to include the < > when specifying the new element to make!
var input = $("<input>")
console.log(input);

//Use the `.append()` method to append your new input element to the selected
//poll options element.
//You will need to click on the input to see it at this point.
pollOption.append(input);

//Use the `.addClass()` method to add the 'form-control' class to your input
input.addClass("form-control");

//Use the `.attr()` method to set the following attributes of the input:
//  - 'type' should be 'text'
//  - 'placeholder' should be 'Your option here' 
//Do this with only a single function call!
input.attr({type:'text', placeholder: 'Your option here'});

//Create a new `<div>` element that contains a <label>, using the HTML:
//
//    `<div class="input-group-prepend">
//       <label class="input-group-text"></label>
//     </div>`
//
//You can just use the `$()` function and pass in the entire HTML String
/*var newDiv = $("<div></div>");
newDiv.addClass("input-group-prepend");
var newTag = $("<label></label>");
newTag.addClass("input-group-text");
newDiv.append(newTag);*/
var newDiv = $('<div class="input-group-prepend"></div>');

var lab = $('<label for="option1" class="input-group-text"></label>');
newDiv.append(lab);
//Use the `.find()` method to get a reference to the label inside the <div> you
//just created. Then use the `.text()` method to specify the text of the label: "1."
var temp = newDiv.find("label");
temp.text("1.");

//Attach the div containing the label to the DOM tree BEFORE the input.
//Hint: see http://api.jquery.com/category/manipulation/dom-insertion-outside/
//At this point you should see the label in a grey box above the input

newDiv.insertBefore(input);

//Surround ("wrap") the both the `.input-group-prepend` div AND the <input> 
//with the element
//  '<div class="input-group">'
//Use the group selector (the comma ,) in the argument to the `$()` function 
//to select both elements with jQuery.
//Hint: http://api.jquery.com/category/manipulation/dom-insertion-around/
//You should now see the box next to the input!
var group = $(".input-group-prepend, input");
group.wrapAll('<div class="input-group">');


/* Now you'll make it so you can add new inputs! */

//Select the `#add-button` and register an event listener that responds to clicks.
var addButton = $("#add-button");

addButton.on("click", function() {

    /*The following steps should occur when the button is clicked 
      (there is a lot to do!)*/

    //Select the first `.input-group` element on the page (which you just made).
    //Use the ':first' pseudoclass (see: http://api.jquery.com/first-selector/)
    // - If you don't use that pseudoclass, your options will increase exponentially!
  var first = $(".input-group:first");
    
    //Use the `.clone()` method to duplicate that `.input-group` element.
    //Then attach the duplicate as the last child of the `#poll-options` element.
  var dul = first.clone();

    
    //Select ALL the `<input>` elements on the screen, and use the `.length`
    //property to determine how many there are. 
    //Log out this value out.
 var inputAll = $("input")
var num = inputAll.length;
    
    //Select the `<label>` element IN the duplicate. Hint: use the `.find()`
    //method to access only the one inside the copy.
  var labDul = dul.find("label");
  labDul.text( num+1 + ".");
  pollOption.append(dul);
  dul.find("input").val("");
  var newBut = $('<div class="input-group-append"><button type="button" class="btn btn-danger"><span class="fa fa-times" aria-label="remove"></span></button></div>');
  dul.append(newBut);
  var but = dul.find(".input-group-append");
  /*The following steps should occur when the remove button is clicked:*/

        //Use jQuery's `$()` to select the target of the event (`event.target`)
        //This will give you a "jQuery object" of the target that supports jQuery 
        //methods!

        
        //Select the target button's parent `.input-group` and remove it.
        //See https://api.jquery.com/parents/ and https://api.jquery.com/remove/ 

        
        //Now that you've removed items, you'll need to re-number ALL the labels
        //Select all the `<label>` elements and use the `.text()` function
        //Hint: Look at how this function can take a callback as a parameter!
        //      http://api.jquery.com/text/#text-function
 but.on("click", function(event) {
    var event2 = $(event.target);
    var parent =  event2.parent().parent();
    parent.remove();
    var labels = $('label');
    labels.text(function(index){
      return (index + 1)+'.';
    });   
  })
});
 
    //Set the text of this new label to be the number of options.

    
    //Any values the user has typed in will be copied along with the `.input-group`
    //Select the duplicate's `<input>` element (use `.find()` or `.children()`) 
    //and set its value to be empty ''.
    //Hint: use the `.val()` method.

    
    //Extra: provide a `for` attribute for the label that refers to a unique `id` 
    //attribute of the `<input>` (which you'll need to provide). This supports
    //accessibility. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label



    /* Finally (still in the `add-button` callback!) you'll give a "remove" button 
      to these new inputs (you can't remove the first option) */

    //Add the following elements(s) at the end of your new duplicate 'input-group'
    //(inside the group)
    //    
    //   `<div class="input-group-append">
    //      <button type="button" class="btn btn-danger">
    //        <span class="fa fa-times" aria-label="remove"></span>
    //      </button>
    //    </div>`
    //
    //Note that you can use the backticks `` to make a multi-line String!
    //You should now see a red "x" button next to each input

    
    //Select that button you just created. Again, use the `.find()` function

    
    //Add a click event listener to that remove button. Be sure to specify the
    //`event` argument passed into the callback function!

    
        /*The following steps should occur when the remove button is clicked:*/

        //Use jQuery's `$()` to select the target of the event (`event.target`)
        //This will give you a "jQuery object" of the target that supports jQuery 
        //methods!

        
        //Select the target button's parent `.input-group` and remove it.
        //See https://api.jquery.com/parents/ and https://api.jquery.com/remove/ 

        
        //Now that you've removed items, you'll need to re-number ALL the labels
        //Select all the `<label>` elements and use the `.text()` function
        //Hint: Look at how this function can take a callback as a parameter!
        //      http://api.jquery.com/text/#text-function

        

  
        





/* And that's the end of the add option callback! */

//Congratulations for getting to the end! For an extra challenge:
//
//Add the ability to move options down in the list. In effect, swap 
//the location of the `.input-group` with the one below it.
//
//When you create a new input group, add the following html BEFORE the label 
//(but inside the `.input-group-prepend`) to include a "move down" button
//
//     `<button class="btn btn-default">
//        <span class="fa fa-chevron-down" aria-label="move down"></span>
//      </button>`
//
// Add an event listener to this new button so that when clicked it:
//   1. Selects the <input> of the clicked input-group, as well as the 
//      <input> below it (separately)
//   2. Swaps the location of those two elements elements!
