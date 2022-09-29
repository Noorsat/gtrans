import React, {useState, useEffect,Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import Link from 'next/link';
import styles from './../styles/Layout.module.css';
import TemporaryDrawer from './Drawer';

const Header = ({user}) => {

    return (
        <div className='layout'>
        <div className={styles.container}>
        <div className='d-md-flex justify-content-between align-items-center pt-3 pb-3 d-none'>
          <div>
             <div className='mb-2'>
              г. Алматы, ул. Мынбаева 151, оф.65
             </div>
             <div className='d-flex justify-content-center align-items-center gap-3'>
              <div>
                <a href="https://www.facebook.com/gtranskz" target="_blank"><BsFacebook size={25} /></a>
              </div>
              <div>
                <a href="https://www.instagram.com/gtranskz/" target="_blank"><AiFillInstagram size={30} /></a>
              </div>
             </div>
          </div>
          <div className='logo'>
            <img src="./logo.svg" width={130}/>
          </div>
          <div className='d-flex align-items-center'>
            <div>
              <div className={styles.phone}>
               <a href="tel:87273337050">+7 (727) 333 70 50</a>
              </div>
              <div className={styles.phone}>
                <a href='tel:87075851003'>+7 (707) 585 1003</a>
              </div>
              <div className={styles.phone}>
                info@gtrans.kz
              </div>
            </div>
            <div className={styles.button}>
              Вам перезвонить?
            </div>
          </div>
        </div>
        <div className='d-md-none d-flex pt-3 pb-3 justify-content-between align-items-center'>
          <div className='logo'>
            <img src="./logo.svg" width={80}/>
          </div>
          <div>
             <TemporaryDrawer user={user}/>
          </div>
        </div>
        </div>
        <div className='position-relative border-bottom border-top pt-3 pb-3 d-md-block d-none'>
          <div className='container d-flex justify-content-between'>
            <div className='d-flex justify-content-center ms-auto me-auto gap-3'>
              <div style={{marginLeft:150}}>
                <Link href="/">Заказы</Link>
              </div>
              <Link href="/request">Заказать доставку</Link>
            </div>
            <div className='d-flex'>
                <div className='me-3'>
                  <Link href="/my-orders">Мой заказы</Link>
                </div>
                {
                  user ? 
                  <Link href="/account">Мой аккаунт</Link> 
                  :
                  <Link href="/login">Логин</Link> 
                }
            </div>
          </div>
        </div>
        </div>
    )
}

export default Header;