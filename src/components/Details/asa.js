Махабат, [05.04.2022 18:10]
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { phonesContext } from "../contexts/phoneContext";
import Loading from "../Loading/Loading";
import { Button, Input, Modal } from "antd";
import { List, Avatar } from "antd";
import { authContext } from "../contexts/authContext";
import { LikeOutlined } from "@ant-design/icons";
const Details = () => {
  const { getOnePhone, onePhone, updateComments, updateLikes } =
    useContext(phonesContext);
  const { currentUser } = useContext(authContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createComment, setCreateComment] = useState({
    comment: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  const [activeColor, setActiveColor] = useState("white");
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function save(newComment) {
    let comment = {
      ...newComment,
      name: currentUser,
      id: Date.now(),
    };
    if (!createComment) {
      alert("Fill in");
      return;
    }
    let comments = [...onePhone.comments, comment];
    updateComments(params.id, comments);
    setIsModalVisible(false);
    setCreateComment("");
  }
  function saveLikes(newLike) {
    let like = {
      user: currentUser,
      id: Date.now(),
    };
    let userLikes = onePhone.likes.some((item) => item.user === currentUser);
    if (userLikes) {
      let filteredLikes = onePhone.likes.filter((item) => {
        return item.user !== currentUser;
      });
      updateLikes(params.id, filteredLikes);
    } else {
      let likes = [...onePhone.likes, like];
      updateLikes(params.id, likes);
    }
  }
  function deleteComment(id) {
    let newComments = onePhone.comments.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    updateComments(params.id, newComments);
  }
  useEffect(() => {
    getOnePhone(params.id);
  }, []);
  return onePhone ? (
    <div className="details-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div style={{ width: "50%" }}>
          <img
            width="50%"
            src={
              activeColor === "white"
                ? onePhone.imageWhite
                : activeColor === "black"
                ? onePhone.imageBlack
                : activeColor === "red"
                ? onePhone.imageRed
                : activeColor === "purple"
                ? onePhone.imagePurple
                : null
            }
            alt="Main image"
          />
        </div>
        <div style={{ textAlign: "left", width: "50%" }}>
          <h1>{"Model: " + onePhone.model}</h1>
          <h2>{"Price " + onePhone.price + "$"}</h2>
          <h4 style={{ width: "60%" }}>{onePhone.description}</h4>
          <p style={{ fontSize: "20px" }}>Choose your color</p>
          <div
            style={{
              width: "30vw",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setActiveColor("white")}
              style={{
                backgroundColor: "white",
                width: "5%",
                padding: "5%",
                fontSize: "30px",
                margin: "10px 15px",
              }}
            ></button>
            <button
              onClick={() => setActiveColor("black")}
              style={{
                backgroundColor: "black",
                width: "5%",
                padding: "5%",
                fontSize: "30px",
                border: "none",
                margin: "10px 15px",
              }}
            ></button>
            <button
              onClick={() => setActiveColor("purple")}
              style={{
                backgroundColor: "purple",
                width:
                style={{ marginRight: "20px" }}
                onClick={() => deleteComment(item.id)}
              >
                Delete
              </button>
            </List.Item>
          )}
        />
      </div>
      <>
        <Modal
          footer={null}
          title="Add a comment"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input
            type="text"
            name="comment"
            value={createComment.comment}
            onChange={(e) =>
              setCreateComment({
                ...createComment,
                [e.target.name]: e.target.value,
              })
            }
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",

              5%",
                padding: "5%",
                fontSize: "
3
0px",
                color: "white",
                border: "n
o
ne",
                margin: "10px 15px",
              }
}

            ></button>
            <butt
o
n
              onClick={() => setActiveColo
r
("red")}
              style={{
    
 
           backgroundColor: "red",
                wid
t
h: "5%",
                padding: "5%",
         
 
      fontSize: "30px",
                color: "white",
                border: "none",
 
               margin: "10px 1
5
px",
              }}
            ></button>
     
 
    </div>
          <div>
            {currentUser ? (
      
 
       <>
                <LikeOutlined
              
 
   onClick={() =
>
 save
L
ikes()}
                  sty
l
e={{ fontSize: "30px" }}
        
 
       />
                <span>{onePhone.likes.length}</s
p
an>{" "}
              </>
            ) : (
           
 
  <L
i
nk to="/auth">
               
 
<LikeOutlined
               
 
  on
C
lick={() => saveLikes()}
    
 
             style=
{
{ fontSize: "30px" }
}

                />
    
 
         </Link>
    
 
      
 
)}
          </div>
     
 
    <button
           
 
style={{
    
 
     
 
   backgroundColor: "blue",
              color: "w
h
ite",
              border: "none",
    
 
         padding: "8px 13px",
              marginTop: 
"
20p
x
",
              cursor: "point
e
r",
            
 
 marginRight: "10px",
  
 
         }}
         
 
  onCl
i
ck={() => navigate("/payment")}
          >
            BUY NOW
          </b
u
tton>
          {cur
r
entUser ? (
            <button
              style={{
    
 
           backgroundColor: "blue",
     
 
         
 
color: "white",
                border: "non
e
",
         
 
      padding: "8px 13px",
                m
a
rginTop: "20px",
                cur
s
or: "
p
oin
t
er",
              }}
        
 
     onClick={() => setIsModalVisible(true)}
            >
              Add a comment
            </button
>

      
 
   ) : 
(

            <button
              disabled
   
 
          style={{
 
               backgroundCo
l
or: "grey
"
,
                col
o
r: "white",
                border: "no
n
e",
      
 
         padding
:
 "8px 13px",
             
 
  marginTop: "20px",
                curs
o
r: "pointer",
              }}
 
             onClick={() => set
I
sModalVisi
b
le(true
)
}
            >
              Log in t
o
 leave a comme
n
t
            </button>
          )}
    
 
     <div>
            <h2 style={{ m
a
rginTop: "10px" }}>Read and write com
m
ents</h2>
            <List
             
 
style={{
                border: "1px
 
solid grey",
                width: "70
%
",
                marginTop: "20px
"
,
              }}
              itemLayou
t
="horizontal"
              dataSource
=
{onePhone.comments}
  
 
           re
n
derItem={(item) => (
       
 
        <Lis
t
.Item style={{
 
marginLeft: "5px" }}>
                  <List.Item.Meta
 
 
                  avatar={<Avatar src="https://
j
oeschmoe.io/api/v1/random" />}
                    t
i
tle={<a href="https://ant.design">{item.name}</a>}
               
 
    description={item.comment}
                  />
           
 
      <button