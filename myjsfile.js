/**
 * Created by ryan on 7/12/16.
 */

// NPM package
//var express = require('express');

// Callbacks

var fs = require('fs');

// this is not a callback. This is blocking (sequence)
var data = fs.readFile('input.txt');
console.log(data.toString());


// breakpoint


/*
// this is a callback. This is non-blocking
fs.readFile('input.txt', function (err, data) {
	if (err) {
		console.log('bad');
		console.log(err.stack);
		return;
	}
	console.log('good');
	console.log(data.toString());
});
*/


// last line
console.log('The program has ended.');