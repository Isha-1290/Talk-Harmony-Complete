import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAfter from "../../components/NavbarAfter1/NavbarAfter1";
import Pointers from "../../components/pointers/Pointers";
import "./ProfileEdit.css";
import axios from "axios";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [profileFields, setProfileFields] = useState({});
  const [editProfileFields, setEditProfileFields] = useState({});
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
    } catch (error) {
      console.error(error);
      alert("something went wrong");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file, file.name);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/picture`,
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);

      if (response.status === 200 && response.data.status === "ok") {
        navigate("/Profile");
      } else {
        alert("Failed to upload image!");
      }
    } catch (error) {
      console.error(error);
      alert("something went wrong");
    }
  };

  const handleSubmit = async (e) => {
    console.log(editProfileFields);
    e.preventDefault();

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/profile`,
      editProfileFields,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    if (response.status === 200 && response.data.status === "ok") {
      navigate("/Profile");
    } else {
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
      <div className="profile-edit">
        <h1> Profile </h1>
        <div className="profile-container-edit">
          <div className="profile-left-edit">
            <form className="sdj">
              <table>
                {fields.map(({ key, name }) => {
                  return (
                    <tr className="table-row" key={key}>
                      <th className="table-detail-left">{name}</th>
                      <td className="table-detail-right">
                        <input
                          name={key}
                          placeholder={profileFields[key]}
                          type="text"
                          onChange={(e) => {
                            setEditProfileFields({
                              ...editProfileFields,
                              [key]: e.target.value,
                            });
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </table>
            </form>
          </div>

          <div className="profile-right-edit">
            <div
              className="profile-img-edit"
              style={{
                backgroundImage:
                  profileFields && profileFields.dp_id
                    ? `url('${process.env.REACT_APP_API_URL}/picture/${profileFields.dp_id}')`
                    : `url("${process.env.PUBLIC_URL + "/Card1.png"}")`,
                backgroundSize: "cover",
              }}
            ></div>
            
              <div className="profile-img-button-edit">
              <label for="file"></label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".png,.jpg,.jpeg"
                onChange={handleImageUpload}
              />
              </div>
            
            {/*<div>
               <button
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Upload
              </button> 
            </div>
            */}
          </div>
        </div>
        <div className="profile-edit-button-edit">
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
