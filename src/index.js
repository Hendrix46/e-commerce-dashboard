import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import RootReducer from "./redux/reducers/RootReducer";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {BrowserRouter as Router} from "react-router-dom";

const store= createStore(RootReducer,
    compose(applyMiddleware(thunk)
    ));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
