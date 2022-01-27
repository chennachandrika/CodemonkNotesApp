import ReactDOM from "react-dom";
import store from "./store/configStore";
import { Provider } from "react-redux";
import App from "./App";

const configStore = store();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={configStore}>
    <App />
  </Provider>,
  rootElement
);
