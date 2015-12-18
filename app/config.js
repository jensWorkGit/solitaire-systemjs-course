/**
 * Created by jhoffmann on 18.12.2015.
 */
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
