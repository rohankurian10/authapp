import "../Styles.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="Login">
      <div className="Login-Logo-Container">
        <h1>LOGIN</h1>
      </div>
      <div className="Login-Input-Container">
        <input placeholder="Username" type="text"></input>
        <input placeholder="Password" type="password"></input>
      </div>
      <div className="Login-Button-Container">
        <button>Login</button>
        <p>Forgot Password?</p>
        <hr />
        <button
          className="Button"
          onClick={() => {
            history.push("/register");
          }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Login;
