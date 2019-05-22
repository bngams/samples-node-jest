let Event = require('events');

// Create a custom Event class
class CustomEvent extends Event {
	// specialization
}

let listeners = [
	{notify: () => { console.log('my Object listener 1') } },
	{notify: () => { console.log('my Object listener 2') }},
]

// create an event
let myCustomEvent = new CustomEvent();

// create listener
myCustomEvent.on('event-name', () => {
	console.log('on listener');
	for(let l of listeners) 
		l.notify();
})

// dispatch event
myCustomEvent.emit('event-name');
console.log('event emit');