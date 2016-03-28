var events = require('events');

function smartEmitter() {
    var instance = new events.EventEmitter();

    instance.setMaxListeners( 100 );

    this.addUniqueListener = ( channel, callback ) => {
        instance.removeAllListeners( channel );
        instance.on( channel, callback );
    };

    this.addListenerIfNotExists = ( channel, callback ) => {
        if( instance.listenerCount( channel ) == 0 ) {
            return instance.on( channel, callback );
        }
        return false;
    };

    this.on = ( channel, callback ) => {
        instance.on( channel, callback );
    }

    this.emit = ( channel ) => {
        return instance.emit( channel );
    };

    this.removeListener = ( channel, callback ) => {
        return instance.removeListener( channel, callback );
    }

    this.removeAllListeners = ( channel ) => {
        return instance.removeAllListeners( channel );
    }

    this.listenerCount = ( channel ) => {
        return instance.listenerCount( channel );
    }
}

exports.createInstance = function() {
    return new smartEmitter();
}
