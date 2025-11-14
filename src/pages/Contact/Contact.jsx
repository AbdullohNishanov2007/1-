import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📞",
      title: "Телефон",
      details: ["+996 555 250 778", "+996 555 250 778"],
      description: "Звоните в рабочее время"
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["cryptolevkg@gmail.com"],
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
      details: ["Пн-Пт: 10:00-18:00", "Сб: 10:00-16:00", "Вс: выходной"],
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

  // Функция для обработки клика по email
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

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
                        <p key={idx} className="contact-detail">
                          {item.title === "Email" ? (
                            <a 
                              href={`mailto:${detail}`} 
                              className="email-link"
                              onClick={(e) => {
                                e.preventDefault();
                                handleEmailClick(detail);
                              }}
                            >
                              {detail}
                            </a>
                          ) : item.title === "Телефон" ? (
                            <a href={`tel:${detail.replace(/\s/g, '')}`} className="phone-link">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
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
                  <a 
                    href="https://wa.me/996555250778" 
                    className="action-btn whatsapp"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    💬 Написать в WhatsApp
                  </a>
                  <a 
                    href="mailto:cryptolevkg@gmail.com" 
                    className="action-btn email"
                    onClick={(e) => {
                      e.preventDefault();
                      handleEmailClick('cryptolevkg@gmail.com');
                    }}
                  >
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
                <a 
                  href="https://wa.me/996555250778" 
                  className="btn cta-btn whatsapp"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  💬 Написать в WhatsApp
                </a>
                <a 
                  href="mailto:cryptolevkg@gmail.com" 
                  className="btn cta-btn email"
                  onClick={(e) => {
                    e.preventDefault();
                    handleEmailClick('cryptolevkg@gmail.com');
                  }}
                >
                  ✉️ Отправить заявку
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;