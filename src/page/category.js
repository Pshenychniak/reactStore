import React from 'react';
import Layout from '../component/layout/layout';
import style from './category.module.css';
// import Tabs from '../elements/Tabs'
import { NavLink } from 'react-router-dom';
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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Category() {
  

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
  
  const cpuList=products.filter(prod=>prod.type==="cpu").map((product) =>
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
  const mbList = products.filter(prod=>prod.type==="mb").map((product) =>
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
const ramList = products.filter(prod=>prod.type==="ram").map((product) =>
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
const gpuList = products.filter(prod=>prod.type==="gpu").map((product) =>
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
      <div className="contain">
      {/* <h1>Вкладки</h1> */}
      <Tabs>
        <TabList className={style.tablist}>
          <Tab className={style.tab}>Процесори</Tab>
          <Tab className={style.tab}>Материнські плати</Tab>
          <Tab className={style.tab}>Оперативна пам'ять</Tab>
          <Tab className={style.tab}>Відеокарти</Tab>
        </TabList>

        <TabPanel>
        <div className={style.contain}>
          <ul className={style.list}>{cpuList}</ul>
        </div>
        </TabPanel>
        <TabPanel>
        <div className={style.contain}>
          <ul className={style.list}>{mbList}</ul>
        </div>
        </TabPanel>
        <TabPanel>
        <div className={style.contain}>
          <ul className={style.list}>{ramList}</ul>
        </div>
        </TabPanel>
        <TabPanel>
        <div className={style.contain}>
          <ul className={style.list}>{gpuList}</ul>
        </div>
        </TabPanel>
      </Tabs>
    </div>
      </Layout>
    </>
  );
}

export default Category;