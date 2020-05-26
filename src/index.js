import ReactDOM from 'react-dom';
import React from "react";
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';
import {Provider} from "react-redux"
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>{/*Provider метод из react-redux для проброса
                                        store в контекст(доступен глобально для дочерних компонент)
                                        доступен через connect*/}
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
