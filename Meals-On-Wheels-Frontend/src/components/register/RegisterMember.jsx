import { useNavigate } from "react-router-dom";
import "./register.css";
import { useState } from "react";

const RegisterMember = ({ onHandleRegister }) => {
  const navigate = useNavigate();

  // Updated state to include difficulties and disease
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    difficulties: "",
    disease: ""
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setPasswordsMatch(true);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(formData.password === e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!passwordsMatch) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    console.log("Form data submitted:", formData);
    onHandleRegister(formData);

    alert("Register successful, Please Login with your credentials!");
    navigate("/login");
  };

  return (
    <div className="violet-form">
      <h3>
        Register For <span className="text-violet">Member</span>
      </h3>
      <h5>
        This form is for Member 👉 to get support for meals daily 👈!
      </h5>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Enter your name.."
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email.."
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter Password.."
          required
        />
        <input
          type="password"
          name="conPassword"
          placeholder="Confirm Password.."
          onChange={handleConfirmPasswordChange}
          style={{
            borderColor: passwordsMatch ? "" : "red",
          }}
          required
        />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address..."
          required
        />
        <textarea
          name="difficulties"
          value={formData.difficulties}
          onChange={handleInputChange}
          placeholder="About Difficulties..."
          required
        />
        <textarea
          name="disease"
          value={formData.disease}
          onChange={handleInputChange}
          placeholder="About Diseases Information..."
          required
        />
        <button className="btn secondary form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterMember;
