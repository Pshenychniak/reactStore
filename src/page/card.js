// App.js
import React, { useState } from 'react';
import style from './card.module.css'
import Img from '../elements/Img/img'
import cpu from '../images/cpu.jpg';
import cpu2 from '../images/cpu2.webp';
import mb1 from '../images/mb1.webp';
import mb2 from '../images/mb2.webp';
import ram1 from '../images/ozu1.webp';
import ram2 from '../images/ozu2.webp';
import gpu1 from '../images/gpu1.webp';
import gpu2 from '../images/gpu2.webp';
import Layout from '../component/layout/layout';

const Card = () => {
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


    return (
        <Layout>
            <div className={style.contain}>
                <div className={style.table}>
                    <table className={1} >
                        <thead className={style.thead}>
                            <tr className={style.tere}>
                                <th className={style.tede}>Продукти</th>
                                <th className={style.tede}>Ціна</th>
                                <th className={style.tede}>Кількість</th>
                                <th className={style.tede}>Загальна ціна</th>
                                <th className={style.tede}>Вилучити</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={style.tere}>
                                <td className={style.tede}><img src={cpu} style={{ width: "100px" }}></img>Intel Core I7</td>
                                <td  className={style.tede}>300 $</td>
                                <td className={style.tede}><button className={style.btnPM}>-</button>1<button className={style.btnPM}>+</button></td>
                                <td  className={style.tede}>300 $</td>
                                <td  className={style.tede}><button className={style.btnRemove}>Remove</button></td>
                            </tr> 
                            <tr  className={style.tere}>
                                <td className={style.tede}><img src={mb1} style={{ width: "100px" }}></img>Intel Core I7</td>
                                <td className={style.tede}>300 $</td>
                                <td className={style.tede}><button className={style.btnPM}>-</button>1<button className={style.btnPM}>+</button></td>
                                <td className={style.tede}>300 $</td>
                                <td className={style.tede}><button className={style.btnRemove}>Remove</button></td>
                            </tr>
                            <tr  className={style.tere}>
                                <td className={style.tede}><img src={ram1} style={{ width: "100px" }}></img>Intel Core I7</td>
                                <td className={style.tede}>300 $</td>
                                <td className={style.tede}><button className={style.btnPM}>-</button>1<button className={style.btnPM}>+</button></td>
                                <td className={style.tede}>300 $</td>
                                <td className={style.tede}><button className={style.btnRemove}>Remove</button></td>
                            </tr>
                            <tr  className={style.tere}>
                                <td className={style.tede}><img src={gpu1} style={{ width: "100px" }}></img>Intel Core I7</td>
                                <td className={style.tede}>300 $</td>
                                <td className={style.tede}><button className={style.btnPM}>-</button>1<button className={style.btnPM}>+</button></td>
                                <td className={style.tede}>300 $</td>
                                <td className={style.tede}><button className={style.btnRemove}>Remove</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            <div className={style.total}>
                <h2>Загальна ціна замовлення: 1200$</h2>
                <button>Оформити замовлення</button>
            </div>
            </div>

        </Layout>

    );
}

export default Card;
