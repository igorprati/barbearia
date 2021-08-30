import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
