import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from '../store';
import Dashboard from './Dashboard';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

export default App;
