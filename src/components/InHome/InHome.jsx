import React from 'react';
import './InHome.css'

const InHome = () => {
    return (
        <div>
            <div className='in-container'>
                <div className='home-card-1'>
                    <img style={{ maxWidth: "100%" }} src='https://www.samsungstore.kg/files/media/0/48.jpg' />
                    <div>
                        <h1 className='bollsh' style={{ color: "white" }}>Холодильники</h1>
                        <h3 className='bolld-min' style={{ color: "white" }}>Непревзойденная свежесть</h3>
                        <div className='bold-none'>
                            <p style={{ color: "white" }}>В вашем холодильнике всегда свежий и влажный воздух</p>
                        </div>
                    </div>

                </div>
                <div className='home-card-2'>
                    <h1 className='bollsh'>Стиральные машины</h1>
                    <h3 className='bolld-min'>Инновации в стирке</h3>
                    <div className='bold-none'>
                        <p style={{ textAlign: "center" }}>Наши стиральные машины наделены множеством инновационных функций и используют уникальную технологию стирки, которая позволит сэкономить ваши силы и время</p>
                    </div>
                    <img style={{ maxWidth: "100%" }} src='https://www.samsungstore.kg/files/media/0/238.png' />
                </div>



                <div className='home-card-all'>
                    <div className='home-card-text'>
                        <h1 className='bollsh'>Пылесосы</h1>
                        <h3 className='bolld-min'>Легкая уборка. Мощный результат</h3>
                        <div className='bold-none'>
                            <p >Турбина Anti-Tangle не дает пыли и мусору забивать фильтр и препятствовать прохождению воздуха. Турбина Anti-Tangle предотвращает наматывание волос и шерсти на детали пылесоса </p>
                        </div>
                    </div>
                    <img className='img-home' src='https://www.samsungstore.kg/files/media/0/887.jpg' />
                </div>




                <div className='home-card-all'>
                    <img className='img-home' src='https://www.samsungstore.kg/files/media/0/245.png' />
                    <div className='home-card-text'>
                        <h1 className='bollsh'>Микроволновые печи</h1>
                        <h3 className='bolld-min'>Новые возможности для великолепного вкуса</h3>
                        <div className='bold-none'>
                            <p>Микроволновые печи Samsung с инновационными функциями и стильным дизайном приятно удивят вас своими возможностями и с легкостью справятся с любым кулинарным запросом.</p>
                        </div>
                    </div>
                </div>
                Кондиционеры
                Оптимальное решение

                <div className='home-card-all'>
                    <div className='home-card-text'>
                        <h1 className='bollsh'> Кондиционеры</h1>
                        <h3 className='bolld-min'>Оптимальное решение</h3>
                        <div className='bold-none'>
                            <p >Кондиционер Samsung был разработан специально для достижения отменной эффективности. Его уникальный дизайн, современные технологии и функциональность обеспечат высочайшее качество воздуха.</p>
                        </div>
                    </div>
                    <img className='img-home' src='https://www.samsungstore.kg/files/media/0/747.png' />
                </div>
                <img style={{ maxWidth: "100%" }} src='https://www.samsungstore.kg/files/media/6/6371.png' />



            </div>

        </div >
    );
};

export default InHome;