import React, { useState } from 'react';
import Layout from '../component/layout/layout';
import style from './cart.module.css';
import { NavLink } from 'react-router-dom';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Img from '../elements/Img/img'
import cpu from '../images/cpu.jpg';
import cpu2 from '../images/cpu2.webp';
import mb1 from '../images/mb1.webp';
import mb2 from '../images/mb2.webp';
import ram1 from '../images/ozu1.webp';
import ram2 from '../images/ozu2.webp';
import gpu1 from '../images/gpu1.webp';
import gpu2 from '../images/gpu2.webp';
import { useParams } from 'react-router-dom';


function Cart(props) {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const products = [
    { id: 0, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I7", price: 300, type: "cpu" },
    { id: 1, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I3", price: 150, type: "cpu" },
    { id: 2, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I5", price: 200, type: "cpu" },
    { id: 3, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I9", price: 500, type: "cpu" },
    { id: 4, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I7", price: 300, type: "cpu" },
    { id: 5, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I3", price: 150, type: "cpu" },
    { id: 6, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I5", price: 200, type: "cpu" },
    { id: 7, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I9", price: 500, type: "cpu" },
    { id: 8, mainImgSrc: mb1, secondaryImgSrc: mb2, title: "Asus ROG STRIX B760-F", price: 300, type: "mb" },
    { id: 9, mainImgSrc: mb1, secondaryImgSrc: mb2, title: "Asus ROG Maximus Z790", price: 550, type: "mb" },
    { id: 10, mainImgSrc: mb1, secondaryImgSrc: mb2, title: "Asus PRIME Z790-A", price: 350, type: "mb" },
    { id: 11, mainImgSrc: mb1, secondaryImgSrc: mb2, title: "MSI MPG Z790 CARBON WIFI", price: 400, type: "mb" },
    { id: 12, mainImgSrc: mb1, secondaryImgSrc: mb2, title: "MSI MPG Z690 CARBON WIFI", price: 380, type: "mb" },
    { id: 13, mainImgSrc: ram1, secondaryImgSrc: ram2, title: "Kingston Fury DDR4-3600 2x16gb", price: 100, type: "ram" },
    { id: 14, mainImgSrc: ram1, secondaryImgSrc: ram2, title: "Kingston Fury DDR4-3600 Beast 2x16gb", price: 110, type: "ram" },
    { id: 15, mainImgSrc: ram1, secondaryImgSrc: ram2, title: "G.Skill DDR4-4400 Trident Z 2x16gb ", price: 150, type: "ram" },
    { id: 16, mainImgSrc: gpu1, secondaryImgSrc: gpu2, title: "MSI RTX 4060 Ti Gaming X", price: 450, type: "gpu" },
    { id: 17, mainImgSrc: gpu1, secondaryImgSrc: gpu2, title: "ASUS RTX 4060 Ti ", price: 450, type: "gpu" },
    { id: 18, mainImgSrc: gpu1, secondaryImgSrc: gpu2, title: "INNO3D PCI-Ex GeForce RTX 4060 Ti iChill", price: 450, type: "gpu" },
  ]
  const { id } = useParams();
  const product = products.find(prod => prod.id == id);
  console.log(product);
  const swiperListProduct = products.map((product) =>
    <SwiperSlide>
      <NavLink to={`/cart/${product.id}`} className={style.link} onClick={window.scrollTo(0, 0)}>
        <div className={style.sliderImg} >
          <Img src={product.mainImgSrc} alt="cpu2" />
          <p>{product.title} <br /> <span>Price: {product.price}$</span></p>
        </div>
      </NavLink>
    </SwiperSlide>
  );



  return (
    <>
      <Layout>
        <div className={style.contain}>
          <div className={style.cart}>
            <div className={style.swiper}  >
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className={style.swiper}
              >
                <SwiperSlide className={style.slide}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Img src={product.mainImgSrc} alt="cpu1" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Img src={product.secondaryImgSrc} alt="cpu2" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={style.productInfo}>
              <h1>{product.title}</h1>
              <p>Price: <span>{product.price} $</span>
                <span className={style.prodStat}><br />Ready to ship</span></p>
              <button className={style.btn} onClick={openModal}> Add to cart</button>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.
              </p>
            </div>
            <div>
              <h2>Методи доставки:</h2>
              <ul>
                <li> Самовивіз з точок видачі</li>
                <li> Доставка кур'єром Meest ПОШТА, Нової Пошти</li>
                <li> Самовивіз з відділень поштових операторів Meest ПОШТА, Нової Пошти</li>
              </ul>
            </div>

            <div>
              <h2>Способи оплати:</h2>
              <ul>
                <li>Оплата під час отримання товару</li>
                <li>Оплата карткою у відділенні</li>
                <li>Картою онлайн</li>
                <li>Безготівковими для юридичних осіб</li>
              </ul>
            </div>
          </div>
          <div className={style.resp}>
            <h2>Відгуки</h2>
            <div className={style.respCart}>
              <p><b>Nickname</b></p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.</p>
              <p>Rating <span className={style.restRating}>8/10</span></p>
            </div>
            <div className={style.respCart}>
              <p><b>Nickname</b></p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.</p>
              <p>Rating <span className={style.restRating}>8/10</span></p>
            </div>
            <div className={style.respCart}>
              <p><b>Nickname</b></p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.</p>
              <p>Rating <span className={style.restRating}>8/10</span></p>
            </div>
            <div className={style.respCart}>
              <p><b>Nickname</b></p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.</p>
              <p>Rating <span className={style.restRating}>8/10</span></p>
            </div>
            <div className={style.respCart}>
              <p><b>Nickname</b></p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus illum beatae! Ea repudiandae iure perferendis culpa ex nihil reprehenderit, magnam consequuntur beatae, exercitationem ut voluptatum consequatur illum ullam aspernatur.</p>
              <p>Rating <span className={style.restRating}>8/10</span></p>
            </div>
          </div>
          <div className={style.swiperSecondary} >
            <h1>Також вас можуть зацікавити</h1>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >

              {swiperListProduct}
            </Swiper>
          </div>
          {isModalOpen && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <h2>Товар добавлено в корзину!</h2>
            <p>Товар успішно доданий в корзину</p>
            <button className={style.btn} onClick={closeModal}>Продовжити покупки</button>
          </div>
        </div>
      )}
        </div>

      </Layout>
    </>
  );
}

export default Cart;