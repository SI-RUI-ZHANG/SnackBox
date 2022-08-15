import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
import App from './App';
import {store, persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import {Elements} from "@stripe/react-stripe-js";
import {stripePromise} from "./utils/stripe/stripe.utils";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider loading={null} store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App/>
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
