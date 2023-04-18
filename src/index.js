import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {Connected} from "./components/Container";
import store from "./redux/Store";
import {Provider} from "react-redux";
import {Theme} from "./redux/Objects";
import {Load} from "./components/Load";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Load/>
      <Provider store={store}>
          <Connected />
      </Provider>
  </React.StrictMode>
);

export function setDarkTheme(darkTheme) {
    document.getElementsByTagName("html").item(0).setAttribute("style", Theme(darkTheme));
}
const loadInterval = setInterval(() => {
    if (window.getComputedStyle(document.getElementById('load')).opacity === "0") {
        document.getElementById("load").remove();
        clearLoadInterval();
    }
}, 100);
const clearLoadInterval = () => clearInterval(loadInterval);
setDarkTheme(store.getState().darkTheme)

reportWebVitals();
