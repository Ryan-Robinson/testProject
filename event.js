// event
/*

uses events heavily
initiates variables, declares functions, and then waits for event to occur
generally a main loop that listens for events and then triggers a callback function when one of those events is detected
 Events are different than callbacks as it works on the Observers pattern. The functions which listen to events acts as
 Observers. When an event gets fired its listener functions starts executing.
 Node.js has multiple in-built events available through the events module & EventEmitter class whihc is used to bind events
 and even listeners
 */

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();


// create an event handler
var connectHandler = function connected() {
	console.log('connection succesful');

	// fire the data_recieved event
	eventEmitter.emit('data_received');
}

// bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

//bind the data_recieved event with the anonymous function
eventEmitter.on('data_received', function () {
	console.log('data received succesfully.')
});

// fire the connection event
eventEmitter.emit('connection');

console.log('The Program has ended.')

