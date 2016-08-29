/**
 * Singleton
 */
function BoardParser() {

}
BoardParser.prototype = {
    parseMessage: function (msg) {

    }
};


BoardParser.findInMessage=function(what, message){
    var index=message.indexOf(what);
    var len=message.length;
    var N=Math.sqrt(len);
    var x=index%N;
    var y=Math.floor(index/N);
    return [x,y]
};

BoardParser.findMatchingInMessage=function (what, message) {
    var _needToMatch=what.split("");
    var match=[];
    if(_needToMatch.length==1){
        match=findInMessage(what,message)
    }else{
        _needToMatch.forEach(function(el){
            var co=findInMessage(el,message);
            if((co[0]!='-1')&&(co[0]!='-1'))
                match.push(co)
        })
    };
    return match
}

BoardParser.messageParser=function(message){
    var results = []
    var chunkCount=Math.sqrt(message.length)
    while (message.length > 0) {
        results.push(message.splice(0,chunkCount))
    }
    return results;
}


module.exports = BoardParser;