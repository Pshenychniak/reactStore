import React from 'react';
// import {Link } from 'react-router-dom';
import Layout from '../component/layout/layout';


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
import style from './home.module.css';

function Home() {

  const products = [
    { id: 0, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I7", price: 300, type: "cpu" },
    { id: 1, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I3", price: 150, type: "cpu" },
    { id: 2, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I5", price: 200, type: "cpu" },
    { id: 3, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I9", price: 500, type: "cpu" },
    { id: 4, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I7", price: 300, type: "cpu" },
    { id: 5, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I3", price: 150, type: "cpu" },
    { id: 6, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I5", price: 200, type: "cpu" },
    { id: 7, mainImgSrc: cpu, secondaryImgSrc: cpu2, title: "Intel Core I9", price: 500, type: "cpu" },
    { id: 8, mainImgSrc: mb1, secondaryImgSrc: mb2, title: "Asus ROG B760-F", price: 300, type: "mb" },
    { id: 9, mainImgSrc: mb1, secondaryImgSrc: mb2, title: "Asus ROG Z790", price: 550, type: "mb" },
    { id: 10, mainImgSrc: mb1, secondaryImgSrc: mb2, title: "Asus PRIME Z790-A", price: 350, type: "mb" },
    { id: 11, mainImgSrc: mb1, secondaryImgSrc: mb2, title: "MSI MPG Z790 CARBON", price: 400, type: "mb" },
    { id: 12, mainImgSrc: mb1, secondaryImgSrc: mb2, title: "MSI MPG Z690 CARBON", price: 380, type: "mb" },
    { id: 13, mainImgSrc: ram1, secondaryImgSrc: ram2, title: "Kingston Fury DDR4-3600 2x16gb", price: 100, type: "ram" },
    { id: 14, mainImgSrc: ram1, secondaryImgSrc: ram2, title: "Kingston Fury DDR4-3600 Beast 2x16gb", price: 110, type: "ram" },
    { id: 15, mainImgSrc: ram1, secondaryImgSrc: ram2, title: "G.Skill DDR4-4400 Trident Z 2x16gb ", price: 150, type: "ram" },
    { id: 16, mainImgSrc: gpu1, secondaryImgSrc: gpu2, title: "MSI RTX 4060 Ti Gaming X", price: 450, type: "gpu" },
    { id: 17, mainImgSrc: gpu1, secondaryImgSrc: gpu2, title: "ASUS RTX 4060 Ti ", price: 450, type: "gpu" },
    { id: 18, mainImgSrc: gpu1, secondaryImgSrc: gpu2, title: "INNO3D PCI-Ex GeForce RTX 4060 Ti iChill", price: 450, type: "gpu" },
  ]

  const swiperListProduct = products.slice(0, 5).map((product) =>
    <SwiperSlide>
      <NavLink to={`/cart/${product.id}`} className={style.link} onClick={window.scrollTo(0, 0)}>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <Img src={product.mainImgSrc} alt="cpu2" />
          <p>{product.title} <br /> <span>Price: {product.price}$</span></p>
          <br />
        </div>
      </NavLink>
    </SwiperSlide>
  );
  const listProduct = products.slice(8, 13).map((product) =>
    <li key={product.id} className={style.li}>
      <div className={style.cart}>
        <NavLink to={`/cart/${product.id}`} className={style.link}>
          <Img className={style.img} src={product.mainImgSrc} alt="cpu"></Img>
          <h3 className={style.title}>{product.title}</h3>
          <p>Price: <span className={style.price}>{product.price} $</span>
            <span className={style.prodStat}><br />Ready to ship</span></p>
          <button className={style.btn}>Buy</button>
        </NavLink>
      </div>
    </li>
  );



  return (
    <>
      <Layout>

        <div className={style.contain}>
          <div className={style.swiperTop}>
            <h1>Хіти продаж:</h1>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >

              {swiperListProduct}
              {/* <SwiperSlide>
              <div style={{display:"flex", justifyContent:"center"}}>
                <Img src={img1} alt="img1"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{display:"flex", justifyContent:"center"}}>
                <Img src={img2} alt="img2"/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{display:"flex", justifyContent:"center"}}>
                <Img src={img3} alt="img3"/>
              </div>
            </SwiperSlide> */}
            </Swiper>
          </div>
          <div className={style.blok}>
            <h1>Рекомендовані:</h1>
            <ul className={style.list}>{listProduct}</ul>
          </div>
          <div className={style.blok}>
            <h1>Останні:</h1>
            <ul className={style.list}>{listProduct}</ul>
          </div>

          <br></br>
          <div className={style.blok}>
            <div className={style.resp}>
              <h1>Відгуки:</h1>
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

            <br></br>
          </div>
          <div className={style.blok}>
            <div className={style.aboutUs}>

              <h1>Про нас</h1>
              <p>
                Ми - ваш надійний партнер з комп'ютерними комплектуючими. Наша компанія надає широкий асортимент
                високоякісних комплектуючих для комп'ютерів за доступними цінами.
              </p>
              <h2>Наша мета − бути корисними</h2>
              <p>
                Ми віримо, що речі існують для того, щоб робити життя простішим, приємнішим і добрішим. Тому й пошук тієї самої речі повинен бути швидким, зручним і приємним. Ми не просто продаємо комп'ютерні комплектуючі. Ми допомагаємо знайти саме те, що треба, в одному місці та без зайвих хвилювань, щоб ви не витрачали життя на пошуки, а просто жили щасливо. My Computer − це універсальна відповідь на будь-який запит, початок пошуку та його кінцева зупинка, справжній помічник. Ми назавжди позбавляємо своїх покупців від неприємних компромісів, виконуємо бажання і даємо змогу мріяти сміливіше. Завдяки розумному пошуку та чесному сервісу ми робимо життя наших клієнтів трішки кращим просто зараз.
              </p>
              <h2>Щастя починається з простих речей</h2>
              <p>
                І ми допомагаємо ці речі знайти: закоханим підказуємо, чим здивувати один одного; спортивних мотивуємо ніколи не здаватись і швидше прогресувати; хазяйновитим даємо можливість створити справжній затишок. Ми хочемо, щоб ви знали, що шукаєте, і могли аргументувати свій вибір. Для цього ми знімаємо відеоогляди, пишемо статті та відстежуємо новинки.        </p>

              <h2>Зручна доставка</h2>
              <p>
                І звичайно, будь-який товар можна замовити з доставкою. Ми доставляємо замовлення по Києву протягом одного дня, а по Україні − на наступний день. Усе − без передоплати, якщо потрібно − у кредит. Оплата готівкова або безготівкова − як вам зручніше.        </p>
            </div>

          </div>

        </div>






      </Layout>


    </>
  );
}

export default Home;