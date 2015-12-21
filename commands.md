"start": "http-server -c-1 -o",
// disable browser caching and with o open a new browser window!

# installing necessary bower packages
> bower install es6-module-loader --save
> bower install traceur --save

# installing necessary npm packages
> npm install babel-core --save

# to show an uml diagram (use in the chrome console)
> showModuleRelationships()

# installing babel
> npm install -S babel-core@">=5.8.24 < 6.0"

# installing underscore jspm
> jspm install underscore

# uninstall underscore from the bower file
bower uninstall underscore --S

# installing packages via jspm
jspm install angular angular-mocks angular-route

# install dragable
> jspm install github:fatlinesofcode/ngDraggable

or use it like that: 
> jspm install ngDraggable=github:fatlinesofcode/ngDraggable

# install babel
npm install -g babel
npm install -g babel-cli

# Installing the babel presets
npm install babel-preset-es2015

babel app/app.js --out-file app.compiled.js
babel app/app.js --out-file app.compiled.js --modules system

babel --presets es2015 app/app.js --out-file app.compiled.js

# jspm bundle
jspm bundle app.js app/app.bundle.js


# inject the bundle automatically so that it doesn't have to be put on the index.html page
jspm bundle app.js app/app.bundle.js --inject

# to unbundle 
jspm unbundle 


