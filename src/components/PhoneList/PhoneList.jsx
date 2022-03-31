import React, { useContext, useEffect } from "react";
import { phoneContext } from "../../context/phoneContext";
import { List, Button } from "antd";
import { Link } from "react-router-dom";

const PhoneList = () => {
  const { phones, getAllPhones, deleteOnePhone } = useContext(phoneContext);

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="container">
      <List
        itemLayout="horizontal"
        dataSource={phones}
        renderItem={(item) => (
          <List.Item
            extra={
              <img src={item.image} alt="img" width="272px" height="272px" />
            }
          >
            <List.Item.Meta
              title={
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <h2>{item.name}</h2>
                    <h3>{"$" + item.price}</h3>
                  </div>
                </div>
              }
              description={
                <>
                  <div style={{ margin: "0px 10px 0px 0px " }}>{item.desc}</div>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Button
                      onClick={() => deleteOnePhone(item.id)}
                      style={{ margin: "10px 10px 10px 0px" }}
                    >
                      Удалить
                    </Button>
                    <Link to={`/edit/${item.id}`}>
                      <Button style={{ margin: "10px 10px 10px 0px" }}>
                        Изменить
                      </Button>
                    </Link>
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PhoneList;
