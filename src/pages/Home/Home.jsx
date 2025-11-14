import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    {
      title: "Основные услуги 1С",
      items: ["Установка", "Разработка под Ваши задачи", "Обучение персонала", "Настройка и адаптация под вас"]
    },
    {
      title: "Подключение оборудования",
      items: ["Электронные весы", "Онлайн-кассы (ККМ)", "ЭДО", "R-Keeper"]
    },
    {
      title: "Интеграция и обмен данными",
      items: ["Обмен данными между конфигурациями 1С", "Обмен с сайтами и 1С", "Синхронизация любых систем"]
    },
    {
      title: "Дополнительные услуги",
      items: ["Маркировка товаров «Честный знак» и \"ТЕКШЕР\"", "CRM Битрикс24", "Любые конфигурации под ваш учёт"]
    }
  ];

  const industries = [
    { icon: "🏪", name: "Торговле" },
    { icon: "🍕", name: "Ресторанах и кафе" },
    { icon: "🏭", name: "Производстве" },
    { icon: "💰", name: "Финансах" },
    { icon: "👩‍💼", name: "Кадрах" },
    { icon: "🛒", name: "Маркетплейсах" },
    { icon: "🚚", name: "Грузоперевозках" }
  ];

  const features = [
    { icon: "20+", title: "Лет опыта", description: "Более 20 лет успешной работы на рынке автоматизации" },
    { icon: "🔧", title: "Полный цикл", description: "От консультации до внедрения и дальнейшего сопровождения" },
    { icon: "⚡", title: "Быстрый результат", description: "Оперативное решение задач любой сложности" },
    { icon: "💼", title: "Индивидуальный подход", description: "Решения, адаптированные под специфику вашего бизнеса" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>🔧 Полный IT-аутсорсинг для Вашего бизнеса!</h1>
          <p>20 лет опыта в России и в Кыргызстане по автоматизации и внедрении решений на базе 1С!</p>
          <Link to="/contact" className="btn">Получить консультацию</Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Наши услуги 1С</h2>
            <p>Комплексные решения для автоматизации вашего бизнеса</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section industries">
        <div className="container">
          <div className="section-title">
            <h2>Внедрение и автоматизация процессов в:</h2>
            <p>Мы имеем опыт работы в различных отраслях бизнеса</p>
          </div>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-item">
                <div>{industry.icon}</div>
                <h3>{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Наши преимущества</h2>
            <p>Почему выбирают именно нас</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <div className="container">
          <h2>Готовы автоматизировать свой бизнес?</h2>
          <p>📲 Пишите, звоните — проконсультируем и всё настроим «под ключ»!</p>
          <Link to="/contact" className="btn btn-light">Получить консультацию</Link>
        </div>
      </section>


    </div>
  );
};

export default Home;