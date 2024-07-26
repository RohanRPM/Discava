import loginImg from "../assets/Images/login.webp";
import Template from "../components/core/Auth/Template";

function Login() {
  return (
    <Template
      title="Welcome to Discava"
      description1="Discover a world of innovative solutions for your business needs."
      description2="Log in to explore our extensive range of tools and resources."
      image={loginImg}
      formType="login"
    />
  );
}

export default Login;
