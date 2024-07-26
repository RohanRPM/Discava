import signupImg from "../assets/Images/signup.webp";
import Template from "../components/core/Auth/Template";

function Signup() {
  return (
    <Template
      title="Join Discava Today"
      description1="Unlock access to cutting-edge solutions and resources for your business."
      description2="Sign up to start transforming your business with our innovative tools."
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;
