var log = function (string) {
    console.log(string);
};

var hostIp = 'tetrisj.jvmhost.net';
var userName = 'anvay_patil@epam.com';
var protocol = 'WS';

var port = 12270;//8080;
var server = 'ws://' + hostIp + ':' + port + '/codenjoy-contest/ws';
var WebSocket = require('ws');
var ws = new WebSocket(server + '?user=' + userName);

var WALL = '☼';
var APPLE = '☺';
var TAIL = '╙╘╓╕═║╗╝╔╚'
var HEAD = '◄►▲▼'
var STONE = '☻'

ws.on('open', function () {
    log('Opened');
});

ws.on('close', function () {
    log('Closed');
});

function findInMessage(what, message) {
    var index = message.indexOf(what);
    var len = message.length;
    var N = Math.sqrt(len);
    var x = index % N;
    var y = Math.floor(index / N);
    return [x, y]
}
function findMatchingInMessage(what, message) {
    var _needToMatch = what.split("");
    var match = [];
    if (_needToMatch.length == 1) {
        match = findInMessage(what, message)
    } else {
        _needToMatch.forEach(function (el) {
            var co = findInMessage(el, message);
            if ((co[0] != '-1') && (co[0] != '-1'))
                match.push(co)
        })
    }
    ;
    return match
}

function messageParser(message) {
    var results = []
    var chunkCount = Math.sqrt(message.length)
    while (message.length > 0) {
        results.push(message.splice(0, chunkCount))
    }
    return results;
}

ws.on('message', function (messageFromServer) {
    var message = (messageFromServer.split("=")[1]);
    var apple = findMatchingInMessage(APPLE, message);
    var stone = findMatchingInMessage(STONE, message);
    var head = findMatchingInMessage(HEAD, message);
    var tails = findMatchingInMessage(TAIL, message);
    var _2dArray = messageParser(message.split(""));
    log("Apple=(" + apple + ")")
    log("Stone=(" + stone + ")")
    log("HEAD=(" + head + ")")
    log("TAIL=(" + tails + ")")
    log(_2dArray);
    var result = answer();
    log("Command Submitted=(" + result + ")");
    ws.send(result);
});

log('Web socket client running at ' + server);

function answer() {
    return "down";
}
