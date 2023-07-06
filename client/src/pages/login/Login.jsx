
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Typed from 'react-typed';
import "./login.scss"

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })
  const [err, setErr] = useState(null)
  const [loginErr, setLoginErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs);
      console.log("testing login");
      window.location.href="/";
    } catch (err) {
      console.log(err.response.data)
      setLoginErr(err.response.data)
      setErr(err.response.data)
    }

  };

  return (
    <motion.div className="login">
      <motion.div className="card"
      >
        <motion.div className="left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <img src="https://i.imgur.com/w4lLPlJ.png" alt="" />
          <Typed
            strings={[
              "Embrace the Augmented Future.<br>Connect with the World."
            ]}
            className={"rt-subheader"}
            typeSpeed={25}
            backSpeed={50}
          />
          <span>Do you require an account?</span>
          <Link to="/register">
            <button>REGISTER</button>
          </Link>
        </motion.div>
        <motion.div className="right"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h1>ENTER CREDENTIALS</h1>
          <form action="" onSubmit={handleLogin}>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            <span>{loginErr}</span>
            <button onClick={handleLogin}>LOGIN</button>
          </form>
        </motion.div>
      </motion.div>
      <script src="/script.js"></script>
    </motion.div>
  )
}

export default Login
