
/*
HTTP request methods:
like GET, POST, PUT, DELETE
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

Request needed e. g. for sending data after clicking a "Submit" button.

Asynchronous JavaScript and XML (AJAX)
JavaScript uses an event loop to handle asynchronous function calls.
When a program is run, function calls are made and added to a stack.
The functions that make requests that need to wait for servers to respond then get sent to a separate queue.
Once the stack has cleared, then the functions in the queue are executed.
Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. 

=> AJAX enables requests to be made after the initial page load.

XHR: XMLHttpRequest

*/

//////////////////////////////////////////////////
// Boilerplate code for an AJAX XHR GET request //
//////////////////////////////////////////////////

const xhr = new XMLHttpRequest();
const url = "https://some-api";

xhr.responseType = "json";

// event handler:
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;        // here you could also place the function call that handles if response is falsey.
    }
};

xhr.open("GET", url);
xhr.send();


/* we created a XMLHttpRequest object, saved the URL to a variable, set the response type property to json,
set an arrow function for event handling.
Now we call the .open() and the .send() method on the xhr object.
.open() creates a new request and the arguments passed in determine the type and URL of the request.
*/


// By the way, how to selecting page elements (example):

const inputField = document.querySelector("#input");     // #input is the ID of the element. // EINGABEFELD
const submit = document.querySelector("#submit");                   // BUTTON
const responseField = document.querySelector('#responseField');     // TEXTFELD FÜR DIE AUSGABE


///////////////////
// query strings //
///////////////////

// the paramenters you can add to an URL. Use '?' and a key=value pair. Add more parameters by '&'.
// just read the API documentations to know the possible parameters.

const urlWithQueryString = "https://iam-the-url?key=value&anotherkey=anothervalue";