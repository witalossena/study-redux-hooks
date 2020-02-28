import React, { useState } from 'react';
import './App.scss';
import Users from './user';
import { Provider } from 'react-redux';

import store from './store';

const App = () => {
  const [users, setUSers] = useState([
    { id: 1, name: 'witalo' },
    { id: 2, name: 'marcelo' },
    { id: 3, name: 'carlos' },
  ])
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
