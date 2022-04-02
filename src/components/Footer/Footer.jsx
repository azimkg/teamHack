import React from "react";
import "./Footer.css";
import {
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footers">
      <div style={{ height: "1px", backgroundColor: "gray" }}></div>
      <div className="contarner-footer">
        <div>
          <span className="footer-span">Товары </span>
          <p style={{ fontSize: "17px", fontWeight: "500" }}>
            Смартфоны
            <br />
            Планшеты
            <br />
            Аксессуары
            <br />
            ТВ и аудио
            <br />
            Для дома
          </p>
        </div>
        <div>
          <span className="footer-span">Поддержка </span>
          <p style={{ fontSize: "17px", fontWeight: "500" }}>
            Акции
            <br />
            Контакты
            <br />
            Быстрая доставка
            <br />
            Покупка в кредит
            <br />
            Сотрудничество
            <br />
            Центры сервисного обслуживания
            <br />
            Гарантия
            <br />
          </p>
        </div>
        <div>
          <span className="footer-span">Интересное </span>
          <p style={{ fontSize: "17px", fontWeight: "500" }}>
            Galaxy S22 Ultra
            <br />
            Серия Galaxy Note
            <br />
            Samsung DeX
            <br />
            QLED 8К/4K TV
            <br />
            Стиральные машины AddWash
            <br />
          </p>
        </div>
        <div>
          <p>Присоединяйтесь к нам в соцсетях:</p>
          <div className="footer-icon">
            <a
              target="_blank"
              href="https://www.facebook.com/SamsungKyrgyzstan/"
            >
              <WhatsAppOutlined />
            </a>
            <a target="_blank" href="https://www.instagram.com/samsungkg/">
              <InstagramOutlined />
            </a>
            <a target="_blank" href="https://twitter.com/samsungkg">
              <TwitterOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
