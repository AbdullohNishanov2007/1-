import React from 'react';

const Services = () => {
  const serviceCategories = [
    {
      title: "🚀 Внедрение 1С",
      services: [
        "Анализ бизнес-процессов",
        "Выбор оптимальной конфигурации",
        "Настройка и адаптация под задачи",
        "Миграция данных из старых систем",
        "Обучение персонала"
      ]
    },
    {
      title: "🔧 Разработка и доработка",
      services: [
        "Разработка новых модулей",
        "Доработка стандартных конфигураций",
        "Интеграция с внешними системами",
        "Создание отчетов и обработок",
        "Оптимизация производительности"
      ]
    },
    {
      title: "📊 Сопровождение и поддержка",
      services: [
        "Техническая поддержка 24/7",
        "Регулярное обновление",
        "Консультации по работе с 1С",
        "Резервное копирование",
        "Удаленное администрирование"
      ]
    },
    {
      title: "🔗 Интеграция и обмен",
      services: [
        "Обмен с сайтами и маркетплейсами",
        "Интеграция с CRM и ERP",
        "Подключение онлайн-касс",
        "Электронный документооборот",
        "Синхронизация с складскими системами"
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="container">
        <div className="page-header">
          <h1>Наши услуги 1С</h1>
          <p>Полный спектр услуг по автоматизации бизнеса</p>
        </div>
        
        <section className="section">
          <div className="section-title">
            <h2>Комплексные решения для вашего бизнеса</h2>
            <p>Мы предлагаем полный цикл услуг по автоматизации на платформе 1С</p>
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
              </div>
            ))}
          </div>
        </section>

        <section className="section additional-services">
          <div className="container">
            <div className="section-title">
              <h2>Дополнительные услуги</h2>
            </div>
            <div className="additional-grid">
              <div className="additional-card">
                <h4>📦 Подключение оборудования</h4>
                <p>Электронные весы, онлайн-кассы, сканеры штрих-кодов, фискальные регистраторы</p>
              </div>
              <div className="additional-card">
                <h4>🔐 Маркировка товаров</h4>
                <p>Настройка работы с системами «Честный знак» и «ТЕКШЕР»</p>
              </div>
              <div className="additional-card">
                <h4>🌐 Обмен с сайтами</h4>
                <p>Интеграция 1С с интернет-магазинами и сайтами на любых платформах</p>
              </div>
              <div className="additional-card">
                <h4>💼 CRM Битрикс24</h4>
                <p>Внедрение и интеграция CRM системы с 1С</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .services-categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

        .additional-services {
          background-color: var(--light);
        }

        .additional-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .additional-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        .additional-card h4 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .services-categories {
            grid-template-columns: 1fr;
          }
          
          .additional-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;