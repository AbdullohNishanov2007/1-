import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>1С Аутсорсинг</h3>
            <p>20 лет опыта в автоматизации бизнеса на базе 1С в Кыргызстане и России.</p>
            <div className="footer-contacts">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+996 555 250 778</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@1c-outsource.kg</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>г. Бишкек, ул. Токтогула 15А</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3>Услуги</h3>
            <ul>
              <li><a href="/services">Внедрение 1С</a></li>
              <li><a href="/services">Разработка под задачи</a></li>
              <li><a href="/services">Обучение персонала</a></li>
              <li><a href="/services">Подключение оборудования</a></li>
              <li><a href="/services">Техническая поддержка</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Быстрые ссылки</h3>
            <ul>
              <li><a href="/">Главная</a></li>
              <li><a href="/services">Услуги</a></li>
              <li><a href="/about">О нас</a></li>
              <li><a href="/contact">Контакты</a></li>
            </ul>
            <div className="social-links">
              <h4>Свяжитесь с нами:</h4>
              <div className="social-buttons">
                <a href="tel:+996555250778" className="social-btn phone">
                  📞 Позвонить
                </a>
                <a 
                  href="https://wa.me/996555250778" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn whatsapp"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 1С Аутсорсинг. Все права защищены.</p>
          <p>г. Бишкек, ул. Токтогула 15А</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #333333, #555555);
          color: white;
          padding: 3rem 0 1rem;
          position: relative;
        }

        .footer:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, var(--primary), var(--accent));
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          color: var(--accent);
        }

        .footer-section p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .footer-contacts {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: transform 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
        }

        .contact-icon {
          font-size: 1.1rem;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 0.8rem;
          transition: transform 0.3s ease;
        }

        .footer-section ul li:hover {
          transform: translateX(5px);
        }

        .footer-section a {
          color: #ddd;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-section a:hover {
          color: var(--accent);
        }

        .social-links {
          margin-top: 1.5rem;
        }

        .social-links h4 {
          margin-bottom: 1rem;
          color: var(--accent);
          font-size: 1rem;
        }

        .social-buttons {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .social-btn {
          display: inline-block;
          padding: 0.6rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .social-btn:hover {
          background: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);
        }

        .social-btn.whatsapp:hover {
          background: #25D366;
        }

        .copyright {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 0.9rem;
          color: #aaa;
        }

        .copyright p {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .social-buttons {
            flex-direction: column;
          }

          .social-btn {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;