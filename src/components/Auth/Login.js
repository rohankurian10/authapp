import "../Styles.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="Login">
      <div className="Logo-Container">
        <h1>LOGIN</h1>
      </div>
      <div className="Input-Container">
        <input placeholder="Username" type="text"></input>
        <input placeholder="Password" type="password"></input>
      </div>
      <div className="Button-Container">
        <div className="Button-Container-div">
          <button>Login</button>
          <p>Forgot Password?</p>
        </div>
        <div className="HR-Container">
          <hr />
        </div>
        <div className="Button-Container-div">
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
    </div>
  );
};

export default Login;
