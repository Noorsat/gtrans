import React, {useState, useEffect,Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import Link from 'next/link'


const Layout = ({children}) => {
    const [user, setUser] = useState()

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user)
      setUser(user);
    }, [children])

    return (
      <div className='layout'>
        <div className='container'>
        <div className='d-flex justify-content-between align-items-center pt-3 pb-3'>
          <div>
             <div className='mb-2'>
              г. Алматы, ул. Мынбаева 151, оф.65
             </div>
             <div className='d-flex justify-content-center align-items-center gap-3'>
              <div>
                <BsFacebook size={25} />
              </div>
              <div>
                <AiFillInstagram size={30} />
              </div>
             </div>
          </div>
          <div className='logo'>
            <img src="./logo.svg" width={130}/>
          </div>
          <div className='d-flex align-items-center'>
            <div>
              <div>
               +7 (727) 333 70 50
              </div>
              <div>
                +7 (707) 585 1003
              </div>
              <div>
              info@gtrans.kz
              </div>
            </div>
            <div className='button'>
              Вам перезвонить?
            </div>
          </div>
        </div>
        </div>
        <div className='position-relative border-bottom border-top pt-3 pb-3'>
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
        {children}
      </div>
    );
}

export default Layout;