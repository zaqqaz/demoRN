import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";
import { Navigator } from "demoRn/src/screens/Navigator";

const rootReducer = () => ({});

const store = createStore(rootReducer, compose(applyMiddleware(ThunkMiddleware)));

export class DemoRnApp extends React.PureComponent {
  public render() {
    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    );
  }
}
