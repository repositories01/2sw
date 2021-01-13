import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';

import GlobalStyle from './assets/globalStyle/global';

import HookProvider from './hooks/index';
import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <HookProvider>
      <Routes />
    </HookProvider>
    <GlobalStyle />
  </Provider>
);

export default App;
