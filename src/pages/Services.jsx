import React from 'react';

const Services = () => {
  const serviceCategories = [
    {
      title: "🚀 Установка 1С",
      services: [
        "Установка лицензионной версии 1С 8.3 (новейшая версия)",
        "1С:Бухгалтерия — от 15 000 сом за одного пользователя",
        "1С:Торговля — от 17 000 сом за одного пользователя", 
        "1С:Производство — от 19 000 сом за одного пользователя",
        "Дополнительный пользователь —-+5 000 сом",
        "🎁 При покупке программы — 1 месяц сопровождения бесплатно!"
      ],
      features: [
        "Встроенная интеграция с ЭСФ, ЭТН и Директ Банком",
        "Автоматическая загрузка курсов валют в онлайн-режиме",
        "Загрузка всех актуальных классификаторов Кыргызской Республики",
        "Обновлённые регламентированные отчёты для своевременной сдачи налогов"
      ]
    },
    {
      title: "🔧 Доработка 1С",
      services: [
        "Разработка новых модулей и функций",
        "Доработка стандартных конфигураций под ваши задачи",
        "Создание индивидуальных отчетов и обработок",
        "Оптимизация производительности системы",
        "Интеграция с внешними системами и сервисами"
      ]
    },
    {
      title: "📊 Сопровождение 1С",
      services: [
        "Техническая поддержка и консультации",
        "Регулярное обновление платформы и конфигураций",
        "Резервное копирование данных",
        "Удаленное администрирование системы",
        "Обучение персонала работе с 1С"
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Наши услуги 1С</h1>
          <p>Комплексные решения для автоматизации вашего бизнеса</p>
        </div>
        
        <section className="section">
          <div className="section-title">
            <h2>Профессиональные услуги по 1С</h2>
            <p>Установка, доработка и сопровождение систем 1С для вашего бизнеса</p>
          </div>

          <div className="services-categories">
            {serviceCategories.map((category, index) => (
              <div key={index} className="service-category">
                <h3>{category.title}</h3>
                <ul>
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>{service}</li>
                  ))}
                </ul>
                
                {category.features && (
                  <div className="features-section">
                    <h4>💡 Новейшая версия 1С включает:</h4>
                    <ul className="features-list">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Готовы автоматизировать ваш бизнес?</h2>
              <p>Свяжитесь с нами для бесплатной консультации и подбора оптимального решения</p>
              <button className="cta-button">Получить консультацию</button>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .services-categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .service-category {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border-left: 4px solid var(--secondary);
        }

        .service-category h3 {
          color: var(--primary);
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
        }

        .service-category ul {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .service-category li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
          position: relative;
          padding-left: 1.5rem;
        }

        .service-category li:before {
          content: '✓';
          color: var(--secondary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .service-category li:last-child {
          border-bottom: none;
        }

        .features-section {
          background: var(--light);
          padding: 1.5rem;
          border-radius: 6px;
          margin-top: 1rem;
        }

        .features-section h4 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .features-list {
          list-style: none;
        }

        .features-list li {
          padding: 0.3rem 0;
          border-bottom: 1px solid #ddd;
          padding-left: 1.5rem;
        }

        .features-list li:before {
          content: '•';
          color: var(--secondary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .features-list li:last-child {
          border-bottom: none;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          text-align: center;
          padding: 4rem 0;
        }

        .cta-content h2 {
          margin-bottom: 1rem;
          font-size: 2rem;
        }

        .cta-content p {
          margin-bottom: 2rem;
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .cta-button {
          background: white;
          color: var(--primary);
          border: none;
          padding: 1rem 2rem;
          border-radius: 6px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .services-categories {
            grid-template-columns: 1fr;
          }
          
          .cta-content h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;