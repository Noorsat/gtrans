import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import styles from './../styles/App.module.css'
import Header from './Header';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({children}) => {
  const [user, setUser] = useState();
  const [drawer, setDrawer] = useState();

  const openDrawer = () => {
    setDrawer(true);
  }

  const closeDrawer = () => {
    setDrawer(false);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [children])

    return (
      <div>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        </Head>
        <Header user={user} openDrawer={openDrawer} closeDrawer={closeDrawer} drawer={drawer}/>
        {
        !drawer ? 
        children:
        <div>
          <div className={styles.login__button} onClick={closeDrawer}>
            {
              user ? 
              <Link href="/account">Личный кабинет</Link> 
              :
              <Link href="/login">Войти в личный кабинет</Link> 
            }
          </div>
          {
            !user && 
            <div className={styles.register__link} onClick={closeDrawer}>
              <Link href="/register">Зарегистрироваться</Link>
            </div>
          }
      
          <div className={styles.phone__number}>
            <a href='tel:87273337050'>+7 (727) 333 70 50</a>
          </div>
          <div className={styles.phone__number}>
            <a href='tel:77075851003'>+7 (707) 585 1003</a>
          </div>
          <div className={styles.email}>
            info@gtrans.kz
          </div>
          <div className={styles.address}>
            г. Алматы, ул. Мынбаева 151, оф. 74
          </div>
          <div className='d-flex justify-content-center gap-3'>
            <div className={styles.social}>
              <img src='./insta.svg'/>
            </div>
            <div className={styles.social}>
              <img src='facebook.svg' />
            </div>
          </div>
        </div>
        }
      </div>
    );
}

export default Layout;