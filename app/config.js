System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [],
    "stage": 0
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app.bundle.js": [
      "app.js",
      "github:angular/bower-angular@1.4.7",
      "github:fatlinesofcode/ngDraggable@0.1.8",
      "klondike/klondike.js",
      "github:fatlinesofcode/ngDraggable@0.1.8/ngDraggable",
      "klondike/game.js",
      "klondike/scoring.js",
      "github:angular/bower-angular@1.4.7/angular",
      "klondike/board.js",
      "npm:underscore@1.8.3",
      "klondike/piles/tableauPile.js",
      "cards/deck.js",
      "klondike/piles/remainderPile.js",
      "klondike/piles/foundationPile.js",
      "github:angular/bower-angular-route@1.4.7",
      "klondike/piles/pile.js",
      "npm:underscore@1.8.3/underscore",
      "cards/card.js",
      "github:angular/bower-angular-route@1.4.7/angular-route",
      "cards/card.html!github:systemjs/plugin-text@0.0.4"
    ]
  },

  depCache: {
    "app.js": [
      "github:angular/bower-angular@1.4.7",
      "github:fatlinesofcode/ngDraggable@0.1.8",
      "klondike/klondike.js"
    ],
    "github:angular/bower-angular@1.4.7": [
      "github:angular/bower-angular@1.4.7/angular"
    ],
    "klondike/klondike.js": [
      "github:angular/bower-angular@1.4.7",
      "klondike/game.js",
      "klondike/board.js",
      "klondike/scoring.js"
    ],
    "github:fatlinesofcode/ngDraggable@0.1.8": [
      "github:fatlinesofcode/ngDraggable@0.1.8/ngDraggable"
    ],
    "klondike/game.js": [
      "github:angular/bower-angular@1.4.7",
      "npm:underscore@1.8.3",
      "cards/deck.js",
      "klondike/piles/tableauPile.js",
      "klondike/piles/remainderPile.js",
      "klondike/piles/foundationPile.js"
    ],
    "klondike/board.js": [
      "github:angular/bower-angular@1.4.7",
      "github:angular/bower-angular-route@1.4.7"
    ],
    "github:fatlinesofcode/ngDraggable@0.1.8/ngDraggable": [
      "github:angular/bower-angular@1.4.7"
    ],
    "klondike/piles/tableauPile.js": [
      "klondike/piles/pile.js",
      "npm:underscore@1.8.3"
    ],
    "npm:underscore@1.8.3": [
      "npm:underscore@1.8.3/underscore"
    ],
    "cards/deck.js": [
      "cards/card.js",
      "npm:underscore@1.8.3"
    ],
    "klondike/piles/remainderPile.js": [
      "klondike/piles/pile.js"
    ],
    "klondike/piles/foundationPile.js": [
      "klondike/piles/pile.js"
    ],
    "github:angular/bower-angular-route@1.4.7": [
      "github:angular/bower-angular-route@1.4.7/angular-route"
    ],
    "github:angular/bower-angular-route@1.4.7/angular-route": [
      "github:angular/bower-angular@1.4.7"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.7",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.7",
    "angular-route": "github:angular/bower-angular-route@1.4.7",
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "card": "cards/card.js",
    "core-js": "npm:core-js@1.2.1",
    "deck": "cards/deck.js",
    "ngDraggable": "github:fatlinesofcode/ngDraggable@0.1.8",
    "text": "github:systemjs/plugin-text@0.0.4",
    "underscore": "npm:underscore@1.8.3",
    "github:angular/bower-angular-mocks@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:angular/bower-angular-route@1.4.7": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:fatlinesofcode/ngDraggable@0.1.8": {
      "angular": "github:angular/bower-angular@1.4.7"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});
