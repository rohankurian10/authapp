import "../Styles.css";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className="Register">
      <div className="Logo-Container">
        <h1>REGISTER</h1>
      </div>
      <div className="Input-Container">
        <input placeholder="Name" type="text"></input>
        <input placeholder="Username" type="text"></input>
        <input placeholder="Email" type="text"></input>
        <input placeholder="Password" type="password"></input>
        <input placeholder="Confirm Password" type="password"></input>
      </div>
      <div className="Button-Container">
        <div className="Button-Container-div">
          <button>Register</button>
        </div>
        <div className="HR-Container">
          <hr />
        </div>
        <div className="Button-Container-div">
          <button
            className="Button"
            onClick={() => {
              history.push("/login");
            }}
          >
            Not Registered? Registered
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
