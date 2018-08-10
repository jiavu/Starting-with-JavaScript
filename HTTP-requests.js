
/*
HTTP request methods:
like GET, POST, PUT, DELETE
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

Request needed e. g. for sending data after clicking a "Submit" button.

Asynchronous JavaScript and XML (AJAX)
JavaScript uses an event loop to handle asynchronous function calls.
When a program is run, function calls are made and added to a stack (Stapel).
The functions that make requests that need to wait for servers to respond then get sent to a separate queue (Warteschlange).
Once the stack has cleared, then the functions in the queue are executed.
Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and
how to handle asynchronous events.

=> AJAX enables requests to be made after the initial page load.
   It's a set of tools that are used together to take advantage of JS's asynchronous capabilities.

XHR: XMLHttpRequest

*/

//////////////////////////////////////////////////////
// I.1 Boilerplate code for an AJAX XHR GET request //
//////////////////////////////////////////////////////

const xhr = new XMLHttpRequest();
const url = "https://some-api/";

xhr.responseType = "json";

// event handler:
xhr.onreadystatechange = () => {                    // to handle the response object
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;        // here you could also place a function call that handles if response is falsey.
    }                               // The xhr.response property will contain the data that we're getting back from the request.
};

xhr.open("GET", url);
xhr.send();

/* we created a XMLHttpRequest object, saved the URL to a variable, set the response type property to json,
   set an arrow function for event handling (for handling the response object).

A XMLHttpRequest object is used in JavaScript to interact with servers.

Then we called the .open() and the .send() method on the xhr object.
.open() creates a new request and the arguments passed in determine the type of the request and where it's being made to.
.send() will send the request to the server.
*/


// By the way, how to selecting page elements (example):

const inputField = document.querySelector("#input");     // #input is the ID of the element. // EINGABEFELD
const submit = document.querySelector("#submit");                   // BUTTON
const responseField = document.querySelector('#responseField');     // TEXTFELD FÜR DIE AUSGABE


///////////////////
// query strings //
///////////////////

/* the paramenters you can add to an URL. Use '?' and a key=value pair. Add more parameters by '&'.
   just read the API documentations to get to know the possible parameters. */

const urlWithQueryString = "https://iam-the-url?key=value&anotherkey=anotherValue";


///////////////////////////////////////////////////////
// I.2 Boilerplate code for an AJAX XHR POST request //
///////////////////////////////////////////////////////

const xhr = new XMLHttpRequest();
const url = "http://api-to-call-com/endpoint";
const data = JSON.stringify ({id : '200'});             // JSON.stringify() is a method to put data into json format (?)
/* Converts data (converts a value) to a JSON string. By converting the value to a
   string, we can then send the data to a server. */

xhr.responstType = 'json';

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        /* Code to execute with response,
           e. g. a function that does something with the xhr.response. */
        renderResponse(xhr.response);
    }
};

xhr.open('POST', url);

// optional?
xhr.setRequestHeader("Header key", "Header value"); // set several setRequestHeaders for several key:value pairs ..
xhr.setRequestHeader("apiKey", apiKey);
//

xhr.send(data);



////////////////////////
// II. Promises (ES6) //
////////////////////////

/* pending, fulfilled, rejected
pending: when a promise is created or waiting for data
fulfilled: the asynchronous operation was handled successfully.
rejected: the asynchronous operation was unsuccessful.

Once a promise is fulfilled or rejected, you can chain an additional method to the original promise.
*/


///////////////////////////////////////////////////////////
// II.1 Boilerplate code for a GET request using fetch() //
///////////////////////////////////////////////////////////

/*
- Creates request object that contains informations the API needs,
- Sends that request object to the API endpoint,
- Returns a promise that resolves to a response object, which containts the status of the promise
  with information the API sent back.

*/

// fetch() function | URL | .then() method | an arrow function with one parameter (response).
// v                   v                  v             v
fetch("https://api-to-call.com/endpoint").then(response => {                // .then() is the 1st callback function.
    /* The first arrow function is the success callback. It's the first argument of the .then() method.
        .then() will fire only after the promise status of fetch() has been resolved. */


    if (response.ok) {            // If there were no errors response.ok will be true
        return response.json()    //  and the code will return response.json().
    }
    
    // create a new error:
    throw new Error('Request failed!'); // The code will throw this error when response.ok is falsy.


}, networkError => {                /* 2nd argument:
                                    2nd arrow function of .then(). Separated from first one by comma.
                                    Give 1 parameter into it (name it networkError.) */
    console.log(networkError.message);
    // If we could not reach the endpoint at all, e.g., the server is down, then we would get this networkError.
}

).then(jsonResponse => {return jsonResponse});                      // 2nd callback function.
/* The 2nd .then()'s success callback won't run until the previous .then() method has finished running.
   It will also not run if there was an error thrown previously. */

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// once again: fetch GET
fetch("https://api-to-call.com/endpoint").then(response => {            // sends request
    if (response.ok) {                                      //
        return response.json();                             // converts response object to json
    }                                                       //
    throw new Error('Request failed!');                                 // handles errors
}, networkError => console.log(networkError.message)                    //
).then(jsonResponse => {                                        //
    // code to execute with jsonResponse.                       // handles success
});                                                             //


//////////////////////////////////////////////////////
// II.2 Boilerplate code for a fetch() POST request //
//////////////////////////////////////////////////////

//       1st argument: URL     |    2nd argument: settings object. This object has 2 (several?) properties, method and body.
//              v                        v
fetch("http://api-to-call.com/endpoint", {                      //
    method : "POST",                                            // sends request
    body : JSON.stringify({id : '200'})                         //       (body: the information which will be sent to the API)
}).then(response => {
    if (response.ok) {                              //
        return response.json();                     // converts response object to json
    }                                               //
    throw new Error("Request failed!");                            // handles errors
}, networkError => console.log(networkError.message)               // 
).then(jsonResponse => {                                //
    // Code to execute with jsonResponse.               // handles success
});                                                     //


// once again (but shorter)

fetch(url, {// settings object //
    property1 : "POST",
    property2 : information // that will be sent to the API.

}).then(response => {     // Callback function. Will execute when the promise returned from fetch() is resolved.
    if (response.ok) {
        return response.json()  // When returned, this information will be passed on to the next .then() callback function.
    }
    throw new Error("Request failed!"); // Will be raised if we get back some status error. So, it's exception handling in JS?
}, networkError => console.log(networkError.message)    // 2nd argument of .then(), it's the failure callback function.
).then(jsonResponse => {
    return jsonResponse;    // The purpose of this step is to view the JSON that was returned
});                         // from the previous .then().



///////////////////////////////////
// III. async GET requests (ES8) //
///////////////////////////////////