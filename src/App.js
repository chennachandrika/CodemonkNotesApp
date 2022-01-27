import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotesAppPage from "./components/NotesAppPage";
import "./styles.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/notes-app" component={NotesAppPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
