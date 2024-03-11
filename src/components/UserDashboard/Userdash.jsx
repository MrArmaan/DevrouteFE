import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../../utils/fetch";
import "./Userdash.css";

const Userdash = ({ userId }) => {
  const [userData, setUserData] = useState({
    name: "",
    photo: "",
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserDetails(userId);
      setUserData(data);
    };

    fetchData();
  }, [userId]);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserData({
        ...userData,
        photo: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async () => {
    await updateUserDetails(userId, userData);
    setEditMode(false);
    navigate("/user-dashboard");
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
            <img src={userData.photo} alt="User" className="user-photo" />
            <h2 className="user-name">{userData.name}</h2>
            {editMode && (
              <div className="user-skills">
                <h3>Skills:</h3>
                <input
                  type="text"
                  name="skills"
                  value={userData.skills.join(", ")}
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
                value={userData.phoneNumber}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.phoneNumber}</p>
            )}
            <h3>Address:</h3>
            <input
              type="text"
              name="addressLine1"
              value={userData.addressLine1}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <input
              type="text"
              name="addressLine2"
              value={userData.addressLine2}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <input
              type="text"
              name="addressLine3"
              value={userData.addressLine3}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <input
              type="text"
              name="postcode"
              value={userData.postcode}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <input
              type="text"
              name="country"
              value={userData.country}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
          <div className="experience-details">
            <h3>Experience:</h3>
            <p>Coding: {userData.codingExperience} years</p>
            <p>Design: {userData.designExperience} years</p>
            <h3>Additional Details:</h3>
            {editMode ? (
              <textarea
                name="additionalDetails"
                value={userData.additionalDetails}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.additionalDetails}</p>
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
