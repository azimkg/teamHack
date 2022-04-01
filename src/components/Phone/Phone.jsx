import React, { useContext, useEffect, useState } from "react";
import { phoneContext } from "../../context/phoneContext";
import { Card, Input, Pagination } from "antd";
import "./Phone.css";
import {
  EllipsisOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link, useSearchParams } from "react-router-dom";

const { Meta } = Card;

const Phone = () => {
  const { phones, getAllPhones, countPhone } = useContext(phoneContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(4);
  useEffect(() => {
    getAllPhones();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
    });
  }, [search, page, limit]);
  useEffect(() => {
    getAllPhones();
  }, [searchParams]);

  return (
    <div className="list-phones">
      <div className="inp-search">
        <Input.Search
          placeholder="Search..."
          style={{ width: "400px", height: "40px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="classes">
        {phones.map((item) => (
          <Card
            className="card-phone"
            style={{
              width: 300,
              margin: "0px 20px",
              boxShadow: "0px 0px 4px",
            }}
            cover={
              <img alt="example" style={{ height: "300px" }} src={item.image} />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <ShoppingCartOutlined
                key="shopping"
                style={{ fontSize: "22px" }}
              />,
              <Link key="ellipsis" to={`/details/${item.id}`}>
                <EllipsisOutlined
                  style={{ color: "black", fontSize: "22px" }}
                />
              </Link>,
            ]}
          >
            <Meta title={item.name} description={<h2>{"$" + item.price}</h2>} />
          </Card>
        ))}
      </div>
      <Pagination
        style={{ marginTop: "50px", textAlign: "center" }}
        total={+countPhone}
        current={+page}
        pageSize={+limit}
        defaultCurrent={1}
        onChange={(page, limit) => {
          setPage(page);
          setLimit(limit);
        }}
      />
    </div>
  );
};

export default Phone;
