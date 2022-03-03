import "../Styles.css";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <div className="Router">
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
      </Switch>
    </div>
  );
};

export default Router;
