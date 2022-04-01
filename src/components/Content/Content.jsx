import React from "react";
import "./Content.css";
import { Carousel } from "antd";
const contentStyle = {
  maxWidth: "100%",
  width: "100%",
  margin: "auto",

  // lineHeight: '160px',
};

const Content = () => {
  return (
    <>
      <div className="container">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img src="https://www.samsungstore.kg/files/media/11/11266.jpg" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src="https://www.samsungstore.kg/files/media/10/10544.jpg" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src="https://www.samsungstore.kg/files/media/10/10542.jpg" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src="https://www.samsungstore.kg/files/media/9/9521.png" />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src="https://www.samsungstore.kg/files/media/9/9417.png" />
            </h3>
          </div>
        </Carousel>

        {/* <div className="aaa"> */}
        <img
          className="img-content"
          src="https://www.samsungstore.kg/files/media/10/10865.jpg"
        />
        <img
          className="img-content"
          src="https://www.samsungstore.kg/files/media/6/6817.jpg"
        />
        {/* </div> */}

        <div className="card-1">
          <div className="bbb-2">
            <h1>Galaxy Z</h1>
            <h5>Призванный изменить форму будущего</h5>
          </div>
          <img
            style={{ maxWidth: "100%", marginTop: "30px" }}
            src="https://www.samsungstore.kg/files/media/10/10344.jpg"
          />
        </div>
        <div className="card-2">
          <div className="bbb-2">
            <h1>Новые планшеты Galaxy Tab S7 +</h1>
            <h5>
              Работайте и играйте на новом этапе с потрясающе мощным
              процессором, плавной передачей картинки на дисплей с высокой
              частотой обновления в 120 Гц. Наслаждайтесь новым опытом работы ПК
              с подключенным чехлом-клавиатурой, или воспользуйтесь стилусом S
              Pen с самой низкой задержкой письма.
            </h5>
          </div>
          <img
            style={{ maxWidth: "100%" }}
            src="https://www.samsungstore.kg/files/media/0/38.jpg"
          />
        </div>
        <div className="text-card">
          <h1>Кухонная встраиваемая техника</h1>
          <h5>Точная,настраимовая </h5>
        </div>

        <img
          style={{ width: "100%" }}
          src="https://www.samsungstore.kg/files/media/4/4958.jpg"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div className="card-min">
            <div>
              <img
                style={{ width: "70%" }}
                src="https://www.samsungstore.kg/files/media/8/8663.png"
              />
            </div>
            <div className="card-img-2">
              <h1>Galaxy Note</h1>
              <button className="first">Смотреть все</button>
            </div>
          </div>
          <div className="card-min">
            <div className="card-img-2">
              <h1>Galaxy S</h1>
              <button className="first">Смотреть все</button>
            </div>
            <div>
              <img
                style={{ width: "70%", marginLeft: "30%" }}
                src="https://www.samsungstore.kg/files/media/8/8659.png"
              />
            </div>
          </div>
        </div>
        <img
          style={{ width: "100%" }}
          src="https://www.samsungstore.kg/files/media/6/6272.jpg"
        />
        <div
          style={{
            width: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ color: "white" }}>Galaxy Note</h1>
            <h5 style={{ color: "white" }}>
              Супермощный смартфон, меняющий ваше <br /> представление о работе
              и развлечениях
            </h5>
          </div>
          <img
            style={{ maxWidth: "100%", marginTop: "20px" }}
            src="https://www.samsungstore.kg/files/media/3/3736.jpg"
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          height: "30%",
          margin: "40px 0px 20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="info-img-text">
          <h3 style={{ color: "white" }}>
            Сотрудничество с Samsung
            <br />в Кыргызстане
          </h3>
          <img src="https://www.samsungstore.kg/static/user/ima/st1.png" />
        </div>
        <div className="info-img-text">
          <h3 style={{ color: "white" }}>
            Сеть фирменных магазинов
            <br />в Бишкеке
          </h3>
          <img src="https://www.samsungstore.kg/static/user/ima/st2.png" />
        </div>
        <div className="info-img-text">
          <h3 style={{ color: "white" }}>
            Мировая гарантия
            <br />и сервисный центр
          </h3>
          <img src="https://www.samsungstore.kg/static/user/ima/st3.png" />
        </div>
      </div>
    </>
  );
};

export default Content;
