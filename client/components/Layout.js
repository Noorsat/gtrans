import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Header from './Header';


const Layout = ({children}) => {
  const [user, setUser] = useState()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, [children])

    return (
      <div>
        <Header user={user}/>
        {children}
      </div>
    );
}

export default Layout;