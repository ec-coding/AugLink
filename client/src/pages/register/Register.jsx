import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Typed from 'react-typed';
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import "./register.scss"

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  })
  const [err, setErr] = useState(null)

  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const handleClick = async (e) => {
    // preventDefault stops the page from refreshing
    e.preventDefault()

    try {
      await axios.post("http://localhost:5050/api/auth/register", inputs);
      navigate("/login")
    } catch (err) {
      setErr(err.response.data)
    }
  }

  return (
    <div className="register">
      <div className="card">
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
          <span>Do you have an existing account?</span>
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
        </motion.div>
        <motion.div className="right"
        >
          <h1>REGISTER</h1>
          <form action="">
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            <input type="text" placeholder="Name" name="name" onChange={handleChange} />
            {err && err}
            <button onClick={handleClick} >SUBMIT</button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Register
