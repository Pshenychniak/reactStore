import React from 'react';
import Layout from '../component/layout/layout';
import inst from '../images/insta.svg'
import fb from '../images/fb.svg'
import tg from '../images/tg.svg'
import twitt from '../images/twit.svg'
import style from './contact.module.css';

function Contact() {
  return (
    <>
      <Layout>
        <div className={style.contain}>
          <div className={style.content}>
            <div>
              <h2>Адреса</h2>
              <p>Ми знаходимося за адресою: м. Тернопіль</p>
              <p>Наш офіс розташований в м. Тернопіль</p>
              <p>Поштовий індекс: 46000</p>
            </div>

            <div>
              <h2>Телефон</h2>
              <p>Зв'яжіться з нами за телефоном: 88005553535</p>
              <p>Графік роботи нашої служби підтримки: Пн-Пт, 9:00 - 18:00</p>
            </div>

            <div>
              <h2>Електронна пошта</h2>
              <p>Напишіть нам на електронну пошту: <a href="mailto:[Адреса електронної пошти]">mypcternopil@gmail.com</a></p>
              <p>Очікуйте відповідь протягом 24 годин.</p>
            </div>
            <div>
              <h2>Соціальні мережі</h2>
              <p>Слідкуйте за нами в соціальних мережах:</p>
              <div className={style.social}>
                <ul className={style.socialUl}>
                  <li className={style.socialLi}>
                    <img className={style.socialLogo} src={inst} alt="logo"></img>
                    <a className={style.socialLink} href='/'>Instagram</a>
                  </li>
                  <li className={style.socialLi}>
                    <img className={style.socialLogo} src={fb} alt="logo"></img>
                    <a className={style.socialLink} href='/'>Facebook</a>
                  </li>
                  <li className={style.socialLi}>
                    <img className={style.socialLogo} src={tg} alt="logo"></img>
                    <a className={style.socialLink} href='/'>Telegram</a>
                  </li>
                  <li className={style.socialLi}>
                    <img className={style.socialLogo} src={twitt} alt="logo"></img>
                    <a className={style.socialLink} href='/'>Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
            <h1>Зворотній зв'язок</h1>
    <form className={style.form} >
        <label for="ім'я">Ім'я:</label>
        <input type="text" id="ім'я" name="ім'я" required/>
        <br/>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        <br/>
        
        <label for="повідомлення">Повідомлення:</label>
        <textarea id="повідомлення" name="повідомлення" rows="5" required></textarea>
        <br/>
        
        <button>Надіслати</button>
    </form>
            </div>
          </div>

        </div>


      </Layout>
    </>
  );
}

export default Contact;