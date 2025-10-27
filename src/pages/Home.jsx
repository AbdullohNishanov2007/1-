import React from 'react';
import { Link } from 'react-router-dom';

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

      <style jsx>{`
        .hero {
          background: linear-gradient(rgba(204, 0, 0, 0.8), rgba(255, 102, 0, 0.9));
          color: white;
          padding: 5rem 0;
          text-align: center;
        }

        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        /* Services Styles */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background-color: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
          border-top: 4px solid var(--secondary);
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .service-card h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
        }

        .service-card h3:before {
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: var(--accent);
          border-radius: 50%;
          margin-right: 10px;
        }

        .service-card ul {
          list-style-type: none;
          margin-left: 0;
        }

        .service-card ul li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
          display: flex;
          align-items: center;
        }

        .service-card ul li:before {
          content: '►';
          color: var(--secondary);
          margin-right: 10px;
          font-size: 0.8rem;
        }

        .service-card ul li:last-child {
          border-bottom: none;
        }

        /* Industries Styles */
        .industries {
          background-color: var(--light);
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .industry-item {
          background-color: white;
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 3px 10px rgba(0,0,0,0.05);
          transition: all 0.3s;
          border-left: 4px solid var(--accent);
        }

        .industry-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .industry-item div {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .industry-item h3 {
          color: var(--primary);
        }

        /* Features Styles */
        .features {
          background-color: white;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          text-align: center;
          padding: 2rem 1rem;
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
          font-size: 2rem;
        }

        .feature-item h3 {
          color: var(--primary);
          margin-bottom: 1rem;
        }

        /* CTA Styles */
        .cta {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: white;
          text-align: center;
          padding: 4rem 0;
        }

        .cta h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .cta p {
          max-width: 700px;
          margin: 0 auto 2rem;
          font-size: 1.1rem;
        }

        .btn-light {
          background-color: white;
          color: var(--primary);
        }

        .btn-light:hover {
          background-color: var(--light);
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 3rem 0;
          }
          
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;