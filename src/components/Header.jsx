import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            {/* <div className="logo-icon">1C</div> */}
            <img className='logo_img' src="/logo.png" alt="" />
            {/* <span>Аутсорсинг</span> */}
          </Link>
          
          <div className="mobile-menu" onClick={toggleMenu}>
            ☰
          </div>
          
          <nav>
            <ul className={isMenuOpen ? 'show' : ''}>
              <li>
                <Link 
                  to="/" 
                  className={isActive('/')}
                  onClick={closeMenu}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={isActive('/services')}
                  onClick={closeMenu}
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={isActive('/about')}
                  onClick={closeMenu}
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={isActive('/contact')}
                  onClick={closeMenu}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>


<style jsx>{`
  .header {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent) 100%);
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(255, 107, 0, 0.2);
    backdrop-filter: blur(10px);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .logo_img {
    height: 80px;
    }

  .logo:hover {
    transform: scale(1.05);
  }

  .logo-icon {
    background: linear-gradient(135deg, #ffb400, #ff8c00);
    color: white;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    font-weight: bold;
    font-size: 1.3rem;
    box-shadow: 0 4px 10px rgba(255, 107, 0, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    margin-left: 2rem;
    position: relative;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    position: relative;
  }

  nav ul li a:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  nav ul li a.active {
    color: #fff;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
  }

  nav ul li a.active:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 3px;
    background: #ffb400;
    border-radius: 2px;
  }

  .mobile-menu {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background 0.3s;
  }

  .mobile-menu:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    .mobile-menu {
      display: block;
    }
    
    nav ul {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      flex-direction: column;
      padding: 1rem 0;
      box-shadow: 0 5px 20px rgba(255, 107, 0, 0.3);
      backdrop-filter: blur(10px);
    }
    
    nav ul.show {
      display: flex;
    }
    
    nav ul li {
      margin: 0;
      text-align: center;
      padding: 0.5rem 0;
    }

    nav ul li a {
      display: block;
      padding: 1rem;
    }

    nav ul li a.active:after {
      display: none;
    }
  }
`}</style>
    </header>
  );
};

export default Header;