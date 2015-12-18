/**
 * Created by jhoffmann on 18.12.2015.
 */

/* config file is irrelevant here this references to the baseUrl */
System.config({
    transpiler: "babel",
    defaultJSExtensions: true,
    map: {
        "babel": "../node_modules/babel-core/browser.js",
        "card": "cards/card.js",
        "deck": "cards/deck.js"
    },
    babelOptions:{
        stage: 0
    }
});
