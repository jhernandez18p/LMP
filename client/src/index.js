import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

// Assets
import './index.css';
import App from './App';


// Apps
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';

// Redux
import CarReducer from './reducers/CarReducer';


ReactGA.initialize('UA-83370429-9');

const store = createStore(CarReducer);
const history = createHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});


ReactDOM.render((
    <Router>
        <CookiesProvider>
            <Provider store={ store }>
                <App />
            </Provider>
        </CookiesProvider>
    </Router>
), document.getElementById('wrapper'));
registerServiceWorker();
