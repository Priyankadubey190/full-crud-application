import { useState } from "react";
import style from "./login.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  //console.log("inside login location",location)
  const comingfrom = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();

  const auth = useSelector((state) => state);

  console.log("logtoken ", auth);

  console.log("comingfrom",comingfrom)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
        // console.log("r--", r);
        alert("You are successfully login");
        if (r.type === "LOGIN_SUCCESS") {

            
          navigate(comingfrom, { replace: true });
        }
      });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={style.container}>
      <div>
        <input type="text" placeholder="Enter your name" />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className={style.btn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
