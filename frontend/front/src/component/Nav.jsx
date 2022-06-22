import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <div>
      <img src="https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" alt='Logo' 
      className='logo' />
      {
        auth ?

          <ul className='nav-ul'>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/add'>Add Products</Link></li>
            <li><Link to='/update'>Update Products</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link onClick={logout} to='/signup'>Logout</Link></li>
            <li><img src="https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg" alt='profile'  className='logop'/>Welcome {JSON.parse(auth).name}</li>
          </ul>
          :
          <ul className='nav-ul nav-right'>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
      }

    </div>
  )
}

export default Nav


//http://192.168.0.104:3000  

//<img src="https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg" alt='profile'  className='logo'