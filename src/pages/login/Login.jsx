import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            condimentum vestibulum nunc, ac rutrum dui dignissim a. Praesent
            massa nulla, congue consectetur interdum sed, rhoncus vel dolor.
            Donec dictum, sem.
          </p>
          <span>Dont have an account ?</span>
          <button>Sign Up</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Enter your email..." />
            <input type="password" placeholder="Enter your password..." />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
