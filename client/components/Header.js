import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Link from "next/link";
import styles from "./../styles/Layout.module.css";
import { ConfigProvider, Menu } from "antd";
import { useRouter } from "next/router";

const Header = ({ user, openDrawer, closeDrawer, drawer }) => {
  const router = useRouter();

  const menu = [
    {
      label: "Биржа",
      key: "birzha",
      children: [
        {
          label: "Маркетплейс",
          key: "marketplace",
        },
        {
          label: "Мои заказы",
          key: "my-orders?mode=marketplace",
        },
      ],
    },
    {
      label: "Калькулятор",
      key: "calculator",
      children: [
        {
          label: "Калькулятор",
          key: "request",
        },
        {
          label: "Мои заказы",
          key: "my-orders?mode=calculator",
        },
        {
          label: "Трекинг",
          key: "tracking",
        },
      ],
    },
    // (user?.role === "admin" || user?.role === "superadmin") ? {
    //   label:"Dashboard",
    //   key:"dashboard"
    // } : {}
  ];

  const onClick = (e) => {
    router.push("/" + e.key)
  }

  return (
    <div className="layout">
      <div
        className={styles.container}
        style={{ paddingBottom: drawer ? 23 : 10, paddingTop: 10 }}
      >
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center d-none">
            <div className="d-flex align-items-center">
              <div className={styles.social}>
                <img src="./insta.svg" />
              </div>
              <div className={styles.social}>
                <img src="./facebook.svg" />
              </div>
              <div className={styles.address}>
                г. Алматы, ул. Мынбаева 151, оф. 74
              </div>
            </div>
            <div className={`${styles.logo}`}>
              <div className="logo">
                <img src="/./logo.svg" width={113} />
              </div>
            </div>
            <div>
              <div className={styles.phone__number}>+7 (727) 333 70 50</div>
              <div className={styles.phone__number}>+7 (707) 585 1003</div>
              <div className={styles.email}>info@gtrans.kz</div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`d-md-none d-flex justify-content-between align-items-center ${styles.wrapper}`}
          >
            <div className="logo">
              <img src="/./logo.svg" width={80} />
            </div>
            <div className="d-flex align-items-center">
              {/* {
            !drawer && <div className={styles.buttons} style={{paddingTop: user && 6}}>
            <div className={styles.account__link}>
              {
                user ? 
                <Link href="/account">Личный кабинет</Link> 
                :
                <Link href="/login">Войти в личный кабинет</Link> 
              }
            </div>
              {
                  !user && <div className={styles.register__link_mobile}><Link href="/register">Зарегистрироваться</Link></div>
                }
          </div> 
          } */}
              <div
                style={{ marginRight: 6, position: "relative" }}
                onClick={drawer ? closeDrawer : openDrawer}
              >
                {drawer ? <img src="./close.svg" /> : <img src="./menu.svg" />}
              </div>
            </div>
          </div>
        </div>
      </div>
      {!drawer && (
        <div
          className={`d-flex justify-content-center d-md-none border-bottom`}
        >
          {/* <div className={styles.mobile__links}>
              <Link href="/marketplace">Биржа</Link>
            </div>
            <div className={styles.mobile__links}>
              <Link href="/request">Калькулятор</Link>
            </div>
            <div className={styles.mobile__links}>
              <Link href="/my-orders">Мои заказы</Link>
            </div>
            <div className={styles.mobile__links}>
              <Link href="/tracking">Трекинг</Link>
            </div> */}
          <Menu items={menu} mode="horizontal" onClick={onClick} />

        </div>
      )}
      <div
        className={`position-relative border-bottom border-top d-md-block d-none ${styles.nav}`}
      >
        <div
          className={`container d-flex justify-content-between ${styles.links}`}
        >
          <div className={`d-flex justify-content-center align-items-center`}>
            <Menu items={menu} mode="horizontal" onClick={onClick} />
            {/* <Link href="/marketplace">Биржа</Link>
              <Link href="/request">Калькулятор</Link>
              <Link href="/my-orders">Мои заказы</Link>
              <Link href="/tracking">Трекинг</Link>
              {
                (user?.role === "admin" || user?.role === "superadmin") &&
                <Link href="/admin">Dashboard</Link>
              } */}
          </div>
          <div className="d-flex align-items-center">
            {!user && (
              <div className={styles.register__link}>
                <Link href="/register">Зарегистрироваться</Link>
              </div>
            )}
            <div className={styles.account__link}>
              {user ? (
                <Link href="/account">Личный кабинет</Link>
              ) : (
                <Link href="/login">Войти в личный кабинет</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

