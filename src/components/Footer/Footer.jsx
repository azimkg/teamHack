import React from 'react';

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
                    <p>Акции
                        Контакты
                        Быстрая доставка
                        Покупка в кредит
                        Сотрудничество
                        Центры сервисного обслуживания
                        Гарантия
                    </p>
                </div>
                <div>
                    <span className='footer-span'>Интересное  </span>
                    <p>Galaxy S22 Ultra
                        Серия Galaxy Note
                        Samsung DeX
                        QLED 8К/4K TV
                        Стиральные машины AddWash
                    </p>
                </div>
                <div>
                    <p>Присоединяйтесь к нам в соцсетях:</p>
                    <div>
                        <a href="https://www.facebook.com/SamsungKyrgyzstan/" target="_blank" style="background-image: url('/files/media/0/29.png')"></a>
                        <a href="https://www.instagram.com/samsungkg/" target="_blank" style="background-image: url('/files/media/1/1917.png')"></a>
                        <a href="https://twitter.com/samsungkg" target="_blank" style="background-image: url('/files/media/0/31.png')"></a>

                    </div>
                </div>


            </div>

        </div >
    );
};

export default Footer;