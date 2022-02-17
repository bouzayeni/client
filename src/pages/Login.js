import { useEffect } from "react";
import "../pages/pages.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    errors: userErrors,
    isAuth,
    role,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuth && role == "user") navigate("/Profile");
    else if (isAuth && role === "admin") navigate("/Dashboard");
  }, []);
  const {
    register: loginInfo,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userInfo = (data) => {
    dispatch(loginUser({ data, navigate }));
  };

  return (
    <div className="container">
      <div className="title"></div>
      <div className="content">
        <form onSubmit={handleSubmit(userInfo)}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Email</span>
              <input
                placeholder="Enter your email"
                type="text"
                {...loginInfo("email", {
                  required: true,
                })}
              />
            </div>
            <br/>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                placeholder="Enter your password"
                type="password"
                {...loginInfo("password", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="login" />
            <h3>{userErrors && userErrors}</h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;