import { Form, Input } from "antd";
import React, { useState } from "react";
import { Checkbox } from "antd";

import "./Buy.css";
import { Link, useNavigate } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";

const Buy = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    navigate("/cart");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className="buy">
      <div className="buy-block">
        <div className="buy-card">
          <h2>Банковская карта</h2>
          <h4>MasterCard, Maestro, Visa</h4>
        </div>
        <div className="buy-input">
          <Form layout="vertical">
            <Form.Item name="number" label="Банковская карта">
              <Input placeholder="" />
            </Form.Item>
          </Form>
        </div>

        <div className="form-cod">
          <Form layout="vertical ">
            <Form.Item name="number" label="Срок действия">
              <div className="form-data">
                <Input placeholder="MM" type="number" />

                <Input placeholder="ГГ" type="number" />
              </div>
            </Form.Item>
          </Form>

          <Form layout="vertical" className="form-kod">
            <Form.Item name="number" label="Код">
              <Input placeholder="CVC" type="number" />
            </Form.Item>
          </Form>
        </div>
        <div className="form-group">
          <Checkbox onChange={onChange}>Запомнить мою карту</Checkbox>
        </div>
        <Link to="/success">
          <button className="form-btn" onClick={showModal}>
            Оплатить
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Buy;
