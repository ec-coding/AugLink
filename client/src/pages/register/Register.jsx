
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.scss"

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  })
  const [err, setErr] = useState(null)


  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const handleClick = async (e) => {
    // preventDefault stops the page from refreshing
    e.preventDefault()

    try {
      await axios.post("http://localhost:5050/api/auth/register", inputs)
    } catch (err) {
      setErr(err.response.data)
    }
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <img src="https://i.imgur.com/w4lLPlJ.png" alt="" />
          <p>
            Embrace the Augmented Future. Connect with the World.
          </p>
          <span>Do you have an existing account?</span>
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
        </div>
        <div className="right">
          <h1>REGISTER</h1>
          <form action="">
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            <input type="text" placeholder="Name" name="name" onChange={handleChange} />
            {err && err}
            <button onClick={handleClick} >SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
