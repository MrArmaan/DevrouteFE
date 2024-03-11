import "./Userdash.css";

const Userdash = () => {
  return (
    <div className="userdash-wrapper">
      <div className="userimage-wrapper">
        <img src="" alt="user profile image" />
        <button type="submit">Edit</button>
      </div>
      <form className="userdash-form" title="First Name Surname">
        <input placeholder="update name" />
        <input placeholder="update email" />
        <input placeholder="update address" />
        <input placeholder="update phone no" />
        <input placeholder="update password" />
        <button type="submit">Submit</button>
      </form>
      <div className="userdash-footer">
        <button type="submit">DELETE ACC</button>
      </div>
    </div>
  );
};

export default Userdash;

// const React = require("react");
// const { useEffect } = require("react");
// const { withRouter } = require("react-router-dom");

// require("./Userdash.css");

// const Userdash = ({ history }) => {
//   useEffect(() => {
//     // Check if the user is logged in
//     const isLoggedIn = localStorage.getItem("isLoggedIn");

//     if (!isLoggedIn) {
//       // Redirect to login page if not logged in
//       history.push("/login");
//     }
//   }, [history]);

//   return (
//     <div className="userdash-wrapper">
//       <div className="userimage-wrapper">
//         <img src="" alt="user profile image" />
//         <button type="submit">Edit</button>
//       </div>
//       <form className="userdash-form" title="First Name Surname">
//         <input placeholder="update name" />
//         <input placeholder="update email" />
//         <input placeholder="update address" />
//         <input placeholder="update phone no" />
//         <input placeholder="update password" />
//         <button type="submit">Submit</button>
//       </form>
//       <div className="userdash-footer">
//         <button type="submit">DELETE ACC</button>
//       </div>
//     </div>
//   );
// };

// module.exports = withRouter(Userdash);
