
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { useHistory } from "react-router-dom";
import "./login.scss"

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })
  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data)
    }

  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <img src="https://i.imgur.com/w4lLPlJ.png" alt="" />
          <p>
            Embrace the Augmented Future. Connect with the World.
          </p>
          <span>Do you require an account?</span>
          <Link to="/register">
            <button>REGISTER</button>
          </Link>
        </div>
        <div className="right">
          <h1>ENTER CREDENTIALS</h1>
          <form action="" onSubmit={handleLogin}>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            {/* {err & err} */}
            <button onClick={handleLogin}>LOGIN</button>
          </form>
        </div>
      </div>
      <script src="/script.js"></script>
    </div>
  )
}

export default Login
