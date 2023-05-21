import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAfter from "../../components/NavbarAfter1/NavbarAfter1";
import Pointers from "../../components/pointers/Pointers";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [profileFields, setProfileFields] = useState({});
  const fields = [
    { name: "Username", key: "username" },
    { name: "Email", key: "email" },
    { name: "First name", key: "first_name" },
    { name: "Last name", key: "last_name" },
    { name: "Bio", key: "bio" },
  ];

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (response.status === 200 && response.data.status === "ok") {
        setProfileFields(response.data.data.profile);
      } else {
        alert("something went wront");
      }

      console.log(response.data);
      console.log(profileFields);
    } catch (error) {
      console.error(error);
      alert("something went wrong");
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <NavbarAfter />
      <Pointers />
      <div className="profile">
        <h1> Profile </h1>
        <div className="profile-container">
          <div className="profile-left">
            <table>
              {fields.map(({ key, name }) => {
                return (
                  <tr className="table-row" key={key}>
                    <th className="table-detail-left">{name}</th>
                    <td className="table-detail-right">{profileFields[key]}</td>
                  </tr>
                );
              })}
            </table>
          </div>

          
            <div
              className="profile-img"
              style={{
                backgroundImage:
                  profileFields && profileFields.dp_id
                    ? `url('${process.env.REACT_APP_API_URL}/picture/${profileFields.dp_id}')`
                    : `url("${process.env.PUBLIC_URL + "/Card1.png"}")`,
                backgroundSize: "cover",
              }}
            ></div>
          
        </div>
        <div className="profile-edit-button">
          <button
            onClick={() => {
              navigate("/ProfileEdit");
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
