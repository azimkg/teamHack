import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div style={{ marginTop: "20px", height: "1px", backgroundColor: "gray" }}></div>
            <div className='contarner-footer'>
                <div>
                    <span className='footer-span'>Товары </span>
                    <p>Смартфоны<br />
                        Планшеты<br />
                        Аксессуары<br />
                        ТВ и аудио<br />
                        Для дома
                    </p>
                </div>
                <div>
                    <span className='footer-span'>Поддержка </span>
                    <p>Акции<br />
                        Контакты<br />
                        Быстрая доставка<br />
                        Покупка в кредит<br />
                        Сотрудничество<br />
                        Центры сервисного обслуживания<br />
                        Гарантия<br />
                    </p>
                </div>
                <div>
                    <span className='footer-span'>Интересное  </span>
                    <p>Galaxy S22 Ultra<br />
                        Серия Galaxy Note<br />
                        Samsung DeX<br />
                        QLED 8К/4K TV<br />
                        Стиральные машины AddWash<br />
                    </p>
                </div>
                <div>
                    <p>Присоединяйтесь к нам в соцсетях:</p>
                    <div className="footer-icon">
                        <a href="https://www.facebook.com/SamsungKyrgyzstan/" ><img className='icon-sait' src='https://cdn-icons.flaticon.com/png/128/2168/premium/2168281.png?token=exp=1648731518~hmac=57dbb88c6e22f59fee4e9665572727ee' /></a>
                        <a href="https://www.instagram.com/samsungkg/" ><img className='icon-sait' src='https://cdn-icons-png.flaticon.com/128/1384/1384015.png' /> </a>
                        <a href="https://twitter.com/samsungkg" ><img className='icon-sait' src='https://cdn-icons-png.flaticon.com/128/1384/1384017.png' /></a>


                    </div>
                </div>


            </div>

        </div >
    );
};

export default Footer;