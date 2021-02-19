import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import Routes from './router';

import EstiloGlobal from './styles/reset';

const App = () => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <EstiloGlobal />
        <Routes />
      </PersistGate>
    </Provider>
  </>
);

export default App;
