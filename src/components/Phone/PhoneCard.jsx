import React, { useContext, useState } from "react";
import { cartContext } from "../../context/cartCorntext";
import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Badge, Card } from "antd";
import { followContext } from "../../context/followContext";
const { Meta } = Card;

const PhoneCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const { addProductToFollow, checkItemInFollow } = useContext(followContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const [like, setLike] = useState(checkItemInFollow(item.id));

  return (
    <div className="classes">
      <Badge.Ribbon text="Best" color="red">
        <Card
          key={item.id}
          className="card-phone"
          style={{
            width: 300,
            height: 400,
            margin: "0px 20px",
            boxShadow: "0px 0px 2px",
          }}
          cover={
            <img alt="example" style={{ height: "230px" }} src={item.image} />
          }
          actions={[
            <HeartOutlined
              key="icon-heart"
              onClick={() => {
                addProductToFollow(item);
                setLike(checkItemInFollow(item.id));
              }}
              style={{
                fontSize: "25px",
                cursor: "pointer",
                color: like ? "red" : "grey",
              }}
            />,
            <ShoppingCartOutlined
              key="icon-cart"
              onClick={() => {
                addProductToCart(item);
                setCheckItem(checkItemInCart(item.id));
                console.log(item.id);
              }}
              style={{
                fontSize: "25px",
                cursor: "pointer",
                color: checkItem ? "red" : "black",
              }}
            />,
            <Link key="ellipsis" to={`/details/${item.id}`}>
              <EllipsisOutlined style={{ color: "black", fontSize: "22px" }} />
            </Link>,
          ]}
        >
          <Meta title={item.name} description={<h2>{"$" + item.price}</h2>} />
        </Card>
      </Badge.Ribbon>
    </div>
  );
};

export default PhoneCard;
