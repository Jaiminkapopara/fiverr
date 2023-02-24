import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const {pathname} = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useState(() => {
        window.addEventListener('scroll', isActive)

        return() => {
            window.removeEventListener('scroll', isActive)
        }
    }, [])

    const currentUser = {
        id: 1,
        username: 'John Doe',
        isSeller: true
    }

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <Link to='/' className='link'>
        <div className="logo">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
        </div>
        </Link>
        <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {!currentUser && <button>Join</button>}
            {currentUser && (
                <div className="user" onClick={() => setOpen(!open)}>
                    <img src="https://images.pexels.com/photos/12430063/pexels-photo-12430063.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                    <span>{currentUser?.username}</span>
                    {open && <div className="options">
                        {
                            currentUser?.isSeller && (
                                <>
                                    <Link  to='mygigs' className='link'>Gigs</Link>
                                    <Link to='add' className='link'>Add New Gig</Link>
                                </>
                            )
                            
                        }
                        <Link to='orders' className='link'>Orders</Link>
                        <Link to='messages' className='link'>Messages</Link>
                        <Link to='/' className='link'>Logout</Link>
                    </div>}
                </div>
            )}
        </div>
      </div>
      {(active || pathname !== '/' ) && 
      <>
      <hr />
      <div className="menu">
      <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
      </div>
      <hr />
      </>
    }
    </div>
  )
}

export default Navbar
