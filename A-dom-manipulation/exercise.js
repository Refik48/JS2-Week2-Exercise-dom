/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    const 

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
// 1.
const myElementP = document.querySelectorAll("p");
const myElementPArray = Array.from(myElementP)
console.log(myElementP,myElementPArray[2]);

// 2.
const myElementH = document.querySelector(".site-header");
// console.log(myElementH);
// 3.
const myElementJ= document.querySelector("#jumbotron-text");
// console.log(myElementJ);
// 4.
const myElementPP= document.querySelectorAll(".primary-content p");
// console.log(myElementPP);

const myElementPPArray = Array.from(myElementPP);
// console.log(myElementPPArray[1]);




/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/