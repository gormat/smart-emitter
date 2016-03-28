## Install

Install with [npm](https://www.npmjs.com/package/smart-emitter)
```sh
$ npm install smart-emitter
```

Or download from [github](https://github.com/gormat/smart-emitter)

## Usage

### Create Instance
```smart-emitter``` is using Factory design pattern, so you cant use new method.
For creating new instance use ```createInstance``` function.
```sh
var SE = require('smart-emitter');
var emitter = SE.createInstance();
```

### Add Listenre if not exists
```sh
emitter.addListenerIfNotExists('event', ( ) => {
    console.log('ok');
})
```

### On
Just adds one more listener
```sh
emitter.on('event', ( ) => {
    console.log('ok');
})
```

### Add Unique Listener
This method removes all listeners on this channel and adds new.
```sh
emitter.addUniqueListener('event', ( ) => {
    console.log('ok');
})
```

### Emit
```sh
emitter.emit('event');
```

### Remove Listener
Removes listener subscribed on given event
```sh
emitter.removeListener('event', function);
```

### Remove All Listeners
Removes all listeners subscribed on given event
```sh
emitter.removeAllListeners('event', function);
```

### Listeners Count
Returns listeners count subscribed on given event
```sh
emitter.listenerCount('event');
```
