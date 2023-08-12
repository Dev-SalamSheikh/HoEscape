import { NavLink } from "react-router-dom";
import "../styles/Login/login.scss";

const Login = () => {
  return (
    <div className="loginPage">
      {/* logo */}
      <div className="logo">
        <img src="./images/login-logo.png" alt="logo" />
      </div>

      {/* Form */}
      <div className="login_form">
        {/* Login Box */}
        <div className="form_box">
          {/* heading */}
          <div className="heading">
            <h1 className="jakarta">Welcome</h1>
          </div>

          {/* form */}
          <form>
            {/* email */}
            <div className="box">
              <label htmlFor="mail" className="jakarta">
                Email
              </label>
              <input
                type="email"
                id="mail"
                placeholder="Connie"
                className="jakarta"
              />
            </div>

            {/* password */}
            <div className="box">
              <label htmlFor="password" className="jakarta">
                Password
              </label>
              <input type="password" placeholder="Murray" className="jakarta" />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "35px",
              }}
            >
              <NavLink to="/">
                <button className="jakarta">Login</button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
