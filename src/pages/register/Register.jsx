import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Email..." />
            <input type="text" placeholder="Username..." />
            <input type="password" placeholder="Password..." />
            <input type="text" placeholder="Full name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            condimentum vestibulum nunc, ac rutrum dui dignissim a. Praesent
            massa nulla, congue consectetur interdum sed, rhoncus vel dolor.
            Donec dictum, sem.
          </p>
          <span>Do you already have an account ?</span>
          <Link to={"/login"}>
            <button>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
