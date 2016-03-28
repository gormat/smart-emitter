var SmartEmitter = require('./index');

var SE = SmartEmitter.createInstance();

SE.addUniqueListener('start', () => {
    console.log('1');
});

SE.addUniqueListener('start', () => {
    console.log('2');
});

SE.addListenerIfNotExists('f', () => {
    console.log('3');
});

SE.emit('start');
SE.emit('f');

SE.removeAllListeners('f');
SE.emit('start');
SE.emit('f');

SE.removeAllListeners('start');
SE.emit('start');
SE.emit('f');

SE.on('f', () => {
    console.log('4');
});
SE.emit('start');
SE.emit('f');
