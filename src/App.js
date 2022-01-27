import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./styles.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default App;
