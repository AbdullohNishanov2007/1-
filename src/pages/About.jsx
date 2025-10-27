import React from 'react';

const About = () => {
  const stats = [
    { number: "20+", label: "лет на рынке" },
    { number: "500+", label: "успешных проектов" },
    { number: "50+", label: "постоянных клиентов" },
    { number: "24/7", label: "техподдержка" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Качество",
      description: "Мы гарантируем высокое качество решений и надежность внедрения"
    },
    {
      icon: "⚡",
      title: "Скорость",
      description: "Быстрое внедрение и оперативное решение возникающих вопросов"
    },
    {
      icon: "🤝",
      title: "Подход",
      description: "Индивидуальный подход к каждому клиенту и его бизнес-процессам"
    },
    {
      icon: "🛡️",
      title: "Надежность",
      description: "Стабильная работа систем и постоянная техническая поддержка"
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>О компании</h1>
          <p>20 лет опыта в автоматизации бизнеса</p>
        </div>
        
        <section className="section">
          <div className="about-content">
            <div className="about-text">
              <h2>Наша история</h2>
              <p>
                Мы работаем на рынке автоматизации бизнеса более 20 лет, 
                помогая компаниям в России и Кыргызстане оптимизировать 
                свои бизнес-процессы с помощью решений на базе 1С.
              </p>
              <p>
                Наша команда состоит из сертифицированных специалистов 
                с многолетним опытом работы в различных отраслях. 
                Мы понимаем специфику бизнеса наших клиентов и предлагаем 
                решения, которые действительно работают.
              </p>
              
              <h3>Наша миссия</h3>
              <p>
                Помогать бизнесу становиться эффективнее через внедрение 
                современных технологий и автоматизацию рутинных процессов.
              </p>
            </div>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section values-section">
          <div className="container">
            <div className="section-title">
              <h2>Наши ценности</h2>
              <p>Принципы, которые guide нашу работу</p>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section team-section">
          <div className="container">
            <div className="section-title">
              <h2>Наша команда</h2>
              <p>Профессионалы с многолетним опытом</p>
            </div>
            <div className="team-grid">
              <div className="team-item">
                <h4>👨‍💼 Сертифицированные специалисты</h4>
                <p>Все наши сотрудники имеют сертификаты 1С и регулярно проходят обучение</p>
              </div>
              <div className="team-item">
                <h4>🏆 Опыт в различных отраслях</h4>
                <p>Работали с розничной торговлей, производством, услугами и логистикой</p>
              </div>
              <div className="team-item">
                <h4>🔧 Полный цикл разработки</h4>
                <p>От анализа бизнес-процессов до внедрения и дальнейшей поддержки</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
          margin-bottom: 4rem;
        }

        .about-text h2 {
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .about-text h3 {
          color: var(--secondary);
          margin: 2rem 0 1rem;
        }

        .about-text p {
          margin-bottom: 1rem;
          line-height: 1.8;
        }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 2rem 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--dark);
          font-weight: 500;
        }

        .values-section {
          background-color: var(--light);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .value-item {
          text-align: center;
          padding: 2rem 1rem;
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .value-item h3 {
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .team-item {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          text-align: center;
        }

        .team-item h4 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }

          .values-grid,
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;