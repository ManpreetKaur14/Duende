import React from "react";
import  "../../styles/SignIn.css"
import { Link } from "react-router-dom";
const SignUpForm = ({ toggleModal }) => {
  // const initialValues = { username: "", email: "", password: "" };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.username) {
  //     errors.username = "Username already taken, please try again.";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email alreagy registered, please Sign In.";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password to short, minimum 8 characters.";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password did not match.";
  //   }
  //   return errors;
  // };
  return (
    <div className="signup right-section">
      <div className="right-inner-section">
        <h1 className="signup-title">Sign Up</h1>
        <form autoComplete="off" className="w-100">
          <div>
            <input
              type="text"
              placeholder="Enter  Username"
              className="signUp-input"
              name="username"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="manpreetkaur0699@gmail.com"
              className="signUp-input"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="signUp-input"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Re-Enter Password"
              className="signUp-input"
            />
          </div>
        </form>
        <button
          type="submit"
          value="Sign Up"
          onClick={toggleModal}
          className="signUp-btn"
        >
          Sign Up
        </button>
        <p className="forgot-pass">Forgot Password</p>
        <p className="if-already-sigup">
          Having an account?{" "}
          <Link to="signin" className="sign-btn">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
