import * as React from 'react'
import Navbar from './Navbar'
import { 
   Link,
   Outlet
} from 'react-router-dom';

import './styles.scss';

import Home from './Home'
import Contact from './Contacts';
import Blogs from './Blogs'
import signin from './signin';
import signUp from './signUp';



const navTheme = {
  mainColor: '#52b788',
  menuBgColor: '#edf7f3',
  backgroundColor:'#ffffff',
  height:'55px',
  sliderWidth:'100%'
}

const navBrand = <a href={'/'}>Base Corp.</a>

const leftLinks = (

 
 
  <>

<Link to='/'>Home</Link>

<Link to='/Contacts'>Contacts</Link>
<Link to='/Blogs'>Blogs </Link>

<div className="dropdown">
    <button className="dropbtn">Dropdown 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
    


  

  </>
)

// const rightLinks = (
//   <>
//   <Link to='/signin'>signin</Link>
//   <Link to='/signup'>SignUP</Link>
 
//   </>
// )

const Layout = () => {
  return (
    <>
    <div  >
    
      
      <Navbar
        className="navbar" // style .navbar in your css
        menuClassName="navbar--menu" // style .navbar--menu in your css
        brand={navBrand}
        theme={navTheme}
        leftLinks={leftLinks}
        // rightLinks={rightLinks}
      />
      </div>
       
      <Outlet/>
       
       </>
    
  )
}

export default Layout;
