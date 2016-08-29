/**
 *
 */

var WebSocket = require('ws');

function SocketHandler(config) {
    this.socket = this.createSocket(config);
    this.socket.on('message',this.messageHandler);
}

SocketHandler.prototype = {
    createSocket: function (config) {
        var server = 'ws://' + config.hostIp + ':' + config.port + '/codenjoy-contest/ws';
        return new WebSocket(
            server+'?user='+config.userName
        )
    },
    messageHandler:function(msg){

    }
};

module.exports = SocketHandler;

