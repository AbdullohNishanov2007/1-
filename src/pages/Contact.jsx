import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📞",
      title: "Телефон",
      details: ["+996 555 250 778", "+996 555 250 779"],
      description: "Звоните в рабочее время"
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@1c-outsource.kg", "support@1c-outsource.kg"],
      description: "Ответим в течение 2 часов"
    },
    {
      icon: "📍",
      title: "Адрес",
      details: ["г. Бишкек, ул. Токтогула 15А", "Центральный район"],
      description: "Принимаем по предварительной записи"
    },
    {
      icon: "🕒",
      title: "Режим работы",
      details: ["Пн-Пт: 9:00-18:00", "Сб: 10:00-16:00", "Вс: выходной"],
      description: "Техподдержка 24/7"
    }
  ];

  const services = [
    "Внедрение 1С",
    "Разработка под задачи", 
    "Техническая поддержка",
    "Обучение персонала",
    "Интеграция с сайтами",
    "Подключение оборудования",
    "Миграция данных"
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами для консультации по автоматизации вашего бизнеса</p>
        </div>
        
        <section className="section">
          <div className="contact-content">
            <div className="contact-main">
              <h2>Наши контакты</h2>
              <p className="contact-description">
                Мы находимся в центре Бишкека и всегда готовы помочь вам с автоматизацией бизнеса. 
                Приезжайте в наш офис для личной консультации или свяжитесь удобным для вас способом.
              </p>
              
              <div className="contact-grid">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <div className="contact-details">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="contact-detail">{detail}</p>
                      ))}
                    </div>
                    <p className="contact-note">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="quick-actions">
                <h3>Быстрые действия</h3>
                <div className="action-buttons">
                  <a href="tel:+996555250778" className="action-btn primary">
                    📞 Позвонить сейчас
                  </a>
                  <a href="https://wa.me/996555250778" className="action-btn whatsapp">
                    💬 Написать в WhatsApp
                  </a>
                  <a href="mailto:info@1c-outsource.kg" className="action-btn email">
                    ✉️ Отправить email
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-sidebar">
              <div className="services-sidebar">
                <h3>Наши услуги</h3>
                <ul className="services-list">
                  {services.map((service, index) => (
                    <li key={index} className="service-item">
                      <span className="service-icon">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="emergency-support">
                <h3>🚨 Срочная поддержка</h3>
                <p>При возникновении критических проблем в работе 1С</p>
                <a href="tel:+996555250778" className="emergency-btn">
                  Срочный вызов специалиста
                </a>
              </div>
            </div>
          </div>
        </section>

<section className="section map-section">
  <div className="container">
    <div className="section-title">
      <h2>Как нас найти</h2>
      <p>Мы находимся в центре Бишкека, рядом с главными достопримечательностями</p>
    </div>
    
    <div className="location-info">
      <div className="location-details">
        <div className="location-card">
          <h3>📍 Наш офис</h3>
          <div className="address">
            <strong>г. Бишкек, ул. Токтогула 15А</strong>
            <p>Центральный район, 3 этаж</p>
          </div>
          
          <div className="landmarks">
            <h4>Рядом с нами:</h4>
            <ul>
              <li>🏛️ В 5 минутах от площади Ала-Тоо</li>
              <li>🏬 Рядом с ТЦ «ЦУМ»</li>
              <li>🚇 Ближайшая остановка «Дубовый парк»</li>
              <li>🅿️ Есть парковка для клиентов</li>
            </ul>
          </div>
        </div>

        <div className="transport-info">
          <h4>Как добраться:</h4>
          <div className="transport-options">
            <div className="transport-item">
              <span className="transport-icon">🚌</span>
              <div>
                <strong>Автобусы:</strong> 1, 5, 11, 12, 24
              </div>
            </div>
            <div className="transport-item">
              <span className="transport-icon">🚕</span>
              <div>
                <strong>Такси:</strong> 5-7 минут от центра
              </div>
            </div>
            <div className="transport-item">
              <span className="transport-icon">🚗</span>
              <div>
                <strong>На машине:</strong> удобный подъезд с ул. Токтогула
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-placeholder">
        <div className="map-content">
          <h3>🗺️ Мы здесь!</h3>
          <p>ул. Токтогула 15А, Бишкек</p>
          <div className="map-actions">
            <a 
              href="https://2gis.kg/bishkek/geo/70030076354503036/74.624897%2C42.871458?m=74.624867%2C42.871592%2F19.98" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn navigation-btn"
            >
              📍 Построить маршрут в 2GIS
            </a>
            <a 
              href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A2%D0%BE%D0%BA%D1%82%D0%BE%D0%B3%D1%83%D0%BB%D0%B0+15%D0%90,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.874679,74.590393,17z/data=!3m1!4b1!4m6!3m5!1s0x389eb7d13c6f19c5:0x56126be5d0bd6c7f!8m2!3d42.874679!4d74.590393!16s%2Fg%2F11c2m5_qb5?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn navigation-btn"
            >
              🗺️ Открыть в Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Готовы начать автоматизацию?</h2>
              <p>Оставьте заявку и мы перезвоним вам в течение 15 минут</p>
              <div className="cta-buttons">
                <a href="tel:+996555250778" className="btn cta-btn">
                  📞 Позвонить сейчас
                </a>
                <a href="https://wa.me/996555250778" className="btn cta-btn whatsapp">
                  💬 Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-main h2 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 2.2rem;
        }

        .contact-description {
          color: #666;
          margin-bottom: 3rem;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .contact-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(255, 107, 0, 0.1);
          border-left: 4px solid var(--primary);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(255, 107, 0, 0.2);
        }

        .contact-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .contact-card h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .contact-detail {
          color: var(--dark);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .contact-note {
          color: #666;
          font-size: 0.9rem;
          margin-top: 1rem;
          font-style: italic;
        }

        .quick-actions {
          margin-bottom: 3rem;
        }

        .quick-actions h3 {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .action-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          text-align: center;
        }

        .action-btn.primary {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
        }

        .action-btn.whatsapp {
          background: #25D366;
          color: white;
        }

        .action-btn.email {
          background: #ea4335;
          color: white;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .contact-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .services-sidebar {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(255, 107, 0, 0.1);
        }

        .services-sidebar h3 {
          color: var(--primary);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .services-list {
          list-style: none;
        }

        .service-item {
          padding: 0.8rem 0;
          border-bottom: 1px solid #eee;
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .service-item:hover {
          transform: translateX(5px);
        }

        .service-item:last-child {
          border-bottom: none;
        }

        .service-icon {
          color: var(--secondary);
          margin-right: 1rem;
          font-weight: bold;
        }

        .emergency-support {
          background: linear-gradient(135deg, #ff6b6b, #ee5a52);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
        }

        .emergency-support h3 {
          margin-bottom: 1rem;
        }

        .emergency-support p {
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .emergency-btn {
          display: inline-block;
          background: white;
          color: #ff6b6b;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .emergency-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(255,255,255,0.3);
        }

        .map-section {
          background: var(--light);
        }

        .location-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .location-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .location-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(255, 107, 0, 0.1);
        }

        .location-card h3 {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .address {
          margin-bottom: 2rem;
        }

        .address strong {
          font-size: 1.2rem;
          color: var(--dark);
        }

        .landmarks h4 {
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        .landmarks ul {
          list-style: none;
        }

        .landmarks li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }

        .landmarks li:last-child {
          border-bottom: none;
        }

        .transport-info h4 {
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        .transport-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .transport-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(255, 107, 0, 0.1);
        }

        .transport-icon {
          font-size: 1.5rem;
        }

        .map-placeholder {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 12px;
          padding: 3rem;
          text-align: center;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        .map-content h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .map-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
          width: 100%;
          max-width: 300px;
        }

        .navigation-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
        }

        .navigation-btn:hover {
          background: white;
          color: var(--primary);
        }

        .cta-section {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          text-align: center;
        }

        .cta-content h2 {
          margin-bottom: 1rem;
          font-size: 2.2rem;
        }

        .cta-content p {
          margin-bottom: 2rem;
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
        }

        .cta-btn:hover {
          background: white;
          color: var(--primary);
        }

        .cta-btn.whatsapp {
          background: rgba(37, 211, 102, 0.2);
          border-color: #25D366;
        }

        .cta-btn.whatsapp:hover {
          background: #25D366;
          color: white;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .action-buttons {
            grid-template-columns: 1fr;
          }

          .location-info {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .map-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;