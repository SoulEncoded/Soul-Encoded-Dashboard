import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore({repos: []});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>yo</div>
      </Provider>
    );
  }
}

export default App;
