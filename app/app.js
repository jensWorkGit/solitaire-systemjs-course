import "klondike/scoring.js";
import "klondike/klondike.js";
import "klondike/board.js";
import "klondike/game.js";

angular.module("klondike.scoring", [])
    .service("scoring", [Scoring]);

angular.module("solitaire", ["klondike", "ngDraggable"]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ["solitaire"]);
});