INPUTFILE=${1:-entry}
OUTPUTFILE=${2:-bundle}

echo "initializing and installing node modules."
npm init --yes
npm install --save webpack react react-dom babel-core babel-loader babel-preset-es2015 babel-preset-react redux react-redux react-router-dom redux-logger redux-thunk

echo "creating frontend directory with subdirectories and boilerplate scripts"
echo "/actions, /components, /reducers, /store, /util"
mkdir frontend
cd frontend
mkdir actions components reducers store util

printf "// entry.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
" > entry.jsx

cd store

printf "// store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';


const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState
  );
};

export default configureStore;
" > store.js

cd ..

cd reducers

printf "// root_reducer.js
import { combineReducers } from 'redux';
import reducer from './default_reducer.js';

const rootReducer = combineReducers({
  default: reducer
});

export default rootReducer;
" > root_reducer.js

printf "// root_reducer.js
import merge from 'lodash/merge';

const reducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    default:
    return state;
  }
};

export default reducer;
" > default_reducer.js

cd ..

cd components

printf "// app.jsx
import React from 'react';

const App = () => (
  <div className='app'>
    <h1>React is working!</h1>
  </div>
);

export default App;
" > app.jsx

printf "// root.jsx
import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({store}) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
" > root.jsx

cd ..
cd ..

printf "Creating a webpack.config.js with input file: "
printf "./frontend/"$INPUTFILE".jsx"
printf " and output file: "
printf ""$OUTPUTFILE".js"
printf "...\n"

printf "// webpack.config.js
var path = require('path');

module.exports = {
  entry: \"./frontend/"$INPUTFILE".jsx\",
  output: {
      path: path.resolve(__dirname),
      filename: \""$OUTPUTFILE".js\"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
" > webpack.config.js

echo "Creating a shell index.html file 4 u..."
printf "<!DOCTYPE html>
<html>
  <head>
    <meta charset=\"utf-8\">
    <title></title>
    <script type=\"text/javascript\" src=\""$OUTPUTFILE".js\"></script>
    <link rel=\"stylesheet\" href=\"reset.css\">
    <link rel=\"stylesheet\" href=\"main_styles.css\">
  </head>
  <body>
    <div id=\"content\">
      React has failed.
    </div>
  </body>
</html>" > index.html

echo "creating a CSS reset file 4 u..."
printf "/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}" > reset.css

touch main_styles.css

echo
echo "Please paste the following into the 'scripts' hash in package.json:"
echo
echo "\"start\": \"webpack --watch\""
echo
echo
echo
echo "...don't forget the .gitignore (bundle.js, bundle.js.map, node_modules/)..."
echo
echo
echo "...and we're done."
