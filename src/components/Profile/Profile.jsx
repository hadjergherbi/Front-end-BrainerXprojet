import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  
  // Initialize refs with null, set values when user data is available
  const LastNameRef = useRef(null);
  const FirstNameRef = useRef(null);
  const LastPasswordRef = useRef(null);
  const NewPasswordRef = useRef(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) return;

        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    if (user && popUp) {
      if (FirstNameRef.current) {
        FirstNameRef.current.value = user.firstName;
      }
      if (LastNameRef.current) {
        LastNameRef.current.value = user.lastName;
      }
    }
  }, [user, popUp]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      userFirstName: FirstNameRef.current.value,
      userLastName: LastNameRef.current.value,
      lastUserPassword: LastPasswordRef.current.value,
      userPassword: NewPasswordRef.current.value
    };

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/updateProfile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      
      setUser(response.data.user);
      setPopUp(false);
      
      LastPasswordRef.current.value = '';
      NewPasswordRef.current.value = '';
      
    } catch (error) {
     
      alert(error.response?.data?.message || "Failed to update profile");
    }
  };

  if (!user) {
    return <p>Loading user profile...</p>;
  }

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="ProfileContainer">
        <p id="ProfileTitle">Welcome back {user.firstName}</p>
        <div className="ContainerInformation">
          <div className="Informationprofile">
            <p>First Name :</p>
            <input type="text" placeholder={user.firstName} readOnly />
          </div>

          <div className="Informationprofile">
            <p>Last Name :</p>
            <input type="text" placeholder={user.lastName} readOnly />
          </div>
          
          <div className="Informationprofile">
            <p>Email :</p>
            <input type="text" placeholder={user.email} readOnly />
          </div>
        </div>
        
        <div id="buttonsprofil">
          <button className="ButtonsPRofile" onClick={() => setPopUp(true)}>
            Edit
          </button>
          <button className="ButtonsPRofile" onClick={() => logOut()}>
            Log out
          </button>
        </div>
      </div>

      {popUp && (
        <div className="popup-overlay" onClick={() => setPopUp(false)}>
          <div className="pop" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setPopUp(false)}>
              ×
            </button>
            
            <p id="ProfileTitle">Edit Profile</p>
            
            <form onSubmit={handleFormSubmit}>
              <div className="ContainerInformation">
                <div className="Informationprofile">
                  <p>First Name :</p>
                  <input 
                    ref={FirstNameRef} 
                    type="text" 
                    placeholder={user.firstName}
                    required 
                  />
                </div>

                <div className="Informationprofile">
                  <p>Last Name :</p>
                  <input 
                    ref={LastNameRef} 
                    type="text" 
                    placeholder={user.lastName}
                    required 
                  />
                </div>
                
                <div className="Informationprofile">
                  <p>Current Password :</p>
                  <input 
                    ref={LastPasswordRef}
                    type="password" 
                    placeholder="Enter current password"
                    required
                  />
                </div>
                
                <div className="Informationprofile">
                  <p>New Password :</p>
                  <input 
                    ref={NewPasswordRef}
                    type="password" 
                    placeholder="Enter new password"
                     
                  />
                </div>
              </div>
              
              <div id="buttonsprofil">
                <button type="submit" className="ButtonsPRofile">
                  Save Changes
                </button>
                <button 
                  type="button" 
                  className="ButtonsPRofile" 
                  onClick={() => setPopUp(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;