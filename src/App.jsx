import "./App.css";

function App() {
  return (
    <nav>
      <div className="navbar-left">
        <ul>
          <li>Jobs</li>
          <li>Log In</li>
          <li>Sign Up</li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="profile-tab">{/* profile pic */}</div>
      </div>
    </nav>
  );
}

export default App;
