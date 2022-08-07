import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Props } from "../../type";
import "./new.scss";

const initialFile = {
  file: ""
}

const New = ({ inputs, title }: Props) => {
  const [file, setFile] = useState<Blob | undefined>();

  const handleFileChange = (e:React.ChangeEvent<any>):void => {
    e.preventDefault();
    setFile(e.target.files[0])
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="image"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <FontAwesomeIcon icon={faUpload} className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
              {inputs.map((input) => (
                <div key={input.id} className="formInput">
                  <label htmlFor={input.label}>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
