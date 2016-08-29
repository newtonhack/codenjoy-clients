/***
 *  @boardArray:
 *     2 dimensional array which contains
 *     the board with its contents like
 *       WALL, APPLE,TAIL,HEAD,STONE
 *  @snakeArray:
 *       contains Array of Coordinates of Snake,
 *       Size of array = length of Snake
 *  @apple:
 *      Coordinate of Apple
 *  @stone:
 *      Coordinate of stone
 ***/

function GameElements() {
    this.boardArray= [];
    this.snakeArray= [];
    this.apple=[];
    this.stone=[];
}

GameElements.WALL='☼';
GameElements.APPLE='☺';
GameElements.TAIL='╙╘╓╕═║╗╝╔╚';
GameElements.HEAD='◄▲▼►';
GameElements.STONE='☻';

GameElements.prototype = {

};

module.exports=GameElements