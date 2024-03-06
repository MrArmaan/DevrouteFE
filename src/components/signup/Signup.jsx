import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form className="signup-form">
        <input placeholder="username" type="text" value={username} required />

        <input placeholder="email" type="email" value={email} required />

        <input
          placeholder="password"
          type="password"
          value={password}
          required
        />

        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
