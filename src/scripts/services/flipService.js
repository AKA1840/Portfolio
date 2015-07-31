// 'use strict';
// /* Memory Game Models and Business Logic */

// angular.module('amApp')
// .factory('flipService', function(){
//   var flipGame = {};




// });





function Tile(title) {
  this.title = title;
  this.flipped = false;
  this.flip = function() {
    this.flipped = !this.flipped;
  }
}

function removeRandomTile(tileDeck) {
  var i = Math.floor(Math.random()*tileDeck.length);
  return tileDeck.splice(i, 1)[0];
}


function Game(tileNames) {


  // Create an array with two of each tileName in it
  var tileDeck = [];
  tileNames.forEach(function(name) {
    tileDeck.push(new Tile(name));
    tileDeck.push(new Tile(name));
  });

  //Cteate the layout of the tiles
  var grid = [];

  for (var row = 0; row < 3; row++) {
    grid[row] = [];
    for (var col = 0; col < 6; col++) {
        grid[row][col] = removeRandomTile(tileDeck);
    }
  }
  this.grid = grid;

  this.unmatchedPairs = tileNames.length;

  this.flipTile = function(tile) {
    if (tile.flipped) {
      return;
    }

    tile.flip();

    if (!this.firstPick || this.secondPick) {
      if (this.secondPick) {
        this.firstPick.flip();
        this.secondPick.flip();
        this.firstPick = this.secondPick = undefined;
      }

      this.firstPick = tile;

    } 
    else {
      if (this.firstPick.title === tile.title) {
        this.unmatchedPairs--;
        this.firstPick = this.secondPick = undefined;
      } 
      else {
        this.secondPick = tile;
      }
    }
  }
}





