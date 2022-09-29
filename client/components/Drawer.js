import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {GiHamburgerMenu} from 'react-icons/gi';
import Link from 'next/link'
import styles from './../styles/Layout.module.css'
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';

export default function TemporaryDrawer({user}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{position:"relative"}}
    >
      <List style={{height:"100vh", position:"relative"}}>
          <ListItem disablePadding>
            <Link href="/">
                <div className={styles.link}>
                    Заказы
                </div>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/request">
                <div className={styles.link}>
                    Заказать доставку
                </div>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/my-orders">
                <div className={styles.link}>
                    Мой заказы
                </div> 
            </Link>
          </ListItem>
          <ListItem disablePadding>
            {
                user ? 
                <Link href="/account">
                    <div className={styles.link}>
                        Мой аккаунт
                    </div>
                </Link> 
                :
                <Link href="/login">
                    <div className={styles.link}>
                        Логин
                    </div>
                </Link> 
            }
          </ListItem>
          <ListItem style={{ position: "absolute", bottom: "30px", display:"block"}}>
            <div className='d-flex ps-3 align-items-center gap-3 mb-4'>
                <div>
                    <a href="https://www.facebook.com/gtranskz" target="_blank"><BsFacebook size={25} /></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/gtranskz/" target="_blank"><AiFillInstagram size={30} /></a>
                </div>
            </div>
            <div className='ps-3'>
              <div className={`${styles.phone} mb-2`}>
               <a href="tel:87273337050">+7 (727) 333 70 50</a>
              </div>
              <div className={`${styles.phone} mb-2`}>
                <a href='tel:87075851003'>+7 (707) 585 1003</a>
              </div>
              <div className={styles.phone}>
                info@gtrans.kz
              </div>
            </div>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={"left"}>
            <Button onClick={toggleDrawer("left", true)} style={{padding:0, width:28}}>
                <GiHamburgerMenu size={28} color={"black"}/>
            </Button>
            <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            >
                {list("left")}
            </Drawer>
        </React.Fragment>
    </div>
  );
}
