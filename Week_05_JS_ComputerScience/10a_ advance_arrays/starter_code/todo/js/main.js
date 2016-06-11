/*

TO DO LIST

Create a "to do" list that does the following:

1. Takes the value from the input that contains the ID 
   #newItem.
2. Add (append) the item to a list item in the unodered 
   list that contains the ID #todos.
Note: You will need to templatize this by storing the HTML 
   string in a variable.
Hint: <li><div class=listBox><label><input type="checkbox" name="todo-check" id="todo-check"> Done? <span class="todo-content">' + newItem + '</span></label></div></li>
3. Reset the value of ID #newItem.
4. Create a count and show the number of "to do" items on 
   the page.


BONUS:
1. Add a 'delete' button for each individual todo list item
2. Change the todo content to a label that will trigger the item's checkbox
  - Hint: you'll have to give each todo item's checkbox a unique id

*/

var toDoList = [];
var itemsToDo = 0;
var itemsTotal = 0;

//Create a function to count the number of to do items.

function renderTodo () {
  itemsTotal = toDoList.length;
  itemsToDo = 0;

  var renderedCode = "";

  for (q = 0; q < todoList.length; q++) {
    if (toDoList[q][0] == false) {
      itemsToDo++;
    }
  }

}
  //Variable to store total number of list items.

  //Variable to store total number of checked items.

  //Variable to store value when items are checked.

  //Update number of items left.



//Add new item on form submit.

function addNewToDo (){

  //Prevent page refresh.

  //Grab value of form input & save into a variable.
  var newItem = [false, ""];
  newItem[1] = $("#newItem").val()
  //Create variable to store delete button HTML string.

  //Combine newItem and delButton into a HTML list item string to add onto page.


  //Take the new list item and append it to the ul. 

  
  //Run the count function to update the count.


  //Clear out the text input.
  $("#newItem").val(" ");

}
//Event listener for click on #todo-check.


//Event listener for click on #delete.

  //Remove the entier li for the deleted to-do item.

  //Update count.


//Listen for click on #clear.

  //Remove all list items.

  //Reset #count to zero.


//Listen for click on #clearCompleted.

  //Remove checked list items.

