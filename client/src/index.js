import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//STEP: 
// The entire react application is going to be inside this component 
// And we are going to hook that component on to the root div (Available in index.html)
ReactDOM.render(<App />,document.getElementById('root'));