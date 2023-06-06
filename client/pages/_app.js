import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import './global.css'

const MyApp = ({ Component, pageProps }) => {
  const [order, setOrder] = React.useState([
    {
     type:"",
     len:"",
     width:"",
     height:"",
     weight:"",
     count:"",
     comment:"",
     volume: "",
     deliveryType:"",
     switch: false
    } 
   ]);

    return (
      <Layout>
        <Component {...pageProps} order={order} setOrder={setOrder} />
      </Layout>
    )
}

export default MyApp;