System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "stage": 0
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app.bundle.js": [
      "app.js",
      "github:fatlinesofcode/ngDraggable@0.1.8",
      "github:angular/bower-angular@1.4.7",
      "klondike/klondike.js",
      "github:fatlinesofcode/ngDraggable@0.1.8/ngDraggable",
      "klondike/game.js",
      "klondike/board.js",
      "github:angular/bower-angular@1.4.7/angular",
      "klondike/scoring.js",
      "cards/deck.js",
      "npm:underscore@1.8.3",
      "klondike/piles/tableauPile.js",
      "klondike/piles/remainderPile.js",
      "github:angular/bower-angular-route@1.4.7",
      "klondike/piles/foundationPile.js",
      "npm:babel-runtime@5.8.25/helpers/class-call-check",
      "npm:babel-runtime@5.8.25/helpers/create-class",
      "cards/card.js",
      "npm:underscore@1.8.3/underscore",
      "klondike/piles/pile.js",
      "npm:babel-runtime@5.8.25/core-js/object/create",
      "github:angular/bower-angular-route@1.4.7/angular-route",
      "npm:babel-runtime@5.8.25/core-js/object/define-property",
      "npm:core-js@1.2.1/library/fn/object/create",
      "npm:core-js@1.2.1/library/fn/object/define-property",
      "npm:core-js@1.2.1/library/modules/$"
    ],
    "cards.bundle.js": [
      "cards/deck.js",
      "cards/card.js",
      "npm:underscore@1.8.3",
      "npm:underscore@1.8.3/underscore"
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
