import { Image, Spin } from "antd";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { phoneContext } from "../../context/phoneContext";
import "./Deatails.css";

const Details = () => {
  const { editsPhone, editPhone } = useContext(phoneContext);
  const params = useParams();
  useEffect(() => {
    editsPhone(params.id);
  }, []);

  return editPhone ? (
    <div className="detka containers">
      <div>
        <Image className="imag" src={editPhone.image} />
      </div>
      <div className="details">
        <h1 className="details-min">{editPhone.name}</h1>
        <h3 className="details-min">{editPhone.desc}</h3>
        <h1 className="details-min">{"$" + editPhone.price}</h1>
      </div>
    </div>
  ) : (
    <div className="example">
      <Spin />
    </div>
  );
};

export default Details;
