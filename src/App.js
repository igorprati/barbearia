import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register"
import User from "./Pages/User/User";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact={true} ></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/user' component={User}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
