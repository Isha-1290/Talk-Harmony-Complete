import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { GrShareOption } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";
import "./Card.css";
import { useState } from 'react';


const Card = ({ props }) => {
  const [Text, setText]=React.useState('');
  const handleText=(event)=>{
    setText(event.target.value);
  }
  const handleSub = (event) => {
    event.preventDefault();

    setText('');
    // alert(email + ' ' + password);
  };
  console.log(props)
  const [heart, setheart] = useState(0);
  function handleClick() {
    if (heart === 0) {
      setheart(1);
    }
    else if (heart === 1) {
      setheart(0);
    }
  }
  return (
    <div className="card">
      <div className="card-description">
        <div className="cardo">
          <div className="dp" style={{
            backgroundImage:
              props.dp_id ? `url('${process.env.REACT_APP_API_URL}/picture/${props.dp_id}')` : `url("${process.env.PUBLIC_URL + '/Card1.png'}")`,
            backgroundSize: "cover"
          }}></div>
          <div className="name" style={{ margin: "0 10px" }}>
            <strong>{props.username}</strong>
          </div>
        </div>
        <div className="timing">{new Date(props.date).toDateString()}</div>
      </div>
      <div className="post-container">
        <p>{props.text}</p>
      </div>
      <div className="sharing">
      <form className="sharing-form" onSubmit={handleSub}>
        <input
          id="name"
          type="text"
          className="sharing-obj"
          placeholder={"comment here"}
          value={Text}
          onChange={handleText}
          />
      </form>
        {/* <textarea
          className="sharing-obj"
          placeholder={"comment here"}
        ></textarea> */}
        {heart === 1 && <AiFillHeart className="sharing-obj" onClick={() => { handleClick() }} />}
        {heart === 0 && <AiOutlineHeart className="sharing-obj" onClick={() => { handleClick() }} />}
        <BiSave className="sharing-obj" />
        <GrShareOption className="sharing-obj" />
        <FiTrash2 className="sharing-obj" />
      </div>
    </div>
  );
};

export default Card;
