import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../../utils/fetch";
import "./Userdash.css";

const Userdash = ({ userId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state ? location.state.userData : {};

  const [userDetails, setUserDetails] = useState({
    name: "",
    photo: "",
    email: "",
    skills: [],
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    postcode: "",
    country: "",
    codingExperience: 0,
    designExperience: 0,
    additionalDetails: "",
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserDetails(userId);
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserDetails({
        ...userDetails,
        photo: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async () => {
    await updateUserDetails(userId, userDetails);
    setEditMode(false);
    navigate("/Userdashboard");
  };

  return (
    <div className="container">
      <div className="user-dashboard">
        <div className="left-panel">
          <div className="user-info">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={!editMode}
            />
            <img src={userDetails.photo} alt="User" className="user-photo" />
            <h2 className="user-name">{userDetails.name}</h2>
            <p className="user-email">{userDetails.email}</p>
            {editMode && (
              <div className="user-skills">
                <h3>Skills:</h3>
                <input
                  type="text"
                  name="skills"
                  value={userDetails.skills.join(", ")}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        </div>
        <div className="right-panel">
          <div className="middle-panel">
            <h3>Phone Number:</h3>
            {editMode ? (
              <input
                type="text"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userDetails.phoneNumber}</p>
            )}
            <h3>Address:</h3>
            <input
              type="text"
              name="addressLine1"
              value={userDetails.addressLine1}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <input
              type="text"
              name="addressLine2"
              value={userDetails.addressLine2}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <input
              type="text"
              name="addressLine3"
              value={userDetails.addressLine3}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <input
              type="text"
              name="postcode"
              value={userDetails.postcode}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <input
              type="text"
              name="country"
              value={userDetails.country}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
          <div className="experience-details">
            <h3>Experience:</h3>
            <p>Coding: {userDetails.codingExperience} years</p>
            <p>Design: {userDetails.designExperience} years</p>
            <h3>Additional Details:</h3>
            {editMode ? (
              <textarea
                name="additionalDetails"
                value={userDetails.additionalDetails}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userDetails.additionalDetails}</p>
            )}
          </div>
        </div>
      </div>
      <div className="edit-button">
        {editMode ? (
          <button onClick={handleUpdate}>Save Changes</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit Details</button>
        )}
      </div>
    </div>
  );
};

export default Userdash;
