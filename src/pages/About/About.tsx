import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="header">
        <Link to="/" className="logo">
          SAV
        </Link>
        <div className="links">
          <Link className="active" to="/">
            <button className="button">Home</button>
          </Link>
          <Link to="/contact">
            {" "}
            <button className="button">Contact</button>
          </Link>
          <Link to="/about">
            {" "}
            <button className="button">About</button>
          </Link>
        </div>
      </div>
      <div className="center">
        <h1>Coming Soon...</h1>
        <h2>About Page 🚀</h2>
      </div>
    </>
  );
};

export default About;
