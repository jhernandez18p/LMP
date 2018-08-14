import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';

import './assets/styles/index.css';
import ScrollToTop from './components/Header/scrollTop';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/configureStore';

ReactGA.initialize('UA-83370429-9');
const history = createHistory();
history.listen((location, action) => {
    ReactGA.set({page:location.pathname});
    ReactGA.pageview(location.pathname);
});

ReactDOM.render((
    <CookiesProvider>
        <Provider store={store}>
            <Router>
                <ScrollToTop>
                    <App/>
                </ScrollToTop>
            </Router>
        </Provider>
    </CookiesProvider>
), document.getElementById('wrapper'));
registerServiceWorker();